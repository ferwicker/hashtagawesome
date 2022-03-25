import * as React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link';
import HeadMeta from '../components/HeadMeta';
import css from './about.module.scss'

import Image from 'next/image'
import Logo from '../public/images/logo.png';
import MenuButton from '../components/MenuButton';
import NavMenu from '../components/NavMenu';

const About: NextPage = () => {
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
          description="About Hashtag Awesome Nails and Hashtag Awesome Prompts"
        />
        <div className={css.menuButtonContainer}>
            <MenuButton onClick={toggleMenuOpen} className={'css.fullwidth'}>Menu</MenuButton>
        </div>
        <NavMenu menuOpen={isMenuOpen} handleCloseClick={toggleMenuOpen}/>
        <div className={css.logoContainer}>
            <Image
                src={Logo} 
                alt="Hashtag Awesome Nails logo" 
                width="400px"
                height="400px"
                className={css.logo} />
        </div>
        <h1>About</h1>
    </div>
    )
}

export default About;
