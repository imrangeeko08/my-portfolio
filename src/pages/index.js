import Header from '../components/Header';
import HomeContent from '../components/HomeContent';

export default function Home() {
  return (
    <div className="relative min-h-screen text-white bg-[#0A192F] overflow-hidden">
      {/* Wave Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0A192F] via-[#1D2F6F] to-[#3A0CA3] animate-wave"></div>
      <div className="relative z-10">
        <Header />
        <HomeContent />
      </div>
    </div>
  );
}