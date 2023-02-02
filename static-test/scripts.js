const getCodeElement = document.getElementById("getCode");
const resultElement = document.getElementById("result");
const resultLink = document.getElementById("authURL");
const getAuthURL = "http://localhost:3000/dev/api/get-auth-url";

getCodeElement.onclick = function () {
  fetch(getAuthURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const result = JSON.stringify(json);
      const { authUrl } = JSON.parse(result);
      resultElement.innerText = result;
      resultLink.href = authUrl;
    });
};

const codeValue = document.getElementById("code");
const getAccessToken = document.getElementById("getToken");
const accessTokenElement = document.getElementById("accessToken");
const getToken = "http://localhost:3000/dev/api/token";

getAccessToken.onclick = function () {
  let code = codeValue.value;

  if (decodeURIComponent(code) === code) {
    code = encodeURIComponent(codeValue.value);
  }
  const getTokenRequest = getToken + "/" + code;
  fetch(getTokenRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      accessTokenElement.innerText = JSON.stringify(json);
    });
};

const getEvents = document.getElementById("getEvents");
const events = document.getElementById("events");
const getCalendarEvents = "http://localhost:3000/dev/api/get-events";

getEvents.onclick = function () {
  const { access_token } = JSON.parse(accessTokenElement.innerText);
  const eventRequest = getCalendarEvents + "/" + access_token;
  fetch(eventRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      events.innerText = JSON.stringify(json, null, 2);
    });
};