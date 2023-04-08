import Image from 'next/image';

import Header from '@/components/Header';
import Banner from '@/components/Banner';
import ExploreSec from '@/components/ExploreSec.js';
import LiveSec from '@/components/LiveSec';
import LargeCard from '@/components/LargeCard';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-4 sm:px-16">
        <ExploreSec />
        <LiveSec />
        <LargeCard />
      </main>
        <Footer />
    </main>
  );
}

// export async function getStaticProps() {
//   const exploreData = await fetch('https://links.papareact.com/pyp').then(
//     (res) => res.json()
//   );

//   const cardsData = await fetch('https://links.papareact.com/zp1').then(
//     (res) => res.json()
//   );
//   return {
//     props: {
//       exploreData: exploreData,
//       cardsData: cardsData
//     }
//   }
// }
