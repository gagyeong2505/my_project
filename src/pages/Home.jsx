import Box from '@mui/material/Box';
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
      <HeroSection />
      <AboutSection />
      <ProjectGrid />
      <Footer />
    </Box>
  );
}

export default Home;
