import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import EventList from '../components/EventList';

describe('<App /> component', () => {
  let AppComponent;
  beforeAll(() => {
    AppComponent = render(<App />);
  });

  test('renders list of events', () => {
    const EventListComponent = render(<EventList />);
    const AppHTML = AppComponent.container.innerHTML;
    const EventListHTML = EventListComponent.container.innerHTML;
    expect(AppHTML).toContain(EventListHTML);
  });
});