import * as React from 'react';

import css from './MenuButton.module.scss';

type Props = {
    className?: string;
    children?: string | React.ReactNode;
    onClick?: any;
}

const MenuButton: React.FunctionComponent<Props> = ({
    className,
    children = 'menu',
    onClick,
}) => {
    return (
        <button 
            className={[className, css.button].join(' ')}
            onClick={typeof onClick === 'function' ? onClick() : null}
        >
            {children}
        </button>
    )
}

export default MenuButton;
