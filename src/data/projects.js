import dashboardThumb from '../assets/projects/dashboard-thumb.png';
import communityThumb from '../assets/projects/community-thumb.png';

/**
 * 프로젝트 데이터
 */
const projects = [
  {
    id: 1,
    title: 'File Archive',
    description: '파일을 업로드하고 팀과 공유하는 파일 아카이브 대시보드입니다.',
    tags: ['Dashboard', 'File Upload'],
    date: '2026.06',
    size: 'large',
    thumbnail: dashboardThumb,
    url: 'https://gagyeong2505.github.io/dashboard/',
  },
  {
    id: 2,
    title: '핸드메이드갤러리',
    description: '핸드메이드 취미를 공유하는 커뮤니티 사이트입니다.',
    tags: ['Community', 'Web'],
    date: '2026.07',
    size: 'large',
    thumbnail: communityThumb,
    url: 'https://gagyeong2505.github.io/my-community/#/login',
  },
];

export default projects;
