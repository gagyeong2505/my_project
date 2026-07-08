import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TagChip from '../ui/TagChip';
import MetaBar from '../ui/MetaBar';

/**
 * ProjectCard 컴포넌트
 *
 * Props:
 * @param {object} project - 프로젝트 정보 객체 [Required]
 * @param {string} project.title - 프로젝트 제목
 * @param {string} project.description - 프로젝트 설명
 * @param {string[]} project.tags - 태그 목록
 * @param {string} project.date - 날짜 메타 정보
 * @param {number} index - 카드 순번 (페이지 번호 표기용) [Required]
 *
 * Example usage:
 * <ProjectCard project={project} index={0} />
 */
function ProjectCard({ project, index }) {
  const { title, description, tags, date } = project;

  return (
    <Card sx={{ bgcolor: 'primary.dark', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          bgcolor: 'primary.light',
          aspectRatio: '4 / 3',
          width: '100%',
        }}
      />
      <MetaBar left={date} center={tags[0]} right={String(index + 1).padStart(2, '0')} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography component="h3" variant="h3" sx={{ color: 'text.primary', mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          {description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {tags.map((tag) => (
            <TagChip key={tag} label={tag} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
