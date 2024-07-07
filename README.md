# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

## Week2

### 질문의 답변 작성하기

- 질문 1. CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가
  발생하나요?

  - 리액트 라우터를 사용하지 않을 경우 a태그를 사용해서 href로 이동하게 되는데 이 때 페이지를 이동하면서 full Re-Rendering이 발생하게 된다.

  - 또한 lazy loading이나 suspense를 사용할 때 URL 패턴과 연결하는 로직을 직접 구현해야돼서 매우 복잡해진다.

    - 예를 들자면

      ```
      function App() {
        const [currentPath, setCurrentPath] = useState(window.location.pathname);

        useEffect(() => {
          const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
          }
          window.addEventListener('popstate', onLocationChange);
          return () => window.removeEventListener('popstate', onLocationChange);
        }, []);

        const getComponent = () => {
          switch(currentPath) {
            case '/':
              return <React.Suspense fallback={<div>Loading...</div>}>
                      <Home />
                    </React.Suspense>;
            case '/about':
              return <React.Suspense fallback={<div>Loading...</div>}>
                      <About />
                    </React.Suspense>;
            default:
              return <NotFound />;
          }
        }

        return (
          <div>
            {getComponent()}
          </div>
        );
      }
      ```

      이렇게 현재 URL을 확인하고 그에 맞는 컴포넌트를 로드하는 로직을 직접 작성해야됩니다.

      하지만 Router일 경우

      ```
      import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
      import React, { Suspense } from 'react';

      const Home = React.lazy(() => import('./components/Home'));
      const About = React.lazy(() => import('./components/About'));

      function App() {
        return (
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </Switch>
            </Suspense>
          </Router>
        );
      }
      ```

      이렇게 하면 URL 패턴과 동적 임포트가 자동으로 연결되어 관리가 훨씬 간편해집니다.

- 질문 2. 리액트 Context 나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)

  1. 쇼핑몰 장바구니
     예전에 무신사에서 레거시 코드가 Redux로 관리했던 것으로 알고 있습니다. 그런 것처럼 상품을 추가하고, 수량 제거 및 변경을 할 때 상태를 전역적으로 관리하게 된다면 여러 페이지에서 일관된 정보로 관리하기 쉽다고 생각합니다.
  2. 필터링
     사용자가 선택한 필터 및 정렬 옵션을 전역적으로 관리하여 여러 컴포넌트에서 일관되게 적용할 수 있다고 생각합니다.

  3. 폼 상태 관리
     여러 단계로 구성된 복잡한 폼의 상태를 중앙에서 관리하여 데이터의 일관성을 유지하고 단계 간 이동을 쉽게 할 수 있습니다.

  이렇게 Context나 Redux를 사용하면 prop drilling을 피하고, 상태 관리를 중앙화하여 코드의 가독성과 유지보수성을 높일 수 있습니다.

- 질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까요?

  **Local Storage**

  - 특징: 도메인별로 저장되며, 브라우저를 닫아도 데이터가 유지됩니다.
    용량 제한: 일반적으로 5-10MB (브라우저에 따라 다름)
    JavaScript를 통해 접근 가능합니다.
    서버로 자동 전송되지 않습니다.

  - 사용 시기
    - 장기간 보존해야 하는 클라이언트 측 데이터 (예: 사용자 설정, 테마 선택)
    - 오프라인 작업을 위한 데이터 캐싱
      웹 애플리케이션의 상태 저장 (예: 장바구니 내용)

  **Session Storage**

  - 특징 : 탭/창 세션 동안만 데이터가 유지됩니다. 탭/창을 닫으면 데이터가 삭제됩니다.
    용량 제한: Local Storage와 비슷 (약 5-10MB)
    JavaScript를 통해 접근 가능합니다.
    서버로 자동 전송되지 않습니다.

  - 사용 시기
    - 일시적인 데이터 저장 (예: 폼 작성 중 임시 저장)
    - 단일 페이지 애플리케이션(SPA)에서 페이지 새로고침 시 상태 유지
      민감하지 않은 세션 관련 정보 저장

  **Cookies**

  - 특징:
    서버와 클라이언트 간에 데이터를 주고받을 수 있습니다.
    용량 제한: 일반적으로 4KB
    만료 기간을 설정할 수 있습니다.
    HTTP 요청 시 자동으로 서버로 전송됩니다.
    JavaScript로 접근 가능하지만, HttpOnly 플래그로 제한할 수 있습니다.

  - 사용 시기:

    - 서버 측 세션 관리 (세션 ID 저장)
    - 용자 인증 정보 저장 (주로 토큰 형태로)

    - 서버와 클라이언트 간 지속적인 데이터 교환이 필요한 경우

  - 선택 시 고려사항:

    - 데이터의 수명: 영구적 vs 임시
    - 보안 요구사항: 민감한 데이터는 HttpOnly 쿠키 사용
    - 저장 용량 필요
    - 서버와의 통신 필요성
    - 성능 고려 (쿠키는 매 요청마다 전송되므로 큰 데이터에는 부적합)
