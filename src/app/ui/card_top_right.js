import Image from 'next/image';

export default function CardTopRight({ image }) {
  return <Image
    src={image}
    width={1000}
    height={760}
    className="corner-image-top-right"
    alt="Screenshots of the dashboard project showing desktop version"
  />
}