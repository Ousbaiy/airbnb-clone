import SmallCard from '@/components/SmallCard';

// data
import { exploreData } from '../data/db.js';
const ExploreSec = () => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {exploreData?.map((card, index) => (
          <SmallCard key={`card.img-${index + 1}`} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ExploreSec;
