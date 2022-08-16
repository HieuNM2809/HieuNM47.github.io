import * as React from 'react';
import { Window } from '@1milligram/design';

import { Code } from '../components/Code';

interface BrowserFrameProps {
    css: string;
    html: string;
}

const BrowserFrame: React.FC<BrowserFrameProps> = ({ children, css, html }) => {
    return (
        <Window>
            <div className="demo__html">
                <Code language="markup">{html}</Code>
            </div>
            <div className="demo__css">
                <Code language="css">{css}</Code>
            </div>
            <div className="demo__live">{children}</div>
        </Window>
    );
};

export default BrowserFrame;
