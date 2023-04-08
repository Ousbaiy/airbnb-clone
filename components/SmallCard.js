import Image from 'next/image';

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center m-2 gap-x-4 mt-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} alt={location} fill className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <p className="text-gray-500">{distance}</p>
      </div>
    </div>
  );
};

export default SmallCard;
