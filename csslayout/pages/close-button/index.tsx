import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.CloseButton}>
            <Head>
                <meta name="description" content="Create a close button with CSS flexbox" />
                <meta name="og:description" content="Create a close button with CSS flexbox" />
                <meta name="twitter:description" content="Create a close button with CSS flexbox" />
                <meta name="keywords" content="css close button, css flexbox" />
            </Head>
            <BrowserFrame
                html={`
<button class="button">
    <div class="button__line button__line--first"></div>

    <div class="button__line button__line--second"></div>
</button>
`}
                css={`
                    .button {
                        /* Reset */
                        background-color: transparent;
                        border-color: transparent;

                        /* Cursor */
                        cursor: pointer;

                        /* Size */
                        height: 32px;
                        width: 32px;

                        /* Used to position the inner */
                        position: relative;
                    }

                    .button__line {
                        /* Background color */
                        background-color: rgba(0, 0, 0, 0.3);

                        /* Position */
                        position: absolute;

                        /* Size */
                        height: 1px;
                        width: 100%;
                    }

                    .button__line--first {
                        /* Position */
                        left: 0px;
                        top: 50%;
                        transform: translate(0%, -50%) rotate(45deg);

                        /* Size */
                        height: 1px;
                        width: 100%;
                    }

                    .button__line--second {
                        /* Position */
                        left: 50%;
                        top: 0px;
                        transform: translate(-50%, 0%) rotate(45deg);

                        /* Size */
                        height: 100%;
                        width: 1px;
                    }
                `}
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                        padding: '8px',
                    }}
                >
                    <button
                        style={{
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            cursor: 'pointer',
                            height: '32px',
                            position: 'relative',
                            width: '32px',
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                height: '1px',
                                left: 0,
                                position: 'absolute',
                                top: '50%',
                                transform: 'translate(0%, -50%) rotate(45deg)',
                                width: '100%',
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                height: '100%',
                                left: '50%',
                                position: 'absolute',
                                top: 0,
                                transform: 'translate(-50%, 0%) rotate(45deg)',
                                width: '1px',
                            }}
                        />
                    </button>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.ArrowButtons, Pattern.Chip, Pattern.Modal, Pattern.Notification]} />
        </PatternLayout>
    );
};

export default Details;
