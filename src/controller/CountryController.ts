import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Countries } from "../entity/Countries";

export class CountryController {
  static getPaises = async (req: Request, res: Response) => {
    const repository = AppDataSource.getRepository(Countries);

    try {
      const data = await repository.find({ select: ["id", "name", "iso"] });
      return res.status(200).json(data);
    } catch (error) {
      res.status(404).json({
        message: "Sin resultados",
        error,
      });
    }
  };

  static getCodigos = async (req: Request, res: Response) => {
    res.status(200).json([
      {
        indicativo: "",
        codigoPais: "BV",
      },
      {
        indicativo: "",
        codigoPais: "GS",
      },
      {
        indicativo: "",
        codigoPais: "XK",
      },
      {
        indicativo: "",
        codigoPais: "TF",
      },
      {
        indicativo: "",
        codigoPais: "AQ",
      },
      {
        indicativo: " ",
        codigoPais: "HM",
      },
      {
        indicativo: "+1-242",
        codigoPais: "BS",
      },
      {
        indicativo: "+1-246",
        codigoPais: "BB",
      },
      {
        indicativo: "+1-264",
        codigoPais: "AI",
      },
      {
        indicativo: "+1-268",
        codigoPais: "AG",
      },
      {
        indicativo: "+1-284",
        codigoPais: "VG",
      },
      {
        indicativo: "+1-340",
        codigoPais: "VI",
      },
      {
        indicativo: "+1-345",
        codigoPais: "KY",
      },
      {
        indicativo: "+1-441",
        codigoPais: "BM",
      },
      {
        indicativo: "+1-473",
        codigoPais: "GD",
      },
      {
        indicativo: "+1-649",
        codigoPais: "TC",
      },
      {
        indicativo: "+1-664",
        codigoPais: "MS",
      },
      {
        indicativo: "+1-670",
        codigoPais: "MP",
      },
      {
        indicativo: "+1-671",
        codigoPais: "GU",
      },
      {
        indicativo: "+1-684",
        codigoPais: "AS",
      },
      {
        indicativo: "+1-758",
        codigoPais: "LC",
      },
      {
        indicativo: "+1-767",
        codigoPais: "DM",
      },
      {
        indicativo: "+1-784",
        codigoPais: "VC",
      },
      {
        indicativo: "+1-787 and 1-939",
        codigoPais: "PR",
      },
      {
        indicativo: "+1-809 and 1-829",
        codigoPais: "DO",
      },
      {
        indicativo: "+1-868",
        codigoPais: "TT",
      },
      {
        indicativo: "+1-869",
        codigoPais: "KN",
      },
      {
        indicativo: "+1-876",
        codigoPais: "JM",
      },
      {
        indicativo: "+358-18",
        codigoPais: "AX",
      },
      {
        indicativo: "+44-1481",
        codigoPais: "GG",
      },
      {
        indicativo: "+44-1534",
        codigoPais: "JE",
      },
      {
        indicativo: "+44-1624",
        codigoPais: "IM",
      },
      {
        indicativo: "1",
        codigoPais: "CA",
      },
      {
        indicativo: "1",
        codigoPais: "US",
      },
      {
        indicativo: "1",
        codigoPais: "UM",
      },
      {
        indicativo: "20",
        codigoPais: "EG",
      },
      {
        indicativo: "211",
        codigoPais: "SS",
      },
      {
        indicativo: "212",
        codigoPais: "EH",
      },
      {
        indicativo: "212",
        codigoPais: "MA",
      },
      {
        indicativo: "213",
        codigoPais: "DZ",
      },
      {
        indicativo: "216",
        codigoPais: "TN",
      },
      {
        indicativo: "218",
        codigoPais: "LY",
      },
      {
        indicativo: "220",
        codigoPais: "GM",
      },
      {
        indicativo: "221",
        codigoPais: "SN",
      },
      {
        indicativo: "222",
        codigoPais: "MR",
      },
      {
        indicativo: "223",
        codigoPais: "ML",
      },
      {
        indicativo: "224",
        codigoPais: "GN",
      },
      {
        indicativo: "225",
        codigoPais: "CI",
      },
      {
        indicativo: "226",
        codigoPais: "BF",
      },
      {
        indicativo: "227",
        codigoPais: "NE",
      },
      {
        indicativo: "228",
        codigoPais: "TG",
      },
      {
        indicativo: "229",
        codigoPais: "BJ",
      },
      {
        indicativo: "230",
        codigoPais: "MU",
      },
      {
        indicativo: "231",
        codigoPais: "LR",
      },
      {
        indicativo: "232",
        codigoPais: "SL",
      },
      {
        indicativo: "233",
        codigoPais: "GH",
      },
      {
        indicativo: "234",
        codigoPais: "NG",
      },
      {
        indicativo: "235",
        codigoPais: "TD",
      },
      {
        indicativo: "236",
        codigoPais: "CF",
      },
      {
        indicativo: "237",
        codigoPais: "CM",
      },
      {
        indicativo: "238",
        codigoPais: "CV",
      },
      {
        indicativo: "239",
        codigoPais: "ST",
      },
      {
        indicativo: "240",
        codigoPais: "GQ",
      },
      {
        indicativo: "241",
        codigoPais: "GA",
      },
      {
        indicativo: "242",
        codigoPais: "CG",
      },
      {
        indicativo: "243",
        codigoPais: "CD",
      },
      {
        indicativo: "244",
        codigoPais: "AO",
      },
      {
        indicativo: "245",
        codigoPais: "GW",
      },
      {
        indicativo: "246",
        codigoPais: "IO",
      },
      {
        indicativo: "248",
        codigoPais: "SC",
      },
      {
        indicativo: "249",
        codigoPais: "SD",
      },
      {
        indicativo: "250",
        codigoPais: "RW",
      },
      {
        indicativo: "251",
        codigoPais: "ET",
      },
      {
        indicativo: "252",
        codigoPais: "SO",
      },
      {
        indicativo: "253",
        codigoPais: "DJ",
      },
      {
        indicativo: "254",
        codigoPais: "KE",
      },
      {
        indicativo: "255",
        codigoPais: "TZ",
      },
      {
        indicativo: "256",
        codigoPais: "UG",
      },
      {
        indicativo: "257",
        codigoPais: "BI",
      },
      {
        indicativo: "258",
        codigoPais: "MZ",
      },
      {
        indicativo: "260",
        codigoPais: "ZM",
      },
      {
        indicativo: "261",
        codigoPais: "MG",
      },
      {
        indicativo: "262",
        codigoPais: "RE",
      },
      {
        indicativo: "262",
        codigoPais: "YT",
      },
      {
        indicativo: "263",
        codigoPais: "ZW",
      },
      {
        indicativo: "264",
        codigoPais: "NA",
      },
      {
        indicativo: "265",
        codigoPais: "MW",
      },
      {
        indicativo: "266",
        codigoPais: "LS",
      },
      {
        indicativo: "267",
        codigoPais: "BW",
      },
      {
        indicativo: "268",
        codigoPais: "SZ",
      },
      {
        indicativo: "269",
        codigoPais: "KM",
      },
      {
        indicativo: "27",
        codigoPais: "ZA",
      },
      {
        indicativo: "290",
        codigoPais: "SH",
      },
      {
        indicativo: "291",
        codigoPais: "ER",
      },
      {
        indicativo: "297",
        codigoPais: "AW",
      },
      {
        indicativo: "298",
        codigoPais: "FO",
      },
      {
        indicativo: "299",
        codigoPais: "GL",
      },
      {
        indicativo: "30",
        codigoPais: "GR",
      },
      {
        indicativo: "31",
        codigoPais: "NL",
      },
      {
        indicativo: "32",
        codigoPais: "BE",
      },
      {
        indicativo: "33",
        codigoPais: "FR",
      },
      {
        indicativo: "34",
        codigoPais: "ES",
      },
      {
        indicativo: "350",
        codigoPais: "GI",
      },
      {
        indicativo: "351",
        codigoPais: "PT",
      },
      {
        indicativo: "352",
        codigoPais: "LU",
      },
      {
        indicativo: "353",
        codigoPais: "IE",
      },
      {
        indicativo: "354",
        codigoPais: "IS",
      },
      {
        indicativo: "355",
        codigoPais: "AL",
      },
      {
        indicativo: "356",
        codigoPais: "MT",
      },
      {
        indicativo: "357",
        codigoPais: "CY",
      },
      {
        indicativo: "358",
        codigoPais: "FI",
      },
      {
        indicativo: "359",
        codigoPais: "BG",
      },
      {
        indicativo: "36",
        codigoPais: "HU",
      },
      {
        indicativo: "370",
        codigoPais: "LT",
      },
      {
        indicativo: "371",
        codigoPais: "LV",
      },
      {
        indicativo: "372",
        codigoPais: "EE",
      },
      {
        indicativo: "373",
        codigoPais: "MD",
      },
      {
        indicativo: "374",
        codigoPais: "AM",
      },
      {
        indicativo: "375",
        codigoPais: "BY",
      },
      {
        indicativo: "376",
        codigoPais: "AD",
      },
      {
        indicativo: "377",
        codigoPais: "MC",
      },
      {
        indicativo: "378",
        codigoPais: "SM",
      },
      {
        indicativo: "379",
        codigoPais: "VA",
      },
      {
        indicativo: "380",
        codigoPais: "UA",
      },
      {
        indicativo: "381",
        codigoPais: "RS",
      },
      {
        indicativo: "382",
        codigoPais: "ME",
      },
      {
        indicativo: "385",
        codigoPais: "HR",
      },
      {
        indicativo: "386",
        codigoPais: "SI",
      },
      {
        indicativo: "387",
        codigoPais: "BA",
      },
      {
        indicativo: "389",
        codigoPais: "MK",
      },
      {
        indicativo: "39",
        codigoPais: "IT",
      },
      {
        indicativo: "40",
        codigoPais: "RO",
      },
      {
        indicativo: "41",
        codigoPais: "CH",
      },
      {
        indicativo: "420",
        codigoPais: "CZ",
      },
      {
        indicativo: "421",
        codigoPais: "SK",
      },
      {
        indicativo: "423",
        codigoPais: "LI",
      },
      {
        indicativo: "43",
        codigoPais: "AT",
      },
      {
        indicativo: "44",
        codigoPais: "GB",
      },
      {
        indicativo: "45",
        codigoPais: "DK",
      },
      {
        indicativo: "46",
        codigoPais: "SE",
      },
      {
        indicativo: "47",
        codigoPais: "SJ",
      },
      {
        indicativo: "47",
        codigoPais: "NO",
      },
      {
        indicativo: "48",
        codigoPais: "PL",
      },
      {
        indicativo: "49",
        codigoPais: "DE",
      },
      {
        indicativo: "500",
        codigoPais: "FK",
      },
      {
        indicativo: "501",
        codigoPais: "BZ",
      },
      {
        indicativo: "502",
        codigoPais: "GT",
      },
      {
        indicativo: "503",
        codigoPais: "SV",
      },
      {
        indicativo: "504",
        codigoPais: "HN",
      },
      {
        indicativo: "505",
        codigoPais: "NI",
      },
      {
        indicativo: "506",
        codigoPais: "CR",
      },
      {
        indicativo: "507",
        codigoPais: "PA",
      },
      {
        indicativo: "508",
        codigoPais: "PM",
      },
      {
        indicativo: "509",
        codigoPais: "HT",
      },
      {
        indicativo: "51",
        codigoPais: "PE",
      },
      {
        indicativo: "52",
        codigoPais: "MX",
      },
      {
        indicativo: "53",
        codigoPais: "CU",
      },
      {
        indicativo: "54",
        codigoPais: "AR",
      },
      {
        indicativo: "55",
        codigoPais: "BR",
      },
      {
        indicativo: "56",
        codigoPais: "CL",
      },
      {
        indicativo: "57",
        codigoPais: "CO",
      },
      {
        indicativo: "58",
        codigoPais: "VE",
      },
      {
        indicativo: "590",
        codigoPais: "BL",
      },
      {
        indicativo: "590",
        codigoPais: "GP",
      },
      {
        indicativo: "590",
        codigoPais: "MF",
      },
      {
        indicativo: "591",
        codigoPais: "BO",
      },
      {
        indicativo: "592",
        codigoPais: "GY",
      },
      {
        indicativo: "593",
        codigoPais: "EC",
      },
      {
        indicativo: "594",
        codigoPais: "GF",
      },
      {
        indicativo: "595",
        codigoPais: "PY",
      },
      {
        indicativo: "596",
        codigoPais: "MQ",
      },
      {
        indicativo: "597",
        codigoPais: "SR",
      },
      {
        indicativo: "598",
        codigoPais: "UY",
      },
      {
        indicativo: "599",
        codigoPais: "BQ",
      },
      {
        indicativo: "599",
        codigoPais: "CW",
      },
      {
        indicativo: "599",
        codigoPais: "SX",
      },
      {
        indicativo: "60",
        codigoPais: "MY",
      },
      {
        indicativo: "61",
        codigoPais: "CC",
      },
      {
        indicativo: "61",
        codigoPais: "CX",
      },
      {
        indicativo: "61",
        codigoPais: "AU",
      },
      {
        indicativo: "62",
        codigoPais: "ID",
      },
      {
        indicativo: "63",
        codigoPais: "PH",
      },
      {
        indicativo: "64",
        codigoPais: "NZ",
      },
      {
        indicativo: "65",
        codigoPais: "SG",
      },
      {
        indicativo: "66",
        codigoPais: "TH",
      },
      {
        indicativo: "670",
        codigoPais: "TL",
      },
      {
        indicativo: "672",
        codigoPais: "NF",
      },
      {
        indicativo: "673",
        codigoPais: "BN",
      },
      {
        indicativo: "674",
        codigoPais: "NR",
      },
      {
        indicativo: "675",
        codigoPais: "PG",
      },
      {
        indicativo: "676",
        codigoPais: "TO",
      },
      {
        indicativo: "677",
        codigoPais: "SB",
      },
      {
        indicativo: "678",
        codigoPais: "VU",
      },
      {
        indicativo: "679",
        codigoPais: "FJ",
      },
      {
        indicativo: "680",
        codigoPais: "PW",
      },
      {
        indicativo: "681",
        codigoPais: "WF",
      },
      {
        indicativo: "682",
        codigoPais: "CK",
      },
      {
        indicativo: "683",
        codigoPais: "NU",
      },
      {
        indicativo: "685",
        codigoPais: "WS",
      },
      {
        indicativo: "686",
        codigoPais: "KI",
      },
      {
        indicativo: "687",
        codigoPais: "NC",
      },
      {
        indicativo: "688",
        codigoPais: "TV",
      },
      {
        indicativo: "689",
        codigoPais: "PF",
      },
      {
        indicativo: "690",
        codigoPais: "TK",
      },
      {
        indicativo: "691",
        codigoPais: "FM",
      },
      {
        indicativo: "692",
        codigoPais: "MH",
      },
      {
        indicativo: "7",
        codigoPais: "RU",
      },
      {
        indicativo: "7",
        codigoPais: "KZ",
      },
      {
        indicativo: "81",
        codigoPais: "JP",
      },
      {
        indicativo: "82",
        codigoPais: "KR",
      },
      {
        indicativo: "84",
        codigoPais: "VN",
      },
      {
        indicativo: "850",
        codigoPais: "KP",
      },
      {
        indicativo: "852",
        codigoPais: "HK",
      },
      {
        indicativo: "853",
        codigoPais: "MO",
      },
      {
        indicativo: "855",
        codigoPais: "KH",
      },
      {
        indicativo: "856",
        codigoPais: "LA",
      },
      {
        indicativo: "86",
        codigoPais: "CN",
      },
      {
        indicativo: "870",
        codigoPais: "PN",
      },
      {
        indicativo: "880",
        codigoPais: "BD",
      },
      {
        indicativo: "886",
        codigoPais: "TW",
      },
      {
        indicativo: "90",
        codigoPais: "TR",
      },
      {
        indicativo: "91",
        codigoPais: "IN",
      },
      {
        indicativo: "92",
        codigoPais: "PK",
      },
      {
        indicativo: "93",
        codigoPais: "AF",
      },
      {
        indicativo: "94",
        codigoPais: "LK",
      },
      {
        indicativo: "95",
        codigoPais: "MM",
      },
      {
        indicativo: "960",
        codigoPais: "MV",
      },
      {
        indicativo: "961",
        codigoPais: "LB",
      },
      {
        indicativo: "962",
        codigoPais: "JO",
      },
      {
        indicativo: "963",
        codigoPais: "SY",
      },
      {
        indicativo: "964",
        codigoPais: "IQ",
      },
      {
        indicativo: "965",
        codigoPais: "KW",
      },
      {
        indicativo: "966",
        codigoPais: "SA",
      },
      {
        indicativo: "967",
        codigoPais: "YE",
      },
      {
        indicativo: "968",
        codigoPais: "OM",
      },
      {
        indicativo: "970",
        codigoPais: "PS",
      },
      {
        indicativo: "971",
        codigoPais: "AE",
      },
      {
        indicativo: "972",
        codigoPais: "IL",
      },
      {
        indicativo: "973",
        codigoPais: "BH",
      },
      {
        indicativo: "974",
        codigoPais: "QA",
      },
      {
        indicativo: "975",
        codigoPais: "BT",
      },
      {
        indicativo: "976",
        codigoPais: "MN",
      },
      {
        indicativo: "977",
        codigoPais: "NP",
      },
      {
        indicativo: "98",
        codigoPais: "IR",
      },
      {
        indicativo: "992",
        codigoPais: "TJ",
      },
      {
        indicativo: "993",
        codigoPais: "TM",
      },
      {
        indicativo: "994",
        codigoPais: "AZ",
      },
      {
        indicativo: "995",
        codigoPais: "GE",
      },
      {
        indicativo: "996",
        codigoPais: "KG",
      },
      {
        indicativo: "998",
        codigoPais: "UZ",
      },
    ]);
  };
}
