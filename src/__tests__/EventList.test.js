import { render, waitFor, within } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';
import App from "../App";

describe('<EventList /> component', () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  })

  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('renders correct number of events', async () => {
    const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });
});

function wait(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

describe('<EventList /> integration', () => {
  test('renders event lists when the app is mounted and rendered', async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const EventListDOM = AppDOM.querySelector('#event-list');
    const allEvents = await getEvents();
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBe(allEvents.length);
    });
  });
});
