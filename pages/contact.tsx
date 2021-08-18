import React from 'react';
import Layout from '../components/Layout';
import Lines from '../components/Lines';

const Contact: React.FunctionComponent = () => {
    return (
        <div id="Contact">
            <h1 className="page-heading">contact <span className="emoji">🖊️</span></h1>
            <Lines/>
            <p>Feel free to reach out and <span>send me an e-mail</span>.</p>
            <p>P.S. If you ever find yourself in Alberta, visit the beautiful national park of Jasper.</p>
        </div>
    )
}

export default Contact