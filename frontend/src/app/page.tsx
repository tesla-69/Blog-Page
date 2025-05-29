import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RecentBlogs from '../components/RecentBlogs';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <RecentBlogs />
      </div>
    </div>
  );
}
