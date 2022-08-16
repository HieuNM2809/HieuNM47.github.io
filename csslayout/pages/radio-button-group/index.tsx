import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

interface RadioProps {
    value: string;
}

const Details: React.FC<{}> = () => {
    const [selectedValue, setSelectedValue] = React.useState('1');

    const Radio: React.FC<RadioProps> = ({ value, children }) => {
        const click = () => setSelectedValue(value);

        return (
            <label
                htmlFor="radio-button-group"
                style={{
                    alignItems: 'center',
                    backgroundColor: value === selectedValue ? '#00449E' : 'transparent',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    padding: '8px',
                }}
            >
                <input
                    id="radio-button-group"
                    type="radio"
                    name="option"
                    value={value}
                    style={{ display: 'none' }}
                    onChange={click}
                />
                {children}
            </label>
        );
    };

    return (
        <PatternLayout pattern={Pattern.RadioButtonGroup}>
            <Head>
                <meta name="description" content="Create a radio button group with CSS flexbox" />
                <meta name="og:description" content="Create a radio button group with CSS flexbox" />
                <meta name="twitter:description" content="Create a radio button group with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css radio button" />
            </Head>
            <BrowserFrame
                html={`
<div class="container">
    <!-- Each radio item -->
    <label class="container__label">
        <!-- The radio input -->
        <input type="radio" class="container__input" />

        <!-- The text -->
        ...
    </label>

    <!-- Repeat other items -->
    ...
</div>
`}
                css={`
                    .container {
                        display: flex;

                        /* Border */
                        border: 1px solid rgba(0, 0, 0, 0.3);
                        border-radius: 4px;
                        height: 32px;
                    }

                    .container__label {
                        /* Center the content */
                        align-items: center;
                        display: inline-flex;

                        border-right: 1px solid rgba(0, 0, 0, 0.3);
                        padding: 8px;

                        /* For not selected radio */
                        background-color: transparent;
                        color: #ccc;
                    }

                    .container__label:last-child {
                        /* Remove the right border from the last label */
                        border-right-color: transparent;
                    }

                    .container__label--selected {
                        /* For selected radio */
                        background-color: #00449e;
                        color: #fff;
                    }

                    .container__input {
                        /* Hide it */
                        display: none;
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
                    <div
                        className="p-radio-button-group"
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            display: 'flex',
                            height: '32px',
                        }}
                    >
                        <Radio value="1">
                            <div style={{ width: '80px' }}>
                                <Rectangle />
                            </div>
                        </Radio>
                        <Radio value="2">
                            <div style={{ width: '120px' }}>
                                <Rectangle />
                            </div>
                        </Radio>
                        <Radio value="3">
                            <div style={{ width: '100px' }}>
                                <Rectangle />
                            </div>
                        </Radio>
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.CustomCheckboxButton, Pattern.CustomRadioButton]} />
        </PatternLayout>
    );
};

export default Details;
