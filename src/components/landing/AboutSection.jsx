import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import TagChip from '../ui/TagChip';

/**
 * 프로필 정보 그룹 (레퍼런스 이미지의 학력/경력/스킬/자격증 등 이력 블록 레이아웃 참고)
 * 실제 프로필 정보가 준비되면 아래 값을 교체한다.
 */
const infoGroups = [
  {
    title: '학력',
    items: [{ label: '학교명 학과명 졸업', period: '2020.03 - 2024.02' }],
  },
  {
    title: '활동',
    items: [{ label: '동아리 / 대외활동명', period: '2022.03 - 2023.02' }],
  },
  {
    title: '경력',
    items: [{ label: '회사명 · 직무', period: '2024.03 - 현재' }],
  },
  {
    title: '자격증',
    items: [{ label: '자격증명 1급', period: '2023.10' }],
  },
];

const skills = ['Figma', 'Photoshop', 'Illustrator', 'React'];

/**
 * AboutSection 컴포넌트
 * reference/behance-portfolio-profile.png 레이아웃(프로필 사진 + 이력 정보 그리드) 참고
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutSection />
 */
function AboutSection() {
  return (
    <Box component="section" sx={{ bgcolor: 'primary.main', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Typography component="h2" variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
          About
        </Typography>
        <Typography sx={{ color: 'text.primary', fontSize: '1rem', lineHeight: 1.6, textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          안녕하세요, 디자인과 개발을 넘나들며 작업하는 포트폴리오 주인장입니다.
          다양한 프로젝트를 통해 문제를 발견하고 해결하는 과정을 즐깁니다.
        </Typography>

        <Grid container spacing={{ xs: 6, md: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                aspectRatio: '3 / 4',
                bgcolor: 'primary.light',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
              }}
            >
              <PersonRoundedIcon sx={{ fontSize: 96, color: 'primary.dark' }} />
            </Box>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'text.primary' }}>
              Portfolio Owner
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
              Designer & Developer
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gridAutoFlow: 'column',
                gridTemplateRows: 'repeat(2, auto)',
                columnGap: { xs: 0, sm: 6 },
                rowGap: 4,
                mb: 4,
              }}
            >
              {infoGroups.map((group) => (
                <Box key={group.title}>
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      color: 'secondary.main',
                      mb: 1,
                    }}
                  >
                    {group.title}
                  </Typography>
                  {group.items.map((item) => (
                    <Box key={item.label} sx={{ mb: 0.5 }}>
                      <Typography sx={{ fontSize: '0.875rem', color: 'text.primary' }}>
                        {item.label}
                      </Typography>
                      <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                        {item.period}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>

            <Typography
              sx={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: 'secondary.main',
                mb: 1,
              }}
            >
              스킬
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {skills.map((skill) => (
                <TagChip key={skill} label={skill} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutSection;
