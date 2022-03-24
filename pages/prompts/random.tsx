/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import type { NextPage } from 'next'
import Link from 'next/link';
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

library.add(faShuffle);

const RandomPrompt: NextPage = () => {
    type Prompt = {
        title: string,
        value: string,
    }

    const randomise = (arr:any[]) => {
        return arr[Math.floor(Math.random()*arr.length)];
    }

    const [promptValues, setPromptValues] = React.useState<Prompt[]>([]);

    React.useEffect(() => {
        getPrompt(random);
    }, []);

    const getPrompt = (random: typeof import("../../configs/random")) => {
        const tempArr: Prompt[] = [];

        tempArr.push({
            title: 'length',
            value: randomise(random.lengths),
        });

        tempArr.push({
            title: 'shape',
            value: 
                tempArr[0].value === 'short' 
                    ? randomise(random.shapeShort) 
                    : randomise(random.shapeLong),
        }, {
            title: 'colour',
            value: randomise(random.colours),
        }, {
            title: 'nail art',
            value: randomise(random.nailArt),
        }, {
            title: 'extras',
            value: randomise(random.extras),
        })
        
        setPromptValues(tempArr);
    }

    return (
        <>
        <HeadMeta
            title="Hashtag Awesome Nails | Random Prompt"
            description="Get a random nail prompt to inspire your creativity"
        />
        <Link href="/prompts">
        <a className={css.menuButtonLink}>
            <MenuButton>Back</MenuButton>
        </a>
        </Link>
        <div className={css.smallLogoContainer}>
            <Image
                src={smallLogo} 
                alt="Hashtag Awesome Prompts logo" 
                width="896px"
                height="98px"
                className={css.logo} />
        </div>
        <div className={css.promptValues}>
            {promptValues.length > 0  && promptValues.map((el, i) => {
                return (
                    <PromptValue key={i} title={el.title} value={el.value}  />
                )
            })}
        </div>
        <button className={css.shuffleButton} onClick={() => { getPrompt(random) }} >
            <FontAwesomeIcon icon="shuffle" color="#ec1c24" size="3x" />
        </button>
        </>
    )
}

export default RandomPrompt;
