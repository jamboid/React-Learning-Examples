import React from 'react';
import './FilterBar.scss';

const FilterBar = () => (
  <section className='filterBar resultsGrid__toolbar'>
    <ul className='filterBar__actionsList'>
      <li className='filterBar__action'><a href="#" className='filterBar__actionLink'>Filter</a></li>
      <li className='filterBar__action'><a href="#" className='filterBar__actionLink'>Sort</a></li>
      <li className='filterBar__action--last filterBar__action'><a href="#" className='filterBar__actionLink--priceAlert filterBar__actionLink'>Price Alert</a></li>
    </ul>
  </section>
);

export default FilterBar;
