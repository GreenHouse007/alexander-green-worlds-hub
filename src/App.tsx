import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WorldsSection from './components/WorldsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <WorldsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
