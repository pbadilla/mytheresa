import React from 'react';

import Layout from '../../components/common/layout';
import Carousel from "../../components/carousel";

import './home.scss';

const Home = props => {

  return (
    <div>
      <Layout>
        <div className="contentWrapper">
          <Carousel kind={'top_rated'} indexCarousel={0} />
          <Carousel kind={'popular'} indexCarousel={1} />
          <Carousel kind={'upcoming'} indexCarousel={2} />
        </div>
      </Layout>
    </div>
  );
};

export default Home;


