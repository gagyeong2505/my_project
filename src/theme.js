import { createTheme } from '@mui/material/styles';

/**
 * Summer Picnic 컬러 팔레트 + Behance 포트폴리오 타이포그래피 시스템 기반 테마
 * 참고: color_pallette/Summer Picnic 포스터 컬러 팔레트.md, DesignSystem/behance-portfolio-analysis.md
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#3E4D2E',
      light: '#6B8E4E',
      dark: '#2A3620',
      contrastText: '#F5F2E8',
    },
    secondary: {
      main: '#D4E8A8',
      dark: '#C4D890',
      contrastText: '#3E4D2E',
    },
    accent: {
      main: '#B8825A',
    },
    background: {
      default: '#3E4D2E',
      paper: '#2A3620',
    },
    text: {
      primary: '#F5F2E8',
      secondary: '#A8C888',
    },
    divider: '#D4E8A8',
  },
  typography: {
    fontFamily: '"Noto Sans KR", "Apple SD Gothic Neo", sans-serif',
    h1: {
      fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
      fontWeight: 700,
      lineHeight: 1.15,
      color: '#D4E8A8',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: 1.3,
      color: '#D4E8A8',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.4,
    },
  },
  spacing: 8,
  components: {
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          fontSize: '0.8125rem',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
  },
});

export default theme;
