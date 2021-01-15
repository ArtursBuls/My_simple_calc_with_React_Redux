import React, { FC } from 'react';

type Props = {
    onClick: () => void,
    className: string,
    label: string
}

export const Button: FC<Props> = ({ onClick, className, label }) => {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            {label}
        </button>
    );
}