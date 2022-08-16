import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.Card}>
            <Head>
                <meta name="description" content="Create a card with CSS flexbox" />
                <meta name="og:description" content="Create a card with CSS flexbox" />
                <meta name="twitter:description" content="Create a card with CSS flexbox" />
                <meta name="keywords" content="css card, css flexbox" />
            </Head>
            <BrowserFrame
                html={`
<div class="card">
    <!-- Cover -->
    <div class="card__cover">
        ...
    </div>

    <!-- Content -->
    <div class="card__content">
        ...
    </div>
    ...
</div>
`}
                css={`
                    .card {
                        display: flex;
                        flex-direction: column;
                    }

                    .card__cover {
                        height: 150px;
                        width: 100%;
                    }

                    .card__content {
                        /* Take available height */
                        flex: 1;
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
                        padding: '16px',
                    }}
                >
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            width: '256px',
                        }}
                    >
                        <Rectangle height={150} />
                        <div style={{ flex: 1, padding: '16px' }}>
                            <div style={{ marginBottom: '16px' }}>
                                <Block numberOfBlocks={15} />
                            </div>
                            <div style={{ width: '128px' }}>
                                <Rectangle height={32} />
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />
            <RelatedPatterns
                patterns={[Pattern.CardLayout, Pattern.LayeredCard, Pattern.StackedCards, Pattern.ThreeDimensionsCard]}
            />
        </PatternLayout>
    );
};

export default Details;
