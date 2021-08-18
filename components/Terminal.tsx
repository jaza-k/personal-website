import * as React from 'react';

type Props = {

}

const Terminal: React.FunctionComponent<Props> = () => (
    <div className="terminal">
        <h1 id="prompt">jazak
            <span id="dot">&#8226;</span>
            <span id="root">~</span>
            <span id="directory">/home</span>
            <span id="arrow">»</span>
            <span id="cursor">_</span>
        </h1>
    </div>
)

export default Terminal