// src/components/CitySearch.js

const CitySearch = () => {
  return (
    <div id="city-search">
      <input
        type="text"
        className="city"
      />
      <ul className="suggestions">
      </ul>
    </div>
  )
}

export default CitySearch;