import * as React from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/Layout';
import Home from './home';
import Contact from './contact';

import { useRouter } from 'next/router';

import en from '../locales/en';
import fr from '../locales/fr';
import Lines from '../components/Lines';
import About from './about';
import Projects from './projects';

const IndexPage: React.FunctionComponent = () => {

  const router = useRouter();
  const { locale } = router;
  const translation = locale === 'en' ? en : fr;

  const changeLanguage = (e: { target: { value: any; }; }) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <Layout title="Jaza K.">
      {/* <div className="fuck">
        <div className="greeting">
          {translation.greeting}
        </div>
        <Lines />

        <select onChange={changeLanguage} defaultValue={locale} className="langbutton">
            <option value="en">EN</option>
            <option value="fr">FR</option>
        </select> 
      </div> */}
      
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
     
      {/* <p className="lang-button" onClick={changeLanguage} defaultValue={locale}><span className="lang-code">{translation.languageCode}</span> - {translation.languageChangeButton}</p> */}
    </Layout>
  )
}

export default IndexPage