import type { NextPage } from 'next'
import HeadMeta from '../components/HeadMeta'
import css from './index.module.scss'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import Logo from '../public/images/logo.png';

library.add(faInstagram, faPinterest);

const Home: NextPage = () => {
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
        <h1 className={css.centerText}>Coming Soon!</h1>
        <div>
          <a href="https://www.instagram.com/hashtag.awesome.nails/" target="_blank" rel="noreferrer" className={css.socialIcon}>
            <FontAwesomeIcon icon={["fab", "instagram"]} color="#ec1c24" size="3x" />
          </a>
          <a href="https://www.pinterest.com.au/hashtagawesomenails/" target="_blank" rel="noreferrer" className={css.socialIcon}>
            <FontAwesomeIcon icon={["fab", "pinterest"]} color="#ec1c24" size="3x" />
          </a>
        </div>
    </>
  )
}

export default Home
