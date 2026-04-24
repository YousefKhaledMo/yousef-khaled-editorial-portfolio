import { HeroSection } from '../components/sections/HeroSection';
import { PurposefulDesignSection } from '../components/sections/PurposefulDesignSection';
import { FeaturedWorksGrid } from '../components/sections/FeaturedWorksGrid';
import { KineticWorksList } from '../components/sections/KineticWorksList';
import { AboutSection } from '../components/sections/AboutSection';
import { ContactSection } from '../components/sections/ContactSection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <PurposefulDesignSection />
      <FeaturedWorksGrid />
      <KineticWorksList />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
