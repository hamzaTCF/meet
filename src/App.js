// src/App.js

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    initApp();
  }, []);

  const initApp = async () => {
    const allEvents = await getEvents();
    setAllLocations(extractLocations(allEvents));
  }

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} />
      <NumberOfEvents />
      <EventList />
    </div>
  );
}

export default App;