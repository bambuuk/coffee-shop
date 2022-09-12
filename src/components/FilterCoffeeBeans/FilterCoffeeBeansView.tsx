import './filterCoffeeBeans.scss';

interface ButtonsData {
  name: string;
}

function FilterCoffeeBeansView({ buttonsData }: { buttonsData: ButtonsData[] }) {
  const content = buttonsData.map((item) => {
    return (
      <button type="button" className="filter-coffee__filter-item" key={item.name}>{item.name}</button>
    );
  });
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
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterCoffeeBeansView;
