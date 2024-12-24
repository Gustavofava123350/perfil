import React from 'react';

interface LinkComponentProps {
    href: string;
    title: string;
}

const LinkComponent: React.FC<LinkComponentProps> = ({ href, title }) => {
    return (
        <a href={href} className="link">
            {title}
        </a>
    );
}

export default LinkComponent;
