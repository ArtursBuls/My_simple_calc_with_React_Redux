import React, { FC } from 'react';

type Props = {
    type: string,
    className: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<Props> = ({
    onChange,
    className,
    value,
    placeholder,
    type
}) => {
    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}