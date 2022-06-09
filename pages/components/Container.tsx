import Head from "next/head";
import React from "react";
import styled from 'styled-components';

interface Props {
  children: React.ComponentPropsWithoutRef<"div">["children"];
}


const Body = styled.div`
width: 100%;
height: 100%;
`

const Container = ({ children }: Props): React.ReactElement => (
  <div>
    <Head>
      <link rel="icon" type="image/x-icon" href="/favicon.png" />
      <title>Hangul House</title>
    </Head>
    <Body>
        <h4>Hangul House 🏠</h4>
    {children}
    </Body>
  </div>
);

export default Container;
