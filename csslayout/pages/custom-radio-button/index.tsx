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
                htmlFor="custom-radio-button"
                style={{
                    alignItems: 'center',
                    cursor: 'pointer',
                    display: 'inline-flex',
                }}
            >
                <input
                    id="custom-radio-button"
                    type="radio"
                    name="option"
                    value={value}
                    style={{ display: 'none' }}
                    onChange={click}
                />
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '9999px',
                        marginRight: '8px',
                        padding: '4px',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: value === selectedValue ? '#00449E' : 'transparent',
                            borderRadius: '9999px',
                            height: '16px',
                            width: '16px',
                        }}
                    />
                </div>
                {children}
            </label>
        );
    };

    return (
        <PatternLayout pattern={Pattern.CustomRadioButton}>
            <Head>
                <meta name="description" content="Create a custom radio button with CSS flexbox" />
                <meta name="og:description" content="Create a custom radio button with CSS flexbox" />
                <meta name="twitter:description" content="Create a custom radio button with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css radio" />
            </Head>
            <BrowserFrame
                html={`
<label class="label">
    <!-- The real radio -->
    <input type="radio" class="label__input" />

    <!-- The fake circle -->
    <div class="label__circle">
        <!-- The inner circle -->
        <div class="label__radio label__radio--selected"></div>
    </div>

    <!-- The text -->
    ...
</div>
`}
                css={`
                    .label {
                        /* Center the content horizontally */
                        align-items: center;
                        display: inline-flex;

                        /* Cursor */
                        cursor: pointer;
                    }

                    .label__input {
                        /* Hide it */
                        display: none;
                    }

                    .label__circle {
                        /* Rounded border */
                        border: 1px solid rgba(0, 0, 0, 0.3);
                        border-radius: 9999px;

                        /* Spacing */
                        margin-right: 8px;
                        padding: 4px;
                    }

                    .label__radio {
                        /* Rounded border */
                        border-radius: 9999px;
                        height: 16px;
                        width: 16px;

                        /* For not selected radio */
                        background-color: transparent;
                    }

                    .label__radio--selected {
                        /* For selected radio */
                        background-color: #00449e;
                    }
                `}
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                        padding: '8px',
                    }}
                >
                    <div style={{ width: '200px' }}>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'inline-flex',
                                marginBottom: '16px',
                            }}
                        >
                            <Radio value="1">
                                <div style={{ width: '100px' }}>
                                    <Rectangle />
                                </div>
                            </Radio>
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'inline-flex',
                                marginBottom: '16px',
                            }}
                        >
                            <Radio value="2">
                                <div style={{ width: '200px' }}>
                                    <Rectangle />
                                </div>
                            </Radio>
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'inline-flex',
                            }}
                        >
                            <Radio value="3">
                                <div style={{ width: '150px' }}>
                                    <Rectangle />
                                </div>
                            </Radio>
                        </div>
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.CustomCheckboxButton, Pattern.RadioButtonGroup]} />
        </PatternLayout>
    );
};

export default Details;
