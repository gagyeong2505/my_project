import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { keyframes } from '@emotion/react';

const categories = ['UI/UX', 'GRAPHIC', 'BRANDING'];

const bloom = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.4);
    filter: blur(40px);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0px);
  }
`;

/**
 * HeroSection 컴포넌트
 * Behance 케이스 스터디 표지(중앙 스포트라이트 글로우 + 스택형 카테고리 + 스크립트 로고타입) 레이아웃 참고
 * 페이지 로딩 시 글로우 그라디언트가 잉크처럼 번지며 퍼지는 애니메이션 적용
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
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        bgcolor: 'primary.dark',
        px: 2,
      }}
    >
      <Box
        sx={(theme) => ({
          position: 'absolute',
          inset: 0,
          transformOrigin: '50% 50%',
          backgroundImage: [
            `radial-gradient(ellipse 55% 42% at 50% 0%, ${alpha(theme.palette.primary.light, 0.55)} 0%, ${alpha(theme.palette.primary.light, 0)} 70%)`,
            `radial-gradient(ellipse 55% 42% at 50% 100%, ${alpha(theme.palette.primary.light, 0.4)} 0%, ${alpha(theme.palette.primary.light, 0)} 70%)`,
            `radial-gradient(ellipse 32% 55% at 50% 50%, ${alpha(theme.palette.secondary.main, 0.28)} 0%, ${alpha(theme.palette.secondary.main, 0)} 65%)`,
          ].join(', '),
          animation: `${bloom} 2.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
        })}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          sx={{ fontSize: '0.8125rem', letterSpacing: '0.3em', color: 'text.secondary', mb: 3 }}
        >
          2026
        </Typography>

        <Stack spacing={0.5} sx={{ mb: 5 }}>
          {categories.map((category) => (
            <Typography
              key={category}
              sx={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.25em',
                color: 'text.secondary',
              }}
            >
              {category}
            </Typography>
          ))}
        </Stack>

        <Typography
          component="h1"
          sx={{
            fontFamily: '"Pinyon Script", cursive',
            fontWeight: 400,
            fontSize: { xs: '6rem', md: '10.5rem' },
            lineHeight: 1,
            color: 'secondary.main',
          }}
        >
          Portfolio
        </Typography>

        <Typography sx={{ color: 'text.primary', mt: 4, fontSize: { xs: '1rem', md: '1.1rem' } }}>
          개인 작업물을 소개하는 포트폴리오입니다.
        </Typography>
      </Box>
    </Box>
  );
}

export default HeroSection;
