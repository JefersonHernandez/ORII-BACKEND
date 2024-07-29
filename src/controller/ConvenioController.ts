import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Convenio } from "../entity/Convenio";
import { Parameters } from "../entity/Parameters";
import { ProgramaInstitucionConvenio } from "../entity/ProgramaInstitucionConvenio";
export class ConvenioController {
  static readonly getAgreements = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Convenio);

    const data = await repository.find({
      relations: {
        tipoConvenio: true,
        // programaInstitucionConvenios: true,
      },
    });

    return res.status(200).json(data);
  };

  static readonly getConvenio = async (req: Request, res: Response) => {
    const { id } = req.params;
    const repository = AppDataSource.getRepository(Convenio);

    const data = await repository.find({
      //@ts-ignore
      id: Number(id),
    });
    return res.status(200).json(data);
  };

  static readonly createConvenio = async (req: Request, res: Response) => {
    const {
      name,
      code,
      title,
      object,
      aggrement_type,
      seccional_cucuta,
      seccional_ocania,
      date_end,
      ufps_programman,
      programman,
    } = req.body;

    const repository = AppDataSource.getRepository(Convenio);

    try {
      const newConvenio = repository.create({
        nombre: name,
        codification: code,
        title,
        object,
        tipo_convenio_id: aggrement_type,
        seccional_cucuta,
        seccional_ocania,
        fecha_finalizacion: date_end,
      });

      const programaInstitucionConvenioRepository = AppDataSource.getRepository(
        ProgramaInstitucionConvenio
      );

      await AppDataSource.transaction(async (transactionalEntityManager) => {
        const response = await transactionalEntityManager.save(newConvenio);

        const programaInstitucionConvenios = [
          ...programman.map((program_id: number) => ({
            convenio_id: response.id,
            programa_institucion_id: Number(program_id),
          })),
          ...ufps_programman.map((program_id: number) => ({
            convenio_id: response.id,
            programa_institucion_id: Number(program_id),
          })),
        ].map((data) => programaInstitucionConvenioRepository.create(data));

        await transactionalEntityManager.save(programaInstitucionConvenios);
      });

      return res.status(201).json({ message: "Convenio creado" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error al insertar convenio" });
    }
  };

  static readonly getAgreementsData = async (_: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Convenio);
    const parametersRepository = AppDataSource.getRepository(Parameters);

    const parameterResponse = await parametersRepository.find({
      take: 1,
      order: { id: "ASC" },
    });

    const parameter = parameterResponse[0];

    const UFPS = parameter.ufps_institution_id;

    const query = await repository.query(`SELECT
    c.id AS agreement_id,
    c.nombre AS agreement_name,
    c.codification as agreement_codification,
    c.title as agreement_title,
    c.vigencia as agreement_vigencia,
    c.object as agreement_object,
    c.seccional_cucuta as agreement_cucuta,
    c.seccional_ocania as agreement_ocania,
    c.fecha_finalizacion as agreement_end_date,
    tc.nombre AS tipo_convenio_nombre,
    i.id AS institution_id,
    i.nombre AS institution_name,
    ct.id AS contact_id,
    ct.nombre AS contact_name,
    ct.cargo AS contact_charge,
    ct.correo AS contact_email,
    ct.sitio_web AS contact_web_site,
    ct.institucion_id AS contact_institucion_id,
    tmc.id AS tmc_id,
    tmc.nombre AS tmc_name,
    p.id AS program_id,
    p.name AS program_name,
    pi.programa_id as program_institucion_program_id,
    pi.institucion_id as program_institucion_institucion_id 
FROM
    convenio c
INNER JOIN tipo_convenio tc ON
    c.tipo_convenio_id = tc.id
INNER JOIN programa_institucion_convenio pic ON
    c.id = pic.convenio_id
INNER JOIN programa_institucion PI ON
    pic.programa_institucion_id = pi.id
INNER JOIN programa p ON
    p.id = pi.programa_id
INNER JOIN institucion i ON
    i.id = pi.institucion_id
INNER JOIN contacto ct ON
    ct.institucion_id = i.id
INNER JOIN tipo_movilidad_convenio_convenio tmcc ON
    tmcc.convenio_id = c.id
INNER JOIN tipo_movilidad_convenio tmc ON
    tmc.id = tmcc.tipo_movilidad_convenio_id;`);
    console.log("query", query);

    let data = [];

    let rows = {};

    let agreement = null;
    let institution = null;
    let contact = null;
    let program = null;
    let types_mobility_agreements = null;

    let _program = null;

    let currentAgreement = null;

    query.forEach((element) => {
      agreement = {
        id: element.agreement_id,
        name: element.agreement_name,
        codification: element.agreement_codification,
        title: element.agreement_title,
        vigencia: element.agreement_vigencia,
        object: element.agreement_object,
        seccional_cucuta: element.agreement_cucuta,
        seccional_ocania: element.agreement_ocania,
        end_date: element.agreement_end_date,
      };

      institution = {
        id: element.institution_id,
        name: element.institution_name,
      };

      contact = {
        id: element.contact_id,
        name: element.contact_name,
        charge: element.contact_charge,
        email: element.contact_email,
        web_site: element.contact_web_site,
        contact_institucion_id: element.contact_institucion_id,
      };

      program = {
        id: element.program_id,
        name: element.program_name,
      };

      types_mobility_agreements = {
        id: element.tmc_id,
        name: element.tmc_name,
      };

      _program = {
        id: element.program_id,
        name: element.program_name,
        program_institucion_institucion_id:
          element.program_institucion_institucion_id,
      };

      if (rows[agreement.id]) {
      } else {
        rows[agreement.id] = agreement;
      }

      currentAgreement = rows[agreement.id];

      if (currentAgreement.types_mobility_agreements) {
        currentAgreement.types_mobility_agreements[
          types_mobility_agreements.id
        ] = types_mobility_agreements;
      } else {
        currentAgreement.types_mobility_agreements = {
          [types_mobility_agreements.id]: types_mobility_agreements,
        };
      }

      if (!currentAgreement.institution && institution.id !== UFPS) {
        currentAgreement.institution = institution;
      }

      if (
        !currentAgreement.contact &&
        contact.contact_institucion_id !== UFPS
      ) {
        currentAgreement.contact = contact;
      }

      if (_program.program_institucion_institucion_id !== UFPS) {
        if (currentAgreement.externalPrograms) {
          // currentAgreement.externalPrograms.push(_program);
          currentAgreement.externalPrograms[_program.id] = _program;
        } else {
          // currentAgreement.externalPrograms = [_program];
          currentAgreement.externalPrograms = { [_program.id]: _program };
        }
      }

      if (_program.program_institucion_institucion_id == UFPS) {
        if (currentAgreement.ufpsPrograms) {
          currentAgreement.ufpsPrograms[_program.id] = _program;
        } else {
          currentAgreement.ufpsPrograms = { [_program.id]: _program };
        }
      }

      data.push({
        agreement,
        institution: {
          id: element.institution_id,
          name: element.institution_name,
        },
        contact: {
          id: element.contact_id,
          name: element.contact_name,
          charge: element.contact_charge,
          email: element.contact_email,
          web_site: element.contact_web_site,
        },
        _raw: element,
      });

      agreement = null;
      institution = null;
      contact = null;
      program = null;
      types_mobility_agreements = null;

      _program = null;

      currentAgreement = null;
    });

    return res.status(200).json(
      Object.values(rows).map((element) => ({
        //@ts-ignore
        ...element,
        //@ts-ignore
        types_mobility_agreements: Object.values(
          //@ts-ignore
          element.types_mobility_agreements
        ),
        //@ts-ignore
        ufpsPrograms: Object.values(element.ufpsPrograms),
        //@ts-ignore
        externalPrograms: Object.values(element.externalPrograms),
      }))
    );
  };
}
