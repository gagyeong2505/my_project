import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

/**
 * Footer 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <Footer />
 */
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        py: { xs: 4, md: 6 },
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center">
          <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>
            Contact
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href="mailto:hello@example.com"
              underline="hover"
              sx={{ color: 'text.primary', '&:hover': { color: 'secondary.main' } }}
            >
              Email
            </Link>
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              underline="hover"
              sx={{ color: 'text.primary', '&:hover': { color: 'secondary.main' } }}
            >
              GitHub
            </Link>
          </Stack>
          <Typography
            sx={{ fontSize: '0.75rem', color: 'text.secondary' }}
          >
            © 2026 Portfolio. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
