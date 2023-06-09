import Image from 'next/image';

// library
import { StarIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:pr-5 py-3 md:py-7 my-5 border-b cursor-pointer hover:opacity-80 hover:shadow-md transition duration-150 ease-out">
      <div className="relative h-40 w-70 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer transition duration-150 hover:text-red-400" />
        </div>
        <h3 className="text-xl">{title}</h3>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
