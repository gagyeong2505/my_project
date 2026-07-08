import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * MetaBar 컴포넌트
 *
 * Props:
 * @param {string} left - 좌측 메타 정보 (날짜/역할) [Required]
 * @param {string} center - 중앙 메타 정보 (카테고리) [Optional]
 * @param {string} right - 우측 메타 정보 (페이지 번호 등) [Optional]
 *
 * Example usage:
 * <MetaBar left="2026.05" center="Branding" right="01" />
 */
function MetaBar({ left, center, right }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '56px',
        px: { xs: 2, md: 3 },
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography
        sx={{ fontSize: '0.8125rem', fontWeight: 600, color: 'text.secondary' }}
      >
        {left}
      </Typography>
      {center && (
        <Typography
          sx={{
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: 'text.secondary',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          {center}
        </Typography>
      )}
      {right && (
        <Typography
          sx={{ fontSize: '0.8125rem', fontWeight: 600, color: 'text.secondary' }}
        >
          {right}
        </Typography>
      )}
    </Box>
  );
}

export default MetaBar;
