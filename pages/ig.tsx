import type { NextPage } from 'next'
import HeadMeta from '../components/HeadMeta';
import css from './ig.module.scss'

import Image from 'next/image'
import Logo from '../public/images/logo.png';
import Sparkles from '../public/images/sparkles.png'
import Link from 'next/link';

import Button from '../components/Button/Button';

const Ig: NextPage = () => {
    return (
        <>
          <HeadMeta
            title="Hashtag Awesome Nails"
            description="Hashtag Awesome Nails coming soon"
          />
            <div className={css.logoContainer}>
            <Image
                src={Logo} 
                alt="Hashtag Awesome Nails logo" 
                width="400px"
                height="400px"
                className={css.logo} />
            </div>
            <div className={css.buttonsContainer}>
                <Link href="/prompts" passHref>
                    <a>
                    <Button>
                        Nail Prompts
                    </Button>
                    </a>
                </Link>
                <div className={css.comingSoonWrapper}>
                    <div className={css.sparkles}>
                        <Image
                        src={Sparkles} 
                        alt="" 
                        width="48px"
                        height="48px" />
                    </div>
                    <p className={css.comingSoon}>NEW!</p>
                    <div className={css.sparkles}>
                        <Image
                        src={Sparkles} 
                        alt="" 
                        width="48px"
                        height="48px" />
                    </div>
                </div>
                <a href="https://www.instagram.com/hashtag.awesome.nails/" target="_blank" rel="noreferrer">
                    <Button className={css.igButton}>
                        Instagram
                    </Button>
                </a>
                <a href="https://www.pinterest.com.au/hashtagawesomenails/" target="_blank" rel="noreferrer">
                    <Button className={css.igButton}>
                        Pinterest
                    </Button>
                </a>
            </div>
        </>
    )
}

export default Ig
