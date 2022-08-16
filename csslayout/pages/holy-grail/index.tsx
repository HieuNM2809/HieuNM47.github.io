import * as React from 'react';
import Head from 'next/head';

import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.HolyGrail}>
            <Head>
                <meta name="description" content="Create a holy grail layout with CSS flexbox" />
                <meta name="og:description" content="Create a holy grail layout with CSS flexbox" />
                <meta name="twitter:description" content="Create a holy grail layout with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css holy grail layout, css layout" />
            </Head>
            <BrowserFrame
                html={`
<div class="container">
    <header>
        ...
    </header>
    <main class="container__main">
        <!-- Left sidebar -->
        <aside class="container__left">...</aside>

        <!-- Main content -->
        <article class="container__middle">...</article>

        <!-- Right sidebar -->
        <nav class="container__right">...</nav>
    </main>
    <footer>
        ...
    </footer>
</div>
`}
                css={`
                    .container {
                        display: flex;
                        flex-direction: column;
                    }

                    .container__main {
                        /* Take the remaining height */
                        flex-grow: 1;

                        /* Layout the left sidebar, main content and right sidebar */
                        display: flex;
                        flex-direction: row;
                    }

                    .container__left {
                        width: 25%;
                    }

                    .container__middle {
                        /* Take the remaining width */
                        flex-grow: 1;
                    }

                    .container__right {
                        width: 20%;
                    }
                `}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <div
                        style={{
                            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                            flexShrink: 0,
                            padding: '16px',
                        }}
                    >
                        <div style={{ width: '50%' }}>
                            <Rectangle />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexGrow: 1 }}>
                        <div
                            style={{
                                borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                padding: '16px',
                                width: '25%',
                            }}
                        >
                            <Block numberOfBlocks={10} />
                        </div>
                        <div style={{ flex: 1, padding: '16px' }}>
                            <Block numberOfBlocks={20} />
                        </div>
                        <div
                            style={{
                                borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                padding: '16px',
                                width: '20%',
                            }}
                        >
                            <Block numberOfBlocks={5} />
                        </div>
                    </div>
                    <div
                        style={{
                            borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                            flexShrink: 0,
                            padding: '16px',
                        }}
                    >
                        <div style={{ width: '40%' }}>
                            <Rectangle />
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;
