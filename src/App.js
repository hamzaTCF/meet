// src/App.js

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { InfoAlert, WarningAlert, ErrorAlert } from './components/Alert';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';
import WelcomeScreen from './components/WelcomeScreen';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';

import './nprogress.css'
import './App.css';

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  useEffect(() => {
    if (
      window.location.href.startsWith("http://localhost") ||
      !navigator.onLine ||
      !showWelcomeScreen
    ) {
      if (navigator.onLine) setWarningAlert("");
      else setWarningAlert("You are currently offline! Currently, app is using cached data");
      fetchData();
    }
  }, [currentCity, currentNOE, showWelcomeScreen]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  return (
    <div className="App">
      {(
        !window.location.href.startsWith("http://localhost") &&
        navigator.onLine &&
        showWelcomeScreen
      ) ?
        <WelcomeScreen setShowWelcomeScreen={setShowWelcomeScreen} /> :
        <>
          <h1>Meet App</h1>
          <div className="alerts-container">
            {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
            {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
            {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
          </div>
          <CitySearch
            allLocations={allLocations}
            setCurrentCity={setCurrentCity}
            setInfoAlert={setInfoAlert} />
          <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />
          <div className="charts-container">
            <EventGenresChart events={events} />
            <CityEventsChart allLocations={allLocations} events={events} />
          </div>
          <EventList events={events} />
        </>
      }
    </div>
  );
}

export default App;
