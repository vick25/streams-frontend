import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

interface CustomLinkProps extends NextLinkProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Link: React.FC<CustomLinkProps> = ({ children, ...props }) => {
    return (
        <NextLink {...props}>
            {children}
        </NextLink>
    );
};

export default Link;
