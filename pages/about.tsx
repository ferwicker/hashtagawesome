import * as React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link';
import HeadMeta from '../components/HeadMeta';
import css from './about.module.scss'

import Image from 'next/image'
import Logo from '../public/images/logo.png';
import MenuButton from '../components/MenuButton';
import NavMenu from '../components/NavMenu';
import Button from '../components/Button';

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
        <h1 className={css.pageTitle}>About</h1>
        <div className={css.pageText}>
            <p>I am a software engineer from Sydney, Australia. Hashtag Awesome Nails is my
                creative outlet and my passion project.
            </p>
            <p>
                Combining coding and nail art, I have created a Hashtag Awesome Prompts, to help spark you and your clients creativity!
            </p>
            <p>
                I am also always practicing and improving my work and I am open to brand collaborations.
            </p>
        </div>
        <a href="mailto:hello@hashtagawesomenails.com" target="_blank" rel="noreferrer">
            <Button>contact me</Button>
        </a>
    </div>
    )
}

export default About;
