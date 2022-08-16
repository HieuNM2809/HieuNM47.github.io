import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.FeatureList}>
            <Head>
                <meta name="description" content="Create a feature list with CSS flexbox" />
                <meta name="og:description" content="Create a feature list with CSS flexbox" />
                <meta name="twitter:description" content="Create a feature list with CSS flexbox" />
                <meta name="keywords" content="css feature list, css flexbox" />
            </Head>
            <BrowserFrame
                html={`
<!-- Feature item -->
<div class="container">
    <!-- Image -->
    <div class="container__image">
        ...
    </div>

    <!-- Right side -->
    <div class="container__feature">
        ...
    </div>
</div>

<!-- Repeated items -->
...
`}
                css={`
                    .container {
                        display: flex;

                        /* OPTIONAL: Reverse the order of image and content */
                        flex-direction: row-reverse;

                        /* OPTIONAL: Spacing between items */
                        margin: 16px 0;
                    }

                    .container__image {
                        width: 128px;
                    }

                    .container__feature {
                        /* Take the remaining width */
                        flex: 1;
                    }
                `}
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ width: '60%' }}>
                        <div style={{ display: 'flex', marginBottom: '32px' }}>
                            <div style={{ margin: '0 16px' }}>
                                <Circle size={128} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ marginBottom: '32px' }}>
                                    <Rectangle height={8} />
                                </div>
                                <Block numberOfBlocks={10} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row-reverse', marginBottom: '32px' }}>
                            <div style={{ margin: '0 16px' }}>
                                <Circle size={128} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ marginBottom: '32px' }}>
                                    <Rectangle height={8} />
                                </div>
                                <Block numberOfBlocks={15} />
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.FeatureComparison]} />
        </PatternLayout>
    );
};

export default Details;
