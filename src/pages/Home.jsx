import Box from '@mui/material/Box';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import ProjectGrid from '../components/landing/ProjectGrid';

/**
 * Home 페이지
 *
 * Props: 없음
 *
 * Example usage:
 * <Home />
 */
function Home() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ pt: '64px' }}>
        <HeroSection />
        <AboutSection />
        <ProjectGrid />
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
