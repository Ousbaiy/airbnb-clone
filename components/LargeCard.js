import Image from 'next/image';
import Cover from '../public/largeCard.jpeg';

const LargeCard = () => {
  return (
    <section className='relative py-16 cursor-pointer'>
      <div className="relative h-96 min-w-[250px]">
        <Image src={Cover} alt="painted 3 people and boat next to see" fill className='object-cover rounded-2xl' />
      </div>
      <div className='absolute top-1/2 -mt-8 left-12'>
        <h3 className='text-4xl mb-3 w-64'>The Greatest Outdoors</h3>
        <p>Wishlist curated by Airbnb</p>
        <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>Get Inspired</button>
      </div>
    </section>
  );
};

export default LargeCard;
