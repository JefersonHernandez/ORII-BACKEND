import { Request, Response } from "express";
import { google } from "googleapis";

const path = require("path");

async function createCalendar() {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, "../../credentials.json"),
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  try {
    const response = await calendar.calendars.insert({
      auth,
      requestBody: {
        summary: "ORII",
        description: "A new calendar created via the API",
        timeZone: "America/Bogota",
      },
    });

    console.log("Calendar created:", response.data);
  } catch (error) {
    console.error("Error creating calendar:", error);
  }
  //35bc2d61112ae595ffbd46c8846d028614b86cd5be39bbd3ec3d0f1cfd463ef2@group.calendar.google.com
}

// createCalendar();

async function shareCalendar() {
  const calendarId = process.env.CALENDAR_ID;
  const emailAddress = "jefersonurielhc@ufps.edu.co"; // Tu dirección de correo electrónico
  console.log("Email address:", emailAddress);

  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, "../../credentials.json"),
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  const response = await calendar.acl.insert({
    calendarId: calendarId,
    auth: auth,
    requestBody: {
      role: "writer",
      scope: {
        type: "user",
        value: emailAddress,
      },
    },
  });

  console.log("Calendar shared:", response.data);
}

async function addEvent() {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(__dirname, "../../credentials.json"),
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    const response = await calendar.events.insert({
      calendarId:
        "e8909797b3d8fc5689d0a9a290800b4944b5621f8c4222123513a8ff6e70852e@group.calendar.google.com",
      auth: auth,
      requestBody: {
        summary: "Test Event",
        description: "This is a test event.",
        start: {
          dateTime: "2024-08-27T09:00:00-05:00",
          timeZone: "America/Bogota",
        },
        end: {
          dateTime: "2024-08-27T10:00:00-05:00",
          timeZone: "America/Bogota",
        },
        // attendees: [
        //   { email: "user@example.com" }, // Opcional: añadir asistentes
        // ],
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 },
            { method: "popup", minutes: 10 },
          ],
        },
      },
    });

    console.log("Event created:", response.data);
  } catch (error) {
    console.error("Error creating event:", error);
  }
}

// shareCalendar();

// addEvent();
export class CalendarController {
  static readonly createEvent = async (req: Request, res: Response) => {
    try {
      const { description, date_start, date_end, summary } = req.body;

      const auth = new google.auth.GoogleAuth({
        keyFile: path.join(__dirname, "../../credentials.json"),
        scopes: ["https://www.googleapis.com/auth/calendar.events"],
      });

      const calendar = google.calendar({ version: "v3", auth });

      const event = await new Promise((resolve, reject) => {
        calendar.events.insert(
          {
            auth: auth,
            calendarId: process.env.CALENDAR_ID,
            resource: {
              summary,
              location: "Edificio Torre Administrativa, Oficina TA 240",
              description,
              start: {
                dateTime: date_start,
                timeZone: "America/Bogota",
              },
              end: {
                dateTime: date_end,
                timeZone: "America/Bogota",
              },
              reminders: {
                useDefault: false,
                overrides: [
                  { method: "email", minutes: 24 * 60 },
                  { method: "popup", minutes: 10 },
                ],
              },
            },
          },
          function (err, event) {
            if (err) {
              console.log(
                "There was an error contacting the Calendar service: " + err
              );
              reject(err);
              return;
            }
            console.log(event);
            console.log("Event created: %s", event.htmlLink);
            resolve(event.data);
          }
        );
      });
      res.status(200).json(event);
    } catch (error) {
      res.status(404);
    }
  };

  static readonly updateEvent = async (req: Request, res: Response) => {
    try {
      const { description, date_start, date_end, summary } = req.body;

      const auth = new google.auth.GoogleAuth({
        keyFile: path.join(__dirname, "../../credentials.json"),
        scopes: ["https://www.googleapis.com/auth/calendar.events"],
      });

      const calendar = google.calendar({ version: "v3", auth });

      const event = await new Promise((resolve, reject) => {
        calendar.events.update(
          {
            auth: auth,
            calendarId: process.env.CALENDAR_ID,
            eventId: req.params.id,
            resource: {
              summary,
              location: "Edificio Torre Administrativa, Oficina TA 240",
              description,
              start: {
                dateTime: date_start,
                timeZone: "America/Bogota",
              },
              end: {
                dateTime: date_end,
                timeZone: "America/Bogota",
              },
              reminders: {
                useDefault: false,
                overrides: [
                  { method: "email", minutes: 24 * 60 },
                  { method: "popup", minutes: 10 },
                ],
                attendees: [{ email: "jefersonurielhc@ufps.edu.co" }],
              },
            },
          },
          function (err, event) {
            if (err) {
              console.log(
                "There was an error contacting the Calendar service: " + err
              );
              reject(err);
              return;
            }
            console.log(event);

            console.log("Event created: %s", event.htmlLink);
            resolve(event.data);
          }
        );
      });
      res.status(200).json(event);
    } catch (error) {
      res.status(404);
    }
  };

  static readonly deleteEvent = async (req: Request, res: Response) => {
    try {
      const auth = new google.auth.GoogleAuth({
        keyFile: path.join(__dirname, "../../credentials.json"),
        scopes: ["https://www.googleapis.com/auth/calendar.events"],
      });

      const calendar = google.calendar({ version: "v3", auth });

      const event = await new Promise((resolve, reject) => {
        calendar.events.delete(
          {
            auth: auth,
            calendarId: process.env.CALENDAR_ID,
            eventId: req.params.id,
          },
          function (err, event) {
            if (err) {
              console.log(
                "There was an error contacting the Calendar service: " + err
              );
              reject(err);
              return;
            }
            resolve(event.data);
          }
        );
      });
      res.status(200).json(event);
    } catch (error) {
      res.status(404);
    }
  };

  static readonly getEvent = async (req: Request, res: Response) => {
    try {
      const auth = new google.auth.GoogleAuth({
        keyFile: path.join(__dirname, "../../credentials.json"),
        scopes: ["https://www.googleapis.com/auth/calendar.events"],
      });

      const calendar = google.calendar({ version: "v3", auth });

      const event = await new Promise((resolve, reject) => {
        calendar.events.get(
          { calendarId: process.env.CALENDAR_ID, eventId: req.params.id },
          function (err, event) {
            if (err) {
              console.log(
                "There was an error contacting the Calendar service: " + err
              );
              reject(err);
              return;
            }
            resolve(event.data);
          }
        );
      });
      res.status(200).json(event);
    } catch (error) {
      res.status(404);
      res.send();
    }
  };
}
