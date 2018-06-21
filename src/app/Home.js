import React from 'react';
import PageHeader from './components/PageHeader';
import PageContent from './components/PageContent';

const size = {fontSize: '20px'};

const Home = () => (
  <div>
    <PageHeader color="is-primary" title="Tyler Mayberry" />
    <PageContent style={size}>
      I come from Oklahoma of the United States and I am 
      currently an Assistant Language Teacher in the city 
      of Matsumoto, Japan.
      <br /><br />
      Recently I have decided to improve my web-development 
      skills in order to become a freelance web-developer 
      to fulfill my dream of becoming a location independent 
      entreprenuer so that I can travel the world freely while 
      also creating applications that sound fun.
      <br /><br />
      This website is the first of many web publications 
      to come. I plan on sharing my progress through blog 
      posts, videos, and whatever else seems appropriate. 
      All of which, can be found on this site (if not now, 
      then in the near future).
    </PageContent>
  </div>
)
export default Home