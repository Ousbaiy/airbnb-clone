import Image from 'next/image';
import React from 'react';

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-60 w-60 md:w-80 md:h-80">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 320px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
