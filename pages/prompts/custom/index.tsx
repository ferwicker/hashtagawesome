import * as React from 'react';
import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import Image from 'next/image'

import css from '../index.module.scss'

import HeadMeta from '../../../components/HeadMeta'
import smallLogo from '../../../public/images/hor-logo.png';
import MenuButton from '../../../components/MenuButton';
import NavMenu from '../../../components/NavMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Button from '../../../components/Button';

library.add(faShuffle);

const CustomPrompt: NextPage = () => {
    const [season, setSeason] = React.useState<any>({});
    const [shuffle, setShuffle] = React.useState<string[]>([]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const router = useRouter();

    const toggleMenuOpen = () => {
        let tempOpen = isMenuOpen;
        tempOpen ? tempOpen = false : tempOpen = true;
        setIsMenuOpen(tempOpen);
    };

    const handleGenerateClick = () => {
        if (shuffle.length === 0) {
            alert('Select at least one parameter');
        } else {
            const paramString = shuffle.join(',');
            const queryObject = {
                ...season,
                shuffle: paramString,
            }
            // add local storage fall back if prompt page is refreshed
            localStorage.clear();
            localStorage.setItem('query', JSON.stringify(queryObject));

            router.push({
                pathname: '/prompts/custom/customPrompt',
                query: queryObject,
            })
        }
    };

    const handleSeasonClick = (current: string) => {
        if (season.season && season.season === current) {
            setSeason({});
        } else {
            setSeason({
                season: current,
            });
        }
    };

    const handleParamClick = (current: string) => {
        const tempArr = [...shuffle];
        const index = tempArr.indexOf(current); 

        if (index > -1) { // if already in array, remove
            tempArr.splice(index, 1);
            setShuffle(tempArr);
        } else if (shuffle.length > 4) { // if max reached, alert
            alert('Select maximum 5!');
        } else {
            tempArr.push(current);
            setShuffle(tempArr);
        }
    };

    return (
        <>
        <HeadMeta
            title="Hashtag Awesome Nails | Random Prompt"
            description="Set custom preferences for your nail prompts"
        />
        <div className={css.menuButtonContainer}>
            <Link href="/prompts">
                <a className={[css.halfWidth, css.buttonLeft].join(' ')}>
                    <MenuButton>Back</MenuButton>
                </a>
            </Link>
            <div className={css.halfWidth}>
                <MenuButton onClick={toggleMenuOpen} >Menu</MenuButton>
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
        <div className={[css.prefContainer, css.seasons].join(' ')}>
            <p>
                <span className={css.headline}>Season </span>
                <span className={css.smallHeadline}>{'(optional)'}</span>
            </p>
            <div className={css.row}>
                <Button 
                    className={[css.buttonHalfWidth, season.season === 'spring' ? css.buttonSelected : ''].join(' ')}
                    value={'spring'}
                    onClick={handleSeasonClick}
                >
                    Spring
                </Button>
                <Button 
                    className={[css.buttonHalfWidth, season.season === 'summer' ? css.buttonSelected : ''].join(' ')}
                    value={'summer'}
                    onClick={handleSeasonClick}
                >
                    Summer
                </Button>
            </div>
            <div className={css.row}>
            <Button 
                    className={[css.buttonHalfWidth, season.season === 'autumn' ? css.buttonSelected : ''].join(' ')}
                    value={'autumn'}
                    onClick={handleSeasonClick}
                >
                    Autumn
                </Button>
                <Button 
                    className={[css.buttonHalfWidth, season.season === 'winter' ? css.buttonSelected : ''].join(' ')}
                    value={'winter'}
                    onClick={handleSeasonClick}
                >
                    Winter
                </Button>
            </div>
        </div>
        <div className={[css.prefContainer].join(' ')}>
            <p><span className={css.headline}>Pick up to 5</span></p>
            <div className={[css.row, css.wrapRow].join(' ')}>
                <Button 
                    className={[
                        css.buttonHalfWidth, 
                        css.buttonMultiple, 
                        shuffle.indexOf('length') > -1 ? css.buttonSelected : '',
                    ].join(' ')}
                    value={'length'}
                    onClick={handleParamClick}
                >
                    Length
                </Button>
                <Button 
                    className={[
                        css.buttonHalfWidth, 
                        css.buttonMultiple,
                        shuffle.indexOf('shape') > -1 ? css.buttonSelected : '',
                    ].join(' ')}
                    value={'shape'}
                    onClick={handleParamClick}
                >
                    Shape
                </Button>
                <Button 
                    className={[
                        css.buttonHalfWidth, 
                        css.buttonMultiple,
                        shuffle.indexOf('colour1') > -1 ? css.buttonSelected : '',
                    ].join(' ')}
                    value={'colour1'}
                    onClick={handleParamClick}
                >
                    Colour 1
                </Button>
                <Button 
                    className={[
                        css.buttonHalfWidth, 
                        css.buttonMultiple,
                        shuffle.indexOf('colour2') > -1 ? css.buttonSelected : '',
                    ].join(' ')}
                    value={'colour2'}
                    onClick={handleParamClick}
                >
                    Colour 2
                </Button>
                <Button 
                    className={[
                        css.buttonHalfWidth, 
                        css.buttonMultiple,
                        shuffle.indexOf('art') > -1 ? css.buttonSelected : '',
                    ].join(' ')}
                    value={'art'}
                    onClick={handleParamClick}
                >
                    Art
                </Button>
                <Button 
                    className={[
                        css.buttonHalfWidth, 
                        css.buttonMultiple,
                        shuffle.indexOf('glitter') > -1 ? css.buttonSelected : '',
                    ].join(' ')}
                    value={'glitter'}
                    onClick={handleParamClick}
                >
                    Glitter
                </Button>
                <Button 
                    className={[
                        css.buttonHalfWidth, 
                        css.buttonMultiple,
                        shuffle.indexOf('vibe') > -1 ? css.buttonSelected : '',
                    ].join(' ')}
                    value={'vibe'}
                    onClick={handleParamClick}
                >
                    Vibe
                </Button>
                <Button 
                    className={[
                        css.buttonHalfWidth, 
                        css.buttonMultiple,
                        shuffle.indexOf('extras') > -1 ? css.buttonSelected : '',
                    ].join(' ')}
                    value={'extras'}
                    onClick={handleParamClick}
                >
                    Extras
                </Button>
            </div>
        </div>
                <button onClick={handleGenerateClick} className={[css.shuffleButton, css.generateButton].join(' ')}>
                    <span className={css.generateText}>Generate</span>
                    <FontAwesomeIcon icon="shuffle" color="#ec1c24" size="2x" />
                </button>
        </>
    )
}

export default CustomPrompt;
