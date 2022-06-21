import React from 'react';
import { Header, Catalog, AboutUs, HowDelevery } from '../Components';

function Home() {
  return (
    <div>
      <Header />
      <Catalog id="Catalog" />
      <AboutUs id="AboutUs" />
      <HowDelevery id="HowDelevery" />
    </div>
  );
}

export default Home;
