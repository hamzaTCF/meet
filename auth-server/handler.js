'use strict';

const { google } = require("googleapis");
const calendar = google.calendar("v3");
/**
 * SCOPES allows you to set access levels; this is set to readonlu for now
 * because you don't have access rights to update the calendar yourself.
 * For more info, check out the SCOPES documentation at this link:
 * https://developers.google.com/identity/protocols/oauth2/scopes
 */

const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

/**
 If you see 'process.env', this means the value is in the 'config.json'file.
 This is a best practice as it keeps your API secrets hidden.
 Please remember to add 'config.json' to your '.git ignore' file.
 */


const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;
const redirect_uris = [
  "https://hamzaTCF.github.io/meet/",
  "http://localhost:3000",
];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  redirect_uris[0]
);

/**
 * The first step in the OAuth process is to generate a URL so users can log in
 * with Google and be authorized to see your calendar. After logging in,
 * they'll receive a code as a URL paramenter.
 */

module.exports.getAuthURL = async () => {
  /**
   * Scopes array passed to the `scope` option.
   * Any scopes passed must be enabled
   * in the 'OAuth consent screen' settings in your project
   * on your Google Console. Also, any passed scopes are the ones
   * users will see when the consent screen is displayed to them.
   */

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    body: JSON.stringify({
      authUrl
    }),
  };
};

module.exports.getAccessToken = async (event) => {
  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    /**
     * Exchange authorization code for access token with a 'callback' after the exchange,
     * The callback in this case is an arrow function with the results as paramenters: 'err' and 'token.'
     */

    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        return reject(err);
      }
      return resolve(token);
    });
  })
    .then((token) => {
      //Respond with OAtuth token
      return {
        statusCode: 200,
        body: JSON.stringify(token),
      };
    })
    .catch((err) => {
      console.log(err);
      return {
        statusCode: 500,
        body: JSON.stringify(err),
      };
    });
};

module.exports.getCalendarEvents = (event) => {
  const access_token = decodeURIComponent(
    `${event.pathParameters.access_token}`
  );
  oAuth2Client.setCredentials({ access_token });

  return new Promise((resolve, reject) => {
    calendar.events.list(
      {
        calendarId: CALENDAR_ID,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: "startTime",
      },
      (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      }
    );
  })
    .then((results) => {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        body: JSON.stringify({ events: results.data.items }),
      };
    })
    .catch((error) => {
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        body: JSON.stringify(error),
      };
    });
};
