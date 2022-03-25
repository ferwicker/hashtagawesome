import * as React from 'react';

import css from './MenuButton.module.scss';

type Props = {
    className?: string;
    children?: string | React.ReactNode;
    onClick?: Function;
}

const MenuButton: React.FunctionComponent<Props> = ({
    className,
    children = 'menu',
    onClick,
}) => {

    const handleCLick = () => {
        if (typeof onClick === 'function') {
            onClick();
        }
    }

    return (
        <button 
            className={[className, css.button].join(' ')}
            onClick={handleCLick}
        >
            {children}
        </button>
    )
}

export default MenuButton;
