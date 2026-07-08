import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * AboutSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutSection />
 */
function AboutSection() {
  return (
    <Box component="section" sx={{ bgcolor: 'primary.main', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
          About
        </Typography>
        <Typography sx={{ color: 'text.primary', fontSize: '1rem', lineHeight: 1.6 }}>
          안녕하세요, 디자인과 개발을 넘나들며 작업하는 포트폴리오 주인장입니다.
          다양한 프로젝트를 통해 문제를 발견하고 해결하는 과정을 즐깁니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutSection;
