export const CAREERS = [
  {
    logo: 'one-chance.svg',
    title: '경력 휴식기',
    description: '퇴사 후 개인 프로젝트를 통해 필요한 지식 습득',
    period: '2023.04 ~ 2024.03',
    job: '풀스택 개발자',
    content: [
      {
        link: 'https://github.com/one-chance/dotol-client',
        title: '게임 커뮤니티 리뉴얼',
        period: '2023.05 ~ 2023.09',
        content:
          '2021년부터 운영하던 게임 커뮤니티를 리뉴얼하였습니다. 기존 구조는 확장성과 호환성이 낮았고, 코드의 품질도 만족스럽지 않아서 확장성이 높은 구조를 새로 설계하고 여러 컴포넌트와 함수를 더 나은 코드로 교체하였습니다. 서버와 클라이언트의 모든 개발과 배포까지 혼자서 진행하여 서비스 개발에 대한 전반적인 이해도가 높아졌습니다. 넥슨과 협의하여 비공개 API를 제공받아 사용하고 있고 현재 회원은 약 3천 명, MAU는 약 1만입니다.',
        stack: ['React', 'TypeScript', 'Nest.js', 'Node.js', 'MongoDB', 'AWS'],
      },
      {
        link: 'https://github.com/one-chance/react-emotion-starter',
        title: '보일러플레이트 개발 + npm 배포',
        period: '2023.12 ~ 2024.01',
        content:
          'SPA에 필요한 주요 기능이 미리 설정된 보일러플레이트를 개발했습니다. Emotion 기반 컴포넌트 라이브러리가 제공되고 다크 모드, 다국어 설정, 반응형 디자인 기능이 지원됩니다. 보일러플레이트 사용 방법은 웹 문서로 제공하고, npm으로 배포하여 누구나 쉽게 사용할 수 있습니다. 현재까지 누적 다운로드 수는 약 2000회 이상입니다. 추후에는 Storybook을 적용하고, 공통 컴포넌트는 별도의 라이브러리로 분리할 계획입니다.',
        stack: ['React', 'TypeScript', 'Emotion', 'Vite'],
      },
      {
        link: 'https://github.com/one-chance/react-emotion-starter',
        title: '개인 블로그 개발 및 운영',
        period: '2024.02 ~ 2024.03',
        content:
          '개인 블로그를 개발하면서 Next의 주요 개념인 App Directory, App Router, Server Component, Server Action을 경험하였습니다. 특히 역할에 따라 Client 컴포넌트와 Server 컴포넌트를 구분하여 어떻게 전체 구조를 설계할 것인지 많이 고민했습니다. Supabase를 DB로 하여 Serverless로 구축했고, 게시물은 Toast Editor로 보여줍니다. Vercel로 배포하여 운영 중이며 개발 과정에서 얻은 고민과 지식을 기록하고 있습니다.',
        stack: ['Next.js', 'Tailwind', 'Supabase', 'jotai'],
      },
    ],
  },
  {
    logo: 'blockchain_labs.svg',
    title: '블록체인랩스',
    description: '4300만 명이 사용한 백신패스 COOV의 개발사',
    period: '2021.11 ~ 2023.04',
    job: '프론트엔드 개발자',
    content: [
      {
        title: 'COOV+ 개발',
        period: '2021.12 ~ 2022.04',
        content:
          'PCR 검사의 모든 과정을 디지털화하여 예약, 접수 및 문진표 작성, 검사 데이터 입력, 디지털 증명서 발급 기능을 제공하는 서비스입니다. 검사소 콘솔을 담당하여 검사 관련 기능과 검사소 일정 관리, 인원 관리, 권한 부여 기능을 구현하고 개인정보 보호를 위해 사용자 역할에 따라 접근 가능한 페이지를 분리했습니다. 국내외 공항 검사소에서 사용하는 서비스라 외국인 사용자를 위한 다국어 기능을 제공하고 Layout Shift가 발생하지 않게 하였습니다.',
        stack: ['React', 'TypeScript', 'Emotion', 'Recoil'],
      },
      {
        title: '개발 프로세스 개선',
        period: '2022.02 ~ 2023.04',
        content:
          '팀 자원의 효율적인 사용과 빠른 개발 속도를 위해 개발 프로세스를 개선했습니다. React, TypeScript, Next.js로 기술 스택을 통일하고 렌더링 방식별로 템플릿을 만들었습니다. 빌드 툴을 Webpack에서 Vite로 변경하고 모든 프로젝트에서 사용할 공통 컴포넌트를 Emotion으로 구현했으며 AWS의 S3, CloudFront를 사용하는 정적 배포 과정도 자동화했습니다. 지속적으로 프로세스를 업데이트하면서 개발 효율과 속도를 높였습니다.',
        stack: ['React', 'TypeScript', 'Next.js', 'Vite', 'Emotion', 'AWS'],
      },
      {
        title: 'BlockChat 백오피스 개발',
        period: '2022.05 ~ 2022.10',
        content:
          '중앙 서버가 없는 메신저 BlockChat의 백오피스를 개발했습니다. 개발자, 마케터, CS 담당자가 앱을 효과적으로 운영할 수 있도록 지표를 보여주는 대시보드, 버전과 배포를 관리하는 기능, 사용권과 일련번호를 관리하는 기능, CS에 대응하는 기능, 운영자 권한을 관리하는 기능을 구현하였습니다. 별도로 사용권 구매 페이지도 개발했는데, PC와 모바일 모두에서 8개 카드사를 통한 신용카드 결제가 가능하게 했습니다.',
        stack: ['React', 'TypeScript', 'Emotion', 'Recoil', 'React-Query'],
      },
      {
        title: '웹사이트 성능 개선',
        period: '2022.10 ~ 2022.12',
        content:
          'BlockChat 사이트는 동영상이 24개 포함되어 초기 로딩이 느렸습니다. 성능을 개선하기 위해 동영상을 CDN으로 제공해서 로딩 시간을 단축하고, 전체 영상이 아니라 현재 시점에서 필요한 동영상만 불러오도록 Intersection Observer와 Lazy Loading을 적용해 초기 로딩 시간을 3초 단축했습니다. 추가로 Lighthouse가 진단한 문제도 해결하고, 언어별 SEO 설정을 적용하고, 사용자 경로를 분석하면서 UI/UX를 개선하였습니다.',
        stack: ['React', 'TypeScript', 'Emotion', 'SEO', 'GA4', 'GTM'],
      },
      {
        title: 'Infrablockchain Web Service 개발',
        period: '2022.12 ~ 2023.04',
        content:
          'Infrablockchain 기반의 서비스형 블록체인(BaaS) 개발에 참여했습니다. 클라우드 인프라상에서 블록체인 앱과 기능을 개발, 테스트, 배포, 관리할 수 있는 플랫폼을 제공하는 서비스입니다. 기존 프론트엔드 업무 외에도 추가로 Use Case와 User Scenario를 기획하고, 다른 프로젝트의 업무를 먼저 진행해야 하는 백엔드 개발자와 협의하여 간단한 로그인 API를 직접 구현하고 테스트하는 방식으로 프로젝트에 기여했습니다.',
        stack: ['React', 'TypeScript', 'Tailwind', 'Nest.js'],
      },
    ],
  },
];
