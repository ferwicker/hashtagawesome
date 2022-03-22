import type { NextPage } from 'next'
import HeadMeta from '../../components/HeadMeta';
import css from './index.module.scss'

import Image from 'next/image'
import Logo from '../../public/images/prompts-logo-18.png';
import MenuButton from '../../components/MenuButton';

import Button from '../../components/Button/Button';

const PromptsHome: NextPage = () => {
    return (
      <div className={css.container}>
        <HeadMeta
          title="Hashtag Awesome Prompts"
          description="Get creative nail prompts"
        />
        {/* <MenuButton>Menu</MenuButton> */}
        <div className={css.logoContainer}>
            <Image
                src={Logo} 
                alt="Hashtag Awesome Prompts logo" 
                width="400px"
                height="400px"
                className={css.logo} />
        </div>
        <div className={css.buttonsContainer}>
            <a href="/prompts/random">
                <Button className={css.button}>
                    Generate Random
                </Button>
            </a>
            {/* <a href="/prompts/custom">
                <Button className={css.button}>
                    Custom Prompt
                </Button>
            </a> */}
        </div>
      </div>
    )
}

export default PromptsHome
