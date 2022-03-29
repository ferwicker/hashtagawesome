/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import type { NextPage } from 'next'
import Link from 'next/link';
import html2canvas from 'html2canvas';

import HeadMeta from '../../components/HeadMeta'
import css from './index.module.scss'

import { optionsObject } from '../../configs/customOptions';

import Image from 'next/image'
import smallLogo from '../../public/images/hor-logo.png';
import smallerLogo from '../../public/images/small-logo-21.png';
import PromptValue from '../../components/PromptValue';
import MenuButton from '../../components/MenuButton';
import NavMenu from '../../components/NavMenu';
import DownloadButton from '../../components/DownloadButton';

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
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [imageHidden, setImageHidden] = React.useState(true);

    const toggleMenuOpen = () => {
        let tempOpen = isMenuOpen;
        tempOpen ? tempOpen = false : tempOpen = true;
        setIsMenuOpen(tempOpen);
    };

    React.useEffect(() => {
        getPrompt(optionsObject);
    }, []);

    const getPrompt = (optionsObject: { [x: string]: string[];}) => {
        const tempArr: Prompt[] = [];

        tempArr.push({
            title: 'length',
            value: randomise(optionsObject.lengths),
        });

        tempArr.push({
            title: 'shape',
            value: 
                tempArr[0].value === 'short' 
                    ? randomise(optionsObject.shapeShort) 
                    : randomise(optionsObject.shapeAll),
        }, {
            title: 'colour',
            value: randomise(optionsObject.coloursAll),
        }, {
            title: 'nail art',
            value: randomise(optionsObject.artAll),
        }, {
            title: 'extras',
            value: randomise(optionsObject.extrasRandom),
        })

        setPromptValues(tempArr);
    }

    const Download = () => {
        let div:HTMLElement = document.getElementById('screenshot') !;
        !imageHidden && html2canvas(div).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            link.download = 'Download.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setImageHidden(true);
        })
    }

    React.useEffect(() => {
        !imageHidden && Download();
    }, [imageHidden])

    const handleScreenshot = () => {
        setImageHidden(false);
    }

    return (
        <>
        <HeadMeta
            title="Hashtag Awesome Nails | Random Prompt"
            description="Get a random nail prompt to inspire your creativity"
        />
        <DownloadButton handleScreenshot={handleScreenshot} />
        <div className={css.menuButtonContainer}>
            <Link href="/prompts">
                <a className={[css.halfWidth, css.buttonLeft].join(' ')}>
                    <MenuButton>Back</MenuButton>
                </a>
            </Link>
            <div className={css.halfWidth}>
                <MenuButton onClick={toggleMenuOpen}>Menu</MenuButton>
            </div>
        </div> 
        <NavMenu menuOpen={isMenuOpen} handleCloseClick={toggleMenuOpen}/>
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
        <button className={css.shuffleButton} onClick={() => { getPrompt(optionsObject) }} >
            <FontAwesomeIcon icon="shuffle" color="#ec1c24" size="3x" />
        </button>
        <div id={'screenshot'} className={[css.canvasDiv, imageHidden ? css.hide : null].join(' ')}>
            <div className={css.promptValues}>
                {promptValues.length > 0  && promptValues.map((el, i) => {
                    return (
                        <PromptValue key={i} title={el.title} value={el.value}  />
                    )
                })}
            </div>
            <p className={css.shareP}>Share your creations with #hashtagawesomeprompts</p>
        </div>
        </>
    )
}

export default RandomPrompt;
