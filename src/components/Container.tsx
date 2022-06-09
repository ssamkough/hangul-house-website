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
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Navigation = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
`;

const Title = styled.span`
    font-size: 2em;
    font-weight: 700;
    flex: 1;
`;

const Link = styled.a`
    font-size: 1.2em;
    color: black;
    &:hover {
        color: red;
    }
`;

const TITLE = 'Hangul House';

const Container = ({ children }: Props): React.ReactElement => {
    const router = useRouter();

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        event.preventDefault();
        router.push(href);
    };

    return (
        <div>
            <Head>
                <link rel="icon" type="image/x-icon" href="/favicon.png" />
                <title>{TITLE}</title>
            </Head>
            <Body>
                <Navigation>
                    <Title>{TITLE} 🏠</Title>
                    <Link href={'/'} onClick={(event) => handleLinkClick(event, '/')}>
                        Home
                    </Link>
                    <Link href={'/about'} onClick={(event) => handleLinkClick(event, '/about')}>
                        About
                    </Link>
                    <Link href={'/help'} onClick={(event) => handleLinkClick(event, '/help')}>
                        Help
                    </Link>
                </Navigation>
                {children}
            </Body>
        </div>
    );
};

export default Container;
