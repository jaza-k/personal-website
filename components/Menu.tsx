import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

{/* <header>
      <nav>
        <Link href='/'><a>Home</a></Link> | {' '}
        <Link href='/about'><a>List as Functional Component</a></Link> | {' '}
        <Link href='/projects'><a>List As Class</a></Link> | {' '}
        <Link href='/contact'><a>About</a></Link> | {' '}
      </nav>
    </header> */}

{/* <p><Link href='/about'><a>About</a></Link></p> */}

type Props = {

}

const Menu: React.FunctionComponent<Props> = () => (
    <div className="menu">
        <div id="line-one"></div>
        <div id="line-two"></div>
        <div id="line-three"></div>
    </div>
)

export default Menu