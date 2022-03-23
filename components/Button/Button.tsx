import * as React from 'react';

import css from './Button.module.scss';

type Props = {
    className?: string;
    children: string | React.ReactNode;
    value?: string;
    onClick?: Function;
}

const Button: React.FunctionComponent<Props> = ({
    className,
    children,
    value,
    onClick,
}) => {

    const handleClick = () => {
        typeof onClick === 'function' 
            ? onClick(value)
            : null
    }

    return (
        <button className={[css.button, className].join(' ')} onClick={handleClick}>{children}</button>
    )
}

export default Button;
