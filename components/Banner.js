import Image from 'next/image';

// images
import Cover from '../public/banner.jpeg';

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] object-cover">
      <Image src={Cover} alt="landing photo" fill className="object-cover" priority />
      <div className="absolute w-full top-1/2 text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-2 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
