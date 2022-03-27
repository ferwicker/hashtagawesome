import * as React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link';
import HeadMeta from '../components/HeadMeta';
import css from './about.module.scss'

import Image from 'next/image'
import Logo from '../public/images/logo.png';
import MenuButton from '../components/MenuButton';
import NavMenu from '../components/NavMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faInstagram, faPinterest, faEnvelope);

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
        <h1>Contact</h1>
        <div>
            <div className={css.contactContainer}>
                <a href="https://www.instagram.com/hashtag.awesome.nails/" target="_blank" rel="noreferrer" >
                    <FontAwesomeIcon icon={["fab", "instagram"]} color="#ec1c24" size="3x" className={css.socialIcon} />
                    <span>Instagram</span>
                </a>
            </div>
            <div className={css.contactContainer}>
                <a href="https://www.pinterest.com.au/hashtagawesomenails/" target="_blank" rel="noreferrer" >
                    <FontAwesomeIcon icon={["fab", "pinterest"]} color="#ec1c24" size="3x" className={css.socialIcon} />
                    <span>Pinterest</span>
                </a>
            </div>
            <div className={css.contactContainer}>
                <a href="mailto:hello@hashtagawesomenails.com" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={["fas", "envelope"]} color="#ec1c24" size="3x" className={css.socialIcon} />
                    <span>Send me an email</span>
                </a>
            </div>
        </div>
    </div>
    )
}

export default About;
