import * as React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import css from '../index.module.scss'

import Image from 'next/image'
import smallLogo from '../../../public/images/hor-logo.png';
// import PromptValue from '../../../components/PromptValue';
import MenuButton from '../../../components/MenuButton';
import HeadMeta from '../../../components/HeadMeta';
import Button from '../../../components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faShuffle);

const CustomPromptResult: NextPage = () => {

    const router = useRouter();
    const query = router.query;

    console.log(query);

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
            <p>{query.shuffle}</p>
        </>
    )
}

export default CustomPromptResult;
