import * as React from 'react';

const Scrollbar: React.FunctionComponent = () => (
    <div className="scrollbar">
        <p className="scroll-text">Scroll</p>
        <div className="main-scrollbar">
            <div className="mini-scrollbar"></div>
        </div>
    </div>
)

export default Scrollbar
