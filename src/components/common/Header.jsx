import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

/**
 * Header 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <Header />
 */
function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        height: '64px',
        justifyContent: 'center',
        bgcolor: 'primary.dark',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: '64px !important' }}>
          <Typography
            sx={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'secondary.main',
              letterSpacing: '0.02em',
            }}
          >
            Portfolio
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
