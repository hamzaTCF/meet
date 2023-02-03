import { render } from '@testing-library/react';
import EventList from '../components/EventList';

describe('<EventList /> component', () => {
  test('Have an element with "list" role', () => {
    const EventListComponent = render(<EventList />);
    expect(EventListComponent.getByRole("list")).toBeInTheDocument();
  });
});