import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProjectCard from './ProjectCard';
import projects from '../../data/projects';

/**
 * ProjectGrid 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectGrid />
 */
function ProjectGrid() {
  return (
    <Box component="section" sx={{ bgcolor: 'primary.dark', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography component="h2" variant="h2" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
          Project
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid
              key={project.id}
              size={{ xs: 12, sm: 6, md: project.size === 'large' ? 6 : 3 }}
            >
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProjectGrid;
