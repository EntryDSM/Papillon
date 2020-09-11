import * as React from 'react';

import SearchBar from './SearchBar';
import Filter from './Filter';
import FilterSearchWrapper from './style';

function FilterSearch() {
  return (
    <FilterSearchWrapper>
      <SearchBar />
      <Filter />
    </FilterSearchWrapper>
  );
}

export default FilterSearch;
