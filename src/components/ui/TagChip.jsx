import Chip from '@mui/material/Chip';

/**
 * TagChip 컴포넌트
 *
 * Props:
 * @param {string} label - 칩에 표시할 텍스트 [Required]
 *
 * Example usage:
 * <TagChip label="React" />
 */
function TagChip({ label }) {
  return (
    <Chip
      label={label}
      variant="outlined"
      sx={{
        borderColor: 'secondary.main',
        color: 'secondary.main',
        bgcolor: 'transparent',
      }}
    />
  );
}

export default TagChip;
