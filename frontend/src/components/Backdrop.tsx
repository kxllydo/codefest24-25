import Image from 'next/image';
import bluepurplebg from '../../public/blue-purple-bg.png';

const Backdrop = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen -z-10">
            <Image 
            src={bluepurplebg}
            className="rotate-y-180"
            alt="blue purple background"
            layout="fill"
            objectFit="cover"
            />
        </div>
    )
}

export default Backdrop;
