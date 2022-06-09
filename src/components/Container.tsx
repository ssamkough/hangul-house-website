import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

interface Props {
    children: React.ComponentPropsWithoutRef<'div'>['children'];
}

const Body = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px 32px;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Navigation = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Title = styled.span`
    font-size: 2em;
    font-weight: 700;
    flex: 1;

    @media screen and (max-width: 768px) {
        font-size: 1.4em;
    }
`;

const Link = styled.a`
    font-size: 1.2em;
    color: black;

    &:hover {
        color: red;
    }

    @media screen and (max-width: 768px) {
        font-size: 1em;
    }
`;

const TITLE = 'Hangul House';
const DESCRIPTION = 'made to practice the romanization of hangul';
const PAGE_URL = 'https://hangul.house';
const TWITTER_URL = 'https://twitter.com/ssamkough';

const Container = ({ children }: Props): React.ReactElement => {
    const router = useRouter();

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        event.preventDefault();
        router.push(href);
    };

    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href="/favicon.png" />
                <title>{TITLE}</title>
                <meta name="description" content={DESCRIPTION} />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={TITLE} />
                <meta property="og:description" content={DESCRIPTION} />
                <meta property="og:url" content={PAGE_URL} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@ssamkough" />
                <meta name="twitter:title" content={TITLE} />
                <meta name="twitter:description" content={DESCRIPTION} />
                <meta name="twitter:url" content={TWITTER_URL} />

                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Body>
                <Wrapper>
                    <Navigation>
                        <Title>{TITLE} 🏠</Title>
                        <Link href={'/'} onClick={(event) => handleLinkClick(event, '/')}>
                            Game
                        </Link>
                        <Link href={'/about'} onClick={(event) => handleLinkClick(event, '/about')}>
                            About
                        </Link>
                        <Link href={'/help'} onClick={(event) => handleLinkClick(event, '/help')}>
                            Help
                        </Link>
                    </Navigation>
                    {children}
                </Wrapper>
            </Body>
        </>
    );
};

export default Container;
