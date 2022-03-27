import * as React from 'react';

import css from './DownloadButton.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faCamera);

type Props = {
    handleScreenshot?: Function;
}

const DownloadButton: React.FunctionComponent<Props> = ({
    handleScreenshot,
}) => {

    // const ref = React.createRef(null);
    /* const [image, takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
    });

    const download = (image, { name = "img", extension = "jpg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
      };

    const downloadScreenshot = () => takeScreenShot(ref.current).then(download); */

    const handleClick = () => {
       if (typeof handleScreenshot === 'function') {
            handleScreenshot();
        }
    }

    return (
        <button 
            className={css.button}
            onClick={handleClick}
        >
            <FontAwesomeIcon icon="camera" color="#ec1c24" size="2x"  />
        </button>
    )
}

export default DownloadButton;
