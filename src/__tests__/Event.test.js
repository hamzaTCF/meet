import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import mockData from '../mock-data';

describe('<Event /> component', () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event event={mockData[0]} />)
  });

  test('renders event Title', () => {
    expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
  });

  test('renders event showDetails button', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });

  test("by default, details section shouldn't exist in the Event (hidden)", () => {
    expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const user = userEvent.setup();
    await user.click(EventComponent.queryByText('show details'));

    expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
    expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
    expect(EventComponent.queryByText('show details')).not.toBeInTheDocument();
  });

  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const user = userEvent.setup();

    await user.click(EventComponent.queryByText('show details'));
    expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
    expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
    expect(EventComponent.queryByText('show details')).not.toBeInTheDocument();

    await user.click(EventComponent.queryByText('hide details'));
    expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
    expect(EventComponent.queryByText('hide details')).not.toBeInTheDocument();
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });
});