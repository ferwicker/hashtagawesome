/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import html2canvas from 'html2canvas';
import { isMobile } from 'react-device-detect';

import css from './DownloadButton.module.scss';

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
    const [imageHidden, setImageHidden] = React.useState(true);
    const [isMobileDevice, setIsMobileDevice] = React.useState(isMobile);

    // add logo to image

    React.useEffect(() => {
        if (!imageHidden && !isMobileDevice) {
            Download();
        } else if (!imageHidden && isMobileDevice) {
            // function for mobile here
        } else return;
    }, [imageHidden])

    // function for desktop
    const Download = () => {
        let div:HTMLElement = document.getElementById('screenshot') !;
        !imageHidden && html2canvas(div).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            link.download = 'Download.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setImageHidden(true);
        })
    }

    //function for mobile
    const Share = () => {
        let div:HTMLElement = document.getElementById('screenshot') !;
        !imageHidden && html2canvas(div).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            link.download = 'Download.jpg';
            document.body.appendChild(link);

            if (navigator.share) {
                navigator
                  .share({
                    title: "hashtagawesomeprompts.jpg",
                    url: link.href,
                  })
                  .then(() => {
                    alert('Successfully shared');
                  })
                  .catch(error => {
                    alert('Something went wrong sharing the blog');
                  });
              }

            document.body.removeChild(link)
            setImageHidden(true);
        })
    }

    // click handler
    const handleClick = () => {
       setImageHidden(false);
    }

    return (
        <>
        <button 
            className={css.button}
            onClick={handleClick}
        >
            <FontAwesomeIcon icon={isMobileDevice ? "share" : "download"} color="#fff" size="2x"  />
        </button>
        <div id={'screenshot'} className={[css.canvasDiv, imageHidden ? css.hide : null].join(' ')}>
            <div className={css.promptValues}>
                {promptValues && promptValues.length > 0  && promptValues.map((el, i) => {
                    return (
                        <PromptValue key={i} title={el.title} value={el.value}  />
                    )
                })}
            </div>
            <p className={css.shareP}>Share your creations with #hashtagawesomeprompts</p>
        </div>
        </>
    )
}

export default DownloadButton;
