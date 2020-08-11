import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.scss';

import ContactForm from '../../components/ContactForm';

// Prismic CMS imports
import Prismic from 'prismic-javascript';
import { Client } from '../../utils/prismic';

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('my.project.featured', true)
      );
      
      setFeaturedProjects(response.results);
    };

    fetchData();
  }, []);

  return (
    <div className='home'>
      <Helmet>
        <title>Travis Henson | JavaScript Developer</title>
        <meta name='description' content='' />
        <meta name='keywords' content='' />
      </Helmet>

      <section className='home-first'>
        <div className='inner-container'>
          <h1>Hi, my name's <span className='blue-text'>Travis Henson</span>.</h1>
          <h2>I'm a <span className='blue-text'>JavaScript developer</span> currently living in Fairbanks, Alaska. I love building clean and easy-to-use <span className='blue-text'>React apps</span>, and I'm <span className='blue-text'>always wanting to learn</span> new and exciting things.</h2>
          <p>I'm currently seeking full-time employment as a JavaScript developer, either remotely or in the Fairbanks area.</p>
        </div>
      </section>
      <section className='home-second'>
        <div className='inner-container'>
          <h2>Featured Work</h2>
          <div className='section-underline'></div>
        </div>
        <div className='featured-projects-grid'>
          {featuredProjects.map((featuredProject, index) => (
            index % 2 === 0 ?

            <div className='featured-project' key={featuredProject.id}>
              <img src={featuredProject.data.cover_image.url} alt={featuredProject.data.cover_image.alt} />
              <div>
                <h3>{featuredProject.data.project_title[0].text}</h3>
                <p>{featuredProject.data.project_type[0].text}</p>
              </div>
            </div>
            :
            <div className='featured-project' key={featuredProject.id}>
              <div>
                <h3>{featuredProject.data.project_title[0].text}</h3>
                <p>{featuredProject.data.project_type[0].text}</p>
              </div>
              <img src={featuredProject.data.cover_image.url} alt={featuredProject.data.cover_image.alt} />
            </div>
          ))}
        </div>
        <div className='inner-container'>
          <p>Want to see more projects? Check them out on my <Link to='/portfolio'>portfolio page</Link>.</p>
        </div>
      </section>
      <section className='home-third'>
        <h2>Let's get in touch.</h2>
        <p>Want to discuss an opportunity? Have a question about my work?</p>
        <p>Fill out the form below, and I'll get back to you soon!</p>
        <ContactForm />
      </section>
    </div>
  )
};

export default Home;