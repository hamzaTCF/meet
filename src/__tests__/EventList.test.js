import { render } from '@testing-library/react';
import EventList from '../components/EventList';

describe('<EventList /> component', () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList events={
      [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    } />);
  })

  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('renders correct number of events', () => {
    expect(EventListComponent.queryAllByRole("listitem")).toHaveLength(4);
  });
});