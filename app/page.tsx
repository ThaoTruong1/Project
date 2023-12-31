import Trending from 'app/home/Trending';
import Tech from 'app/home/Tech';
import Travel from 'app/home/Travel';
import Other from 'app/shared/Other';
import Subscribe from 'app/shared/Subscribe';
//import Sidebar from 'app/shared/Sidebar';

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <Trending />
      <div className="md:flex gap-10 mb-5">
        <div className="w-full">
          <Tech />
          <Travel />
          <Other />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
      </div>
    </main>
  )
}
