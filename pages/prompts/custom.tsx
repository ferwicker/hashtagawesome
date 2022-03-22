/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import type { NextPage } from 'next'
import HeadMeta from '../../components/HeadMeta'
import css from './index.module.scss'

import * as random from '../../configs/random'

import Image from 'next/image'
import smallLogo from '../../public/images/hor-logo.png';
import PromptValue from '../../components/PromptValue';
import MenuButton from '../../components/MenuButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Button from '../../components/Button';

library.add(faShuffle);

const CustomPrompt: NextPage = () => {

    return (
        <>
        <HeadMeta
            title="Hashtag Awesome Nails | Random Prompt"
            description="Get a random nail prompt to inspire your creativity"
        />
        <a className={css.menuButtonLink} href="/prompts">
            <MenuButton>Back</MenuButton>
        </a>
        <div className={css.smallLogoContainer}>
            <Image
                src={smallLogo} 
                alt="Hashtag Awesome Prompts logo" 
                width="896px"
                height="98px"
                className={css.logo} />
        </div>
        <div className={[css.prefContainer, css.seasons].join(' ')}>
            <p>
                <span className={css.headline}>Season </span>
                <span className={css.smallHeadline}>{'(optional)'}</span>
            </p>
            <div className={css.row}>
                <Button className={css.buttonHalfWidth}>Spring</Button>
                <Button className={css.buttonHalfWidth}>Summer</Button>
            </div>
            <div className={css.row}>
                <Button className={css.buttonHalfWidth}>Autumn</Button>
                <Button className={css.buttonHalfWidth}>Winter</Button>
            </div>
        </div>
        <div className={[css.prefContainer].join(' ')}>
            <p><span className={css.headline}>Pick up to 5</span></p>
            <div className={[css.row, css.wrapRow].join(' ')}>
                <Button className={[css.buttonHalfWidth, css.buttonMultiple].join(' ')}>Length</Button>
                <Button className={[css.buttonHalfWidth, css.buttonMultiple].join(' ')}>Shape</Button>
                <Button className={[css.buttonHalfWidth, css.buttonMultiple].join(' ')}>Colour 1</Button>
                <Button className={[css.buttonHalfWidth, css.buttonMultiple].join(' ')}>Colour 2</Button>
                <Button className={[css.buttonHalfWidth, css.buttonMultiple].join(' ')}>Art</Button>
                <Button className={[css.buttonHalfWidth, css.buttonMultiple].join(' ')}>Glitter</Button>
                <Button className={[css.buttonHalfWidth, css.buttonMultiple].join(' ')}>Vibe</Button>
                <Button className={[css.buttonHalfWidth, css.buttonMultiple].join(' ')}>Extras</Button>
            </div>
        </div>
        <button className={[css.shuffleButton, css.generateButton].join(' ')}>
            <span className={css.generateText}>Generate</span>
            <FontAwesomeIcon icon="shuffle" color="#ec1c24" size="2x" />
        </button>
        </>
    )
}

export default CustomPrompt;
