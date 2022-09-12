import React from 'react';
import './filterCoffeeBeans.scss';

interface ButtonsData {
  name: string;
}

function FilterCoffeeBeansView({ buttonsData, onSelectFilter, currentFilter }: { 
  buttonsData: ButtonsData[], 
  onSelectFilter: (filter: string) => void,
  currentFilter: string; 
}) {
  const content = buttonsData.map((item) => {
    const clazz = currentFilter === item.name 
      ? 'filter-coffee__filter-item active-filters' : 'filter-coffee__filter-item';
    
    return (
      <button 
        type="button" 
        className={clazz} 
        key={item.name}
        onClick={() => onSelectFilter(item.name)}
        name={item.name}
      >
        {item.name}
      </button>
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
