# Claco 프론트엔드 개발 문서 

#### 배포 URL https://claco-client.vercel.app/
* * *

# 💻 Technology
* ![Static Badge](https://img.shields.io/badge/react-%252320232a.svg?logo=React&color=%231C1C1C) ![Static Badge](https://img.shields.io/badge/Zustand-%252320232a.svg?color=%231C1C1C)
* ![Static Badge](https://img.shields.io/badge/typescript-%253178C6.svg?logo=typescript&logoColor=%23FFFFFF&color=%233178C6) ![Static Badge](https://img.shields.io/badge/yarn-%253178C6.svg?logo=yarn&logoColor=%23FFFFFF&color=%232C8EBB)
* ![Static Badge](https://img.shields.io/badge/tailwindCSS-%253178C6.svg?logo=tailwindCSS&logoColor=%23FFFFFF&color=%2306B6D4) ![Static Badge](https://img.shields.io/badge/shadcn%2Fui-%253178C6.svg?logo=shadcn%2Fui&logoColor=%23FFFFFF&color=%23000000)
* ![Static Badge](https://img.shields.io/badge/TanStack%20Query-%253178C6.svg?logo=React%20Query&logoColor=%23FFFFFF&color=%23FF4154) ![Static Badge](https://img.shields.io/badge/Vercel-%253178C6.svg?logo=Vercel&logoColor=%23FFFFFF&color=%23000000) ![Static Badge](https://img.shields.io/badge/PWA-%253178C6.svg?logo=PWA&logoColor=%23FFFFFF&color=%235A0FC8)


# 🧸 기술 스택 선정 이유

| 기술 스택 | 설명 |
|-----------|------|
| React | React는 가장 핵심 요소인 Virtual Dom을 이용하여 불필요한 화면 갱신을 최소화합니다. 이를 통해, 성능 향상을 시킬 수 있으며 빠른 렌더링을 지원합니다. React는 컴포넌트 기반 아키텍처를 채택하고 있으며, UI 요소들을 컴포넌트로 분리하여 개발하고 조합하는 방식으로 구성할 수 있습니다. 따라서, 컴포넌트의 재사용성을 용이하게 하며, 코드 수정 및 유지·보수에 효율적이기에 React를 사용하게 되었습니다. |
| TypeScript | TypeScript는 정적 타입 언어로, 코드를 더 안정적으로 만들고 개발자 사이의 협업을 용이하게 해줍니다. 생산성접근파일 단계에서 에러를 발견하여 런타임 오류를 방지하며, 코드 힌트와 자동 완성을 제공하여 개발 생산성을 높여주는 장점이 있어 TypeScript를 선정하게 되었습니다. |
| Zustand | 간결성과 유연성간결하고 직관적인 보일러플레이트 및 개발 방식을 제공합니다. 불필요한 렌더링 최소화상태가 변경될 때만 컴포넌트를 렌더링하므로 불필요한 렌더링을 최소화할 수 있어 성능 향상에 도움이 됩니다. |
| Yarn | 높은 속도, 안정성 및 보안성Yarn은 JavaScript 패키지 매니저로, 빠른 속도 및 높은 신뢰성과 보안성을 제공하여 효율적인 프로젝트 관리가 가능합니다. |
| Tanstack-Query | 효율적인 Data Fetching 및 관리데이터 캐싱 등의 기능을 존재하여 불필요한 데이터 요청을 줄일 수 있습니다. |
| TailwindCSS | 개발의 편의성 HTML과 CSS 파일을 별도로 개발 및 관리할 필요가 없기 때문에 개발하기에 편리하고, 팀핑하는 각 태그의 클래스명을 고민할 시간을 절약할 수 있어 빠른 개발이 가능합니다. |
| Vercel | 간편한 배포 자동화 가능하여에 푸시할 때마다 자동 배포하는 방식으로 간편하게 웹사이트를 배포할 수 있습니다. |

# 🗂️ Naming Rules
* 폴더명 - `PascalCase`
* 파일명 - `PascalCase`
* 타입, 유틸함수 등 - `camelCase`
* 상수 - `UpperCase`

# 📄 Commit Convension
커밋 메시지는 `태그: 커밋 메시지` 형식으로 작성 (ex. git commit -m "feat: 카카오 로그인 기능 구현")

📌Type

| 태그명 | commit 규칙 |
|----------|--------------|
| 🔗 feat | 새로운 기능 개발 |
| 🛠 fix | UI,UX 및 코드 수정 |
| 🎨 style | CSS 스타일링 및 퍼블리싱 작업 |
| 📄 docs | 문서 작업(REANME.md 등) |
| 📘 test | 배포 테스트, QA 테스팅 관련 |
| 🧰 refactor | 코드 리팩토링 |
| 🔧 rename | 폴더 혹은 파일명 변경 |
| ✂️ remove | 파일 삭제 |

# 🍀 Issue Template
* `기능 개발 관련 Issue Template`
  ## 이슈 설명☀️
    이슈에 관한 설명

  ## TO-DO📒
  - [ ] 할 일 1

  ## 기타🍀

* `버그 수정 관련 Issue Template`
    ## 에러 설명🚦
    무슨 에러인지 설명!

    ## 환경⚙️
    특정 기기에서만 발생하는 에러라면 디바이스 종류, 브라우저 종류 등!

    ## 재현 방법🧿
    어떻게 재현하는지 설명!

    ## 에러 화면📸
    스크린샷 or GIF 등..

# 🍀 Pull Request Template
* 관련 이슈
* 기존 코드에 영향을 미치는 작업 사항
* 기존 코드에 영향을 미치지 않는 작업 사항
* 작업 내용 스크린 샷
* 리뷰어에게 공유할 내용
* 추후 작업할 내용
* main (develop) 브랜치 pull 여부 확인

# 🌊 Git Flow
 | 브랜치 명 | 역할 |
|----------|--------------|
| main | 최종 배포될 서비스의 브랜치 |
| develop | 개발 브랜치, 해당 브랜치에서 분기를 파 작업 후 merge |
| feature | 기능 개발 브랜치 |
| hotfix | main 브랜치 배포 후 긴급 수정 사항 발생 시 사용하는 브랜치 |
