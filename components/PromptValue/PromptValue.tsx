import * as React from 'react';

import css from './PromptValue.module.scss';

type Props = {
    // className?: string;
    title?: string;
    value?: string;
}

const PromptValue: React.FunctionComponent<Props> = ({
    // className,
    title="title",
    value="value",
}) => {
    return (
        <div className={css.wrapper}>
            <p className={css.promptTitle}>{title}</p>
            <div className={css.valueContainer}>
                <span className={css.value}>{value}</span>
            </div>
        </div>
    )
}

export default PromptValue;