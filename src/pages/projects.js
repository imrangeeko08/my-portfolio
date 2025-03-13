import Header from '../components/Header';
import ProjectsContent from '../components/ProjectsContent';
import StarryBackground from '../components/StarryBackground';

export default function Projects() {
  return (
    <div className="relative min-h-screen text-white bg-[#0A192F] overflow-hidden">
      <StarryBackground />
      <div className="relative z-10">
        <Header />
        <ProjectsContent />
      </div>
    </div>
  );
}