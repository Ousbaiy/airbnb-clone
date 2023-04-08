import { liveData } from '../data/db.js';
import MediumCard from '@/components/MediumCard.js';

const LiveSec = () => {
  return (
    <section>
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {liveData?.map((card, index) => (
          <MediumCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default LiveSec;
