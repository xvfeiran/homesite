import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Blog from './components/sections/Blog';
import Education from './components/sections/Education';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <Blog />
        <Education />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
