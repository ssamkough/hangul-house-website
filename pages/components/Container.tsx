import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

interface Props {
    children: React.ComponentPropsWithoutRef<'div'>['children'];
}

const Body = styled.div`
    width: 100%;
    height: 100%;
`;

const TITLE = 'Hangul House';

const Container = ({ children }: Props): React.ReactElement => (
    <div>
        <Head>
            <link rel="icon" type="image/x-icon" href="/favicon.png" />
            <title>{TITLE}</title>
        </Head>
        <Body>
            <h3>{TITLE} 🏠</h3>
            {children}
        </Body>
    </div>
);

export default Container;
