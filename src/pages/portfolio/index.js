import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Project from '../../components/Project';

import Prismic from 'prismic-javascript';
import { Client } from '../../utils/prismic';

const Portfolio = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        ''
      );
      console.log(response);
    };

    fetchData();
  }, []);

  return (
    <div className='portfolio'>
      <Helmet>
        <title>Work | Travis Henson</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
      </Helmet>
      <section>
        
      </section>
    </div>
  )
};

export default Portfolio;