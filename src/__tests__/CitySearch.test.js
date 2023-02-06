// src/__tests__/CitySearch.js

import { render } from '@testing-library/react';
import CitySearch from '../components/CitySearch';

describe('<CitySearch /> component', () => {
  test('renders text input', () => {
    const CitySearchComponent = render(<CitySearch />);
    const cityTextBox = CitySearchComponent.getByRole('textbox');
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass('city');
  });

  test('renders a list of suggestions', () => {
    const CitySearchComponent = render(<CitySearch />);
    const suggestionList = CitySearchComponent.getByRole('list')
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass('suggestions');
  });

});
