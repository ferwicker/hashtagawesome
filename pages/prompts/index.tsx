import * as React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link';
import HeadMeta from '../../components/HeadMeta';
import css from './index.module.scss'

import Image from 'next/image'
import Logo from '../../public/images/prompts-logo-18.png';
import MenuButton from '../../components/MenuButton';
import NavMenu from '../../components/NavMenu';

import Button from '../../components/Button/Button';

const PromptsHome: NextPage = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenuOpen = () => {
        let tempOpen = isMenuOpen;
        tempOpen ? tempOpen = false : tempOpen = true;
        setIsMenuOpen(tempOpen);
    };

    return (
      <div className={css.container}>
        <HeadMeta
          title="Hashtag Awesome Prompts"
          description="Get creative nail prompts"
        />
        <div className={css.menuButtonContainer}>
            <MenuButton onClick={toggleMenuOpen} className={'css.fullwidth'}>Menu</MenuButton>
        </div>
        <NavMenu menuOpen={isMenuOpen} handleCloseClick={toggleMenuOpen}/>
        <div className={css.logoContainer}>
            <Image
                src={Logo} 
                alt="Hashtag Awesome Prompts logo" 
                width="400px"
                height="400px"
                className={css.logo} />
        </div>
        <div className={css.buttonsContainer}>
            <Link href="/prompts/random" passHref>
                <a>
                    <Button className={css.button}>
                        Generate Random
                    </Button>
                </a>
            </Link>
            <Link href="/prompts/custom" passHref>
                <a>
                    <Button className={css.button}>
                        Custom Prompt
                    </Button>
                </a>
            </Link>
        </div>
      </div>
    )
}

export default PromptsHome
