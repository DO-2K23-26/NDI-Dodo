

import Image from 'next/image';

export default function CardBottomLeft({ image }) {
    return <Image
        src={image}

        width={1000}
        height={760}
        className="corner-image-bottom-left"
        alt="Screenshots of the dashboard project showing desktop version"
    />
}