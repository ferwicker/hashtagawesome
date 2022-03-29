/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import html2canvas from 'html2canvas';
import { isMobile } from 'react-device-detect';
import Image from 'next/image';

import css from './DownloadButton.module.scss';

import smallerLogo from '../../public/images/small-logo-21.png';

import PromptValue from '../PromptValue';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faShare} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faDownload, faShare);

type Prompt = {
    title: string,
    value: string,
}

type Props = {
    promptValues?: Prompt[];
}

const DownloadButton: React.FunctionComponent<Props> = ({
    promptValues,
}) => {
    const [isMobileDevice, setIsMobileDevice] = React.useState(isMobile);

    // add logo to image

    React.useEffect(() => {
        setIsMobileDevice(isMobile);
    }, [isMobile]);

    // function for desktop
    const Download = () => {
        let div:HTMLElement = document.getElementById('screenshot') !;
        html2canvas(div).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            link.download = 'Download.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
    }

    //function for mobile
    const Share = () => {
        let div:HTMLElement = document.getElementById('screenshot') !;
        html2canvas(div).then(canvas => {
            let file;
            canvas.toBlob(function(blob){
                const myBlob:BlobPart = new Blob([blob as BlobPart]);
            
                file = new File([myBlob], "hashtagawesomeprompts.png", {type:"image/png"});
                console.log(file)
                if (navigator.share) {
                    navigator
                      .share({
                        files: [file],
                      })
                      .then(() => {
                        alert('Successfully shared');
                      })
                      .catch(error => {
                        alert(error);
                      });
                  } else if (!navigator.share) {
                      alert('no sharing available')
                  } else {
                      alert('no file')
                  }
            })
        })
    }

    // click handler
    const handleClick = () => {
        if (!isMobileDevice) {
            Download();
        } else if (isMobileDevice) {
            Share();
        }
    }

    return (
        <>
        <button 
            className={css.button}
            onClick={handleClick}
        >
            <FontAwesomeIcon icon={"share"} color="#fff" size="2x"  />
        </button>
        <div className={css.hideThis}>
            <div id={'screenshot'} className={[css.canvasDiv].join(' ')}>
                <div className={css.smallLogoContainer}>
                    <p className={css.logoReplacement}><span className={css.solid}>HASHTAG</span><span className={css.outline}>AWESOME</span></p>
                </div>
                <div className={css.promptValues}>
                    {promptValues && promptValues.length > 0  && promptValues.map((el, i) => {
                        return (
                            <PromptValue key={i} title={el.title} value={el.value}  />
                        )
                    })}
                </div>
                <p className={css.shareP}>Share your creations with #hashtagawesomeprompts</p>
            </div>
        </div>
        </>
    )
}

export default DownloadButton;
