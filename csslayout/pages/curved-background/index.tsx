import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.CurvedBackground}>
            <Head>
                <meta name="description" content="Create an element with curved background" />
                <meta name="og:description" content="Create an element with curved background" />
                <meta name="twitter:description" content="Create an element with curved background" />
                <meta name="keywords" content="css border radius, css curved background" />
            </Head>
            <BrowserFrame
                html={`
<div class="container">
    ...
</div>
`}
                css={`
                    .container {
                        /* Background color */
                        background-color: rgba(0, 0, 0, 0.3);

                        /* You can use gradient background color such as
    background: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%); */

                        /* Curved corners */
                        border-bottom-left-radius: 50% 40%;
                        border-bottom-right-radius: 50% 40%;
                    }
                `}
            >
                <div
                    style={{
                        height: '100%',
                        padding: '8px',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            borderBottomLeftRadius: '50% 40%',
                            borderBottomRightRadius: '50% 40%',
                            height: '50%',
                            width: '100%',
                        }}
                    />
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.DiagonalSection]} />
        </PatternLayout>
    );
};

export default Details;
