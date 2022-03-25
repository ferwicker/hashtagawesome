/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import css from './NavMenu.module.scss'

import MenuButton from '../../components/MenuButton';
import Logo from '../../public/images/prompts-logo-pink-18.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faInstagram, faPinterest);

type Props = {
    menuOpen?: boolean;
    handleCloseClick?: Function;  
}

const NavMenu: React.FunctionComponent<Props> = ({
    menuOpen,
    handleCloseClick,
}) => {

    const handleClose = () => {
        if (typeof handleCloseClick === 'function'){
            handleCloseClick();
        }
    };

    return (
        <div className={[css.menuContainer, !menuOpen ? css.closed : null].join(' ')}>
            {/* <div className={css.logoContainer}>
            <Image
                src={Logo} 
                alt="Hashtag Awesome Prompts logo" 
                width="400px"
                height="400px"
                className={css.logo} />
            </div> */}
            <div className={css.menuItemsWrapper}>
                <Link href="/about">
                    <a className={css.menuItem}>About</a>
                </Link>
                <Link href="/prompts">
                    <a className={css.menuItem}>Prompts</a>
                </Link>
                <Link href="/contact">
                    <a className={css.menuItem}>Contact</a>
                </Link>
            </div>
            <p className={css.tagText}><span>Tag your creations with </span> 
                <a href='https://www.instagram.com/explore/tags/hashtagawesomeprompts/' target='_blank' rel='noreferrer'>
                    #hashtagawesomeprompts
                </a>
            </p>
            <div>
                <a href="https://www.instagram.com/hashtag.awesome.nails/" target="_blank" rel="noreferrer" className={css.socialIcon}>
                    <FontAwesomeIcon icon={["fab", "instagram"]} color="#FF40C7" size="2x" />
                </a>
                <a href="https://www.pinterest.com.au/hashtagawesomenails/" target="_blank" rel="noreferrer" className={css.socialIcon}>
                    <FontAwesomeIcon icon={["fab", "pinterest"]} color="#FF40C7" size="2x" />
                </a>
            </div>
            <MenuButton className={css.closeButton} onClick={handleClose}>Close</MenuButton>
            <div className={css.authorContainer}>
                <div className={css.authorLine}>
                    <span>Designed and developed in Sydney by </span>
                    <a href="https://ferwicker.com/" target='_blank' rel="noreferrer">Fer Wicker.</a>
                </div>
            </div>
            
        </div>
    )
}

export default NavMenu;