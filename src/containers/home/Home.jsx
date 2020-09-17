import React from 'react';

import Layout from '../../components/common/layout';
import Carousel from "../../components/carousel";

import './home.scss';

const Home = props => {
  return (
    <div>
      <Layout>
        <div className="contentWrapper">
          <Carousel kind={'top_rated'} index={1} />
          <Carousel kind={'popular'} index={2} />
          <Carousel kind={'upcoming'} index={3} />
        </div>
      </Layout>
    </div>
  );
};

export default Home;


