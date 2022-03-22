import * as React from 'react';

import css from './Button.module.scss';

type Props = {
    className?: string;
    children: string | React.ReactNode;
}

const Button: React.FunctionComponent<Props> = ({
    className,
    children,
}) => {
    return (
        <button className={[css.button, className].join(' ')}>{children}</button>
    )
}

export default Button;
