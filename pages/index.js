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
