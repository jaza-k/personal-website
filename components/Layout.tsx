import * as React from 'react';
import Head from 'next/head';
import Menu from './Menu';
import Terminal from './Terminal';
import Scrollbar from './Scrollbar';

type Props = {
  title?: string,
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'Jaza K.' }) => (
  <div>
    
    <Head>
      <title>{title}</title>
      <meta name="author" content="Jaza Khan"/>
      <meta name="description" content="Personal site of Jaza Khan"/>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <div className="wrapper">
      <div className="triangles-bg"></div>
      <div className="inner-box">
        <Scrollbar/>
        <Terminal/>
        <Menu/>
        <div className="content">
          {children}
        </div>
        <footer>
          <div className="personal-logo">
            <img className="logo-image" src="/img/personal-logo.png"/>
          </div>
        </footer>
      </div>
    </div>

  </div>
)

export default Layout