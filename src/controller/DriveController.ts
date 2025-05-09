import { Request, Response } from "express";
import { google } from "googleapis";

const path = require("path");

// Mapeo de MIME types para exportación
const exportMimeTypes = {
  "application/vnd.google-apps.document":
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.google-apps.spreadsheet":
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // Google Sheets a XLSX
  "application/vnd.google-apps.presentation":
    "application/vnd.openxmlformats-officedocument.presentationml.presentation", // Google Slides a PPTX,
  "application/pdf": "application/pdf",
};

export class DriveController {
  static readonly getInternationalAgreements = async (
    req: Request,
    res: Response
  ) => {
    try {
      const auth = new google.auth.GoogleAuth({
        keyFile: path.join(__dirname, "../../credentials.json"),
        scopes: ["https://www.googleapis.com/auth/drive"],
      });

      const drive = google.drive({ version: "v3", auth });

      const folders = await drive.files.list({
        q: `mimeType = 'application/vnd.google-apps.folder' and name = '${process.env.AGREEMENTS_INTERNATIONAL_FOLDER}'`,
        fields: "nextPageToken, files(id, name)",
      });

      if (folders.data.files.length === 0) {
        throw new Error("Folder not found");
      }

      const [folder] = folders.data.files;

      const files = await drive.files.list({
        q: `'${folder.id}' in parents`,
        fields: "nextPageToken, files(id, name, mimeType)",
      });

      res.status(200).json(files.data.files);
    } catch (error) {
      res.status(404);
      res.send();
    }
  };

  static readonly getNationalAgreements = async (_: Request, res: Response) => {
    try {
      const auth = new google.auth.GoogleAuth({
        keyFile: path.join(__dirname, "../../credentials.json"),
        scopes: ["https://www.googleapis.com/auth/drive"],
      });

      const drive = google.drive({ version: "v3", auth });

      const folders = await drive.files.list({
        q: `mimeType = 'application/vnd.google-apps.folder' and name = '${process.env.AGREEMENTS_NATIONAL_FOLDER}'`,
        fields: "nextPageToken, files(id, name)",
      });

      if (folders.data.files.length === 0) {
        throw new Error("Folder not found");
      }

      const [folder] = folders.data.files;

      const files = await drive.files.list({
        q: `'${folder.id}' in parents`,
        fields: "nextPageToken, files(id, name, mimeType)",
      });

      res.status(200).json(files.data.files);
    } catch (error) {
      res.status(404);
      res.send();
    }
  };

  static readonly getFile = async (req: Request, res: Response) => {
    try {
      const auth = new google.auth.GoogleAuth({
        keyFile: path.join(__dirname, "../../credentials.json"),
        scopes: ["https://www.googleapis.com/auth/drive"],
      });

      const drive = google.drive({ version: "v3", auth });

      const fileMetaData = await drive.files.get({
        fileId: req.params.id,
        fields: "name, mimeType, thumbnailLink",
      });

      // Determinar el MIME type para la exportación
      const exportMimeType = exportMimeTypes[fileMetaData.data.mimeType];

      let file = null;

      if (exportMimeType === "application/pdf") {
        file = await drive.files.get(
          {
            fileId: req.params.id,
            alt: "media",
          },
          {
            responseType: "stream",
          }
        );
      } else {
        file = await drive.files.export(
          {
            fileId: req.params.id,
            alt: "media",
            mimeType: exportMimeType,
          },
          {
            responseType: "stream",
          }
        );
      }

      file.data.pipe(res);

      const fileName = fileMetaData.data.name || "unknown-file";
      res.setHeader(
        "Content-Type",
        file.headers["content-type"] || "application/octet-stream"
      );
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${fileName}"`
      );
      res.setHeader("Access-Control-Expose-Headers", `Content-Disposition`);
    } catch (error) {
      res.status(404).json(error);
    }
  };
}
