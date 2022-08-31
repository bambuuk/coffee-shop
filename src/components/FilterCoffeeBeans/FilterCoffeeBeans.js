import './filterCoffeeBeans.scss';

function FilterCoffeeBeans() {
  return (
    <div className="filter-coffee">
      <div className="container">
        <div className="filter-coffee__wrapper">
          <div className="filter-coffee__search">
            <label className="filter-coffee__search-input__label" htmlFor="search">
              Lookiing for
              <input 
                className="filter-coffee__search-input" 
                type="text" 
                id="search"
                placeholder="start typing here..."
              />
            </label>
          </div>
          <div className="filter-coffee__filters">
            <div className="filter-coffee__label-filters">Or filter</div>
            <div className="filter-coffee__filters-list">
              <button type="button" className="filter-coffee__filter-item">Brazil</button>
              <button type="button" className="filter-coffee__filter-item">Kenya</button>
              <button type="button" className="filter-coffee__filter-item">Columbia</button>
              <button type="button" className="filter-coffee__filter-item">All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterCoffeeBeans;
