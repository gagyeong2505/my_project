import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * HeroSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        bgcolor: 'primary.main',
        px: 2,
      }}
    >
      <Typography
        sx={{ fontSize: '0.8125rem', letterSpacing: '0.15em', color: 'text.secondary', mb: 2 }}
      >
        UI/UX · GRAPHIC · BRANDING
      </Typography>
      <Typography component="h1" variant="h1">
        Portfolio
      </Typography>
      <Typography sx={{ color: 'text.primary', mt: 2, fontSize: { xs: '1rem', md: '1.1rem' } }}>
        개인 작업물을 소개하는 포트폴리오입니다.
      </Typography>
    </Box>
  );
}

export default HeroSection;
