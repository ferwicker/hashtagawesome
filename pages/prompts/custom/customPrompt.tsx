import * as React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import css from '../index.module.scss'

import Image from 'next/image'
import smallLogo from '../../../public/images/hor-logo.png';
import PromptValue from '../../../components/PromptValue';
import MenuButton from '../../../components/MenuButton';
import HeadMeta from '../../../components/HeadMeta';
import Button from '../../../components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { optionsObject } from '../../../configs/customOptions';
import { lengths } from '../../../configs/random'

library.add(faShuffle);

const CustomPromptResult: NextPage = () => {
    type Prompt = {
        title: string,
        value: string,
    }

    const router = useRouter();
    const query = router.query;

    const [promptValues, setPromptValues] = React.useState<Prompt[]>([]);

    const randomise = (arr:any[]) => {
        return arr[Math.floor(Math.random()*arr.length)];
    };

    // get a random value for each param
    const getCustomPrompt = (query:any) => {
        const season = query.season;
        const order = ['length', 'shape', 'colour1', 'colour2', 'art', 'glitter', 'vibe', 'extras'];
        const shuffleParams = query.shuffle.split(',').sort((a:string, b:string) => {
            return order.indexOf(a) - order.indexOf(b);
        });
        const tempArr = [];
        let nailLength:string;
        let long:boolean;
        
        if (shuffleParams.includes('length')){
            nailLength = randomise(optionsObject.lengths);
            long = nailLength !== 'short';

            tempArr.push({
                title: 'length',
                value: nailLength,
            })

            shuffleParams.splice(shuffleParams.indexOf('length'), 1);
        };

        shuffleParams.forEach((item:string) => {
            let objKey:string; 

            if (item === 'shape') {
                nailLength === 'short' ? objKey = 'shapeShort' : objKey = 'shapeAll'
            } else if (item === 'colour1' || item === 'colour2') {
                season === 'spring' 
                    ? objKey = 'coloursSpring'
                    : season === 'summer'
                    ? objKey = 'coloursSummer'
                    : season === 'autumn'
                    ? objKey = 'coloursAutumn'
                    : season === 'winter'
                    ? objKey = 'coloursWinter'
                    : objKey = 'coloursAll'
            } else if (item === 'art') {
                season === 'spring' 
                    ? objKey = 'artSpring'
                    : season === 'summer'
                    ? objKey = 'artSummer'
                    : season === 'autumn'
                    ? objKey = 'artAutumn'
                    : season === 'winter'
                    ? objKey = 'artWinter'
                    : objKey = 'artAll'
            } else {
                objKey = item;
            }
            tempArr.push({
                title: item,
                value: randomise(optionsObject[objKey]),
            });
        });

        setPromptValues(tempArr);

    };

    React.useEffect(() => {
        getCustomPrompt(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[query]);

    return (
        <>
            <HeadMeta
                title="Hashtag Awesome Nails | Random Prompt"
                description="Get a random nail prompt to inspire your creativity"
            />
            <Link href="/prompts/custom">
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
            {promptValues.length > 0 && 
                promptValues.map((el, i) => {
                    return (
                        <PromptValue key={i} title={el.title} value={el.value}  />
                    )
                })}
            <button className={css.shuffleButton} onClick={() => { getCustomPrompt(query) }} >
            <FontAwesomeIcon icon="shuffle" color="#ec1c24" size="3x" />
        </button>
        </>
    )
}

export default CustomPromptResult;
