import { useRouter } from 'next/router';
import { format } from 'date-fns';
import dynamic from 'next/dynamic'; // import dynamic from 'next/dynamic' at the top of your file

import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import Footer from '@/components/Footer';

const MapWithNoSSR = dynamic(() => import('@/components/Map'), {
  ssr: false,
}); // Use dynamic to import the Map component without server-side rendering

const Search = ({ data }) => {
  const router = useRouter();
  const { location, startDate, endDate, nuOfGuests } = router.query;

  const formattedStartDate =
    startDate && format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = endDate && format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  const placeholder = `${location} | ${range} | ${nuOfGuests} ${
    nuOfGuests > 1 ? 'guests' : 'guest'
  }`;

  return (
    <div className="flex flex-col h-screen">
      <Header placeholder={placeholder} />

      <main className="flex-1 px-4 sm:px-16">
        <section className="pt-7 md:pt-14">
          <p className="text-sm">
            300+ Stays - {range} - for {nuOfGuests}{' '}
            {nuOfGuests > 1 ? 'guests' : 'guest'}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex items-center gap-x-2 flex-wrap text-gray-800">
            <p className="button">Cancellation flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex gap-x-6 flex-col-reverse xl:flex-row">
            <div className="flex-[1.8] md:flex-2">
              {data.map((item, index) => (
                <InfoCard key={index} {...item} />
              ))}
            </div>
            <div className="flex-1">
              {/* Render MapWithNoSSR instead of Map */}
              <MapWithNoSSR data={data} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const res = await fetch('https://www.jsonkeeper.com/b/5NPS');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
