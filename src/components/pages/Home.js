import React from 'react';

import Search from '../../components/bills/Search';
import Bills from '../../components/bills/Bills';

const Home = () => {
  return (
    <div className='container'>
      <Search />
      <Bills />
    </div>
  );
};

export default Home;
