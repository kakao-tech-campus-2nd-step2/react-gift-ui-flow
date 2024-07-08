# JSX는 어떻게 JavaScript에서 렌더링될까?

## JSX

- facebook에서 React에 사용하고자 만든 구문
  - ECMAScript의 일부가 아님
  - JavaScript 엔진, 브라우저에서 실행되는 구문이 아님

### JSX의 목적

- HTML을 JavaScript 내부에 표현
- 트랜스파일러를 통해 JavaScript 코드로 변환

## JSX는 어떻게 JavaScript에서 렌더링될까?

```jsx
// JSX 문법
import React from 'react';
import ReactDOM from 'react-dom/client';

const element = <h1>Hello, world!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```

```jsx
// Babel 변환 후 JavaScript
import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement('h1', null, 'Hello, world!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```

### JSX 변환

: 트랜스파일러를 통해 JSX를 JavaScript로 변환

### React.createElement() 호출

- React.createElement(type, props, …children)
  - React 엘리먼트 생성
  - 반환된 객체
    ```jsx
    {
      type: 'h1',
      props: {
        children: 'Hello, world!'
      }
    }
    ```

### 가상 DOM 생성

: React.createElement()가 반환한 객체로 가상 DOM 생성

### **createRoot()로 루트 생성**

- createRoot(domNode, options?)
  - HTML의 루트 DOM 요소를 이용해 React의 루트 DOM을 생성

### root.render()

- root.render(reactNode)
  - 생성된 루트에서 render 메서드를 호출해 렌더링 수행

### 실제 DOM 업데이트

: 가상 DOM과 실제 DOM을 비교해 업데이트

## 생각해보기 질문의 답

1. `#root`를 미리 선언해놓는 이유는 무엇일까요?

   : `#root`는 React가 렌더링될 HTML 요소이다. React는 SPA로 모든 UI가 하나의 페이지에서 동적으로 업데이트된다. 그래서 HTML 문서에 미리 `#root` id를 가진 요소를 선언해, 해당 요소를 기준으로 전체 UI를 렌더링하도록 한다.

2. `React`는 들어본 것 같은데 `react-dom`은 무엇일까요?

   : react-dom은 React 패키지의 일부로, React 컴포넌트를 브라우저의 실제 DOM에 렌더링하는데 필요한 API를 제공한다. 브라우저 환경에서 React를 실행하고, 컴포넌트를 브라우저의 실제 DOM에 마운트하는 역할을 한다. react-dom이 있어야 React 컴포넌트를 HTML 문서에 표시할 수 있다.

3. `render`가 하는 일은 무엇일까요?

   : render 메서드는 React 컴포넌트를 실제 DOM에 렌더링하는 역할을 한다. 주어진 React Node를 가상 DOM에 추가하고, 가상 DOM을 비교해 변경 사항만 실제 DOM에 반영한다.

4. `JSX`와 표현식은 같을까요?

   : JSX와 표현식은 다르다. JSX는 JavaScript의 확장 문법으로, HTML과 유사한 문법으로 React 엘리먼트를 구성한다. 반면, 표현식은 JavaScript 코드 내에서 값을 평가하는 코드의 조각을 의미한다. JSX 내부에서는 JavaScript 표현식을 {}로 감싸 사용가능하다.

5. `JSX`와 `React.createElement()` 는 무슨 관계일까요?

   : JSX 코드는 트랜스파일러에 의해 React.createElement() 코드와 같은 JavaScript 코드로 변환된다. JSX를 사용하면 직접 React.createElement()를 사용하지 않고 직관적인 문법으로 React 엘리먼트를 생성할 수 있다.

6. `document.createElement()`와 다른 점은 무엇일까요?

   : document.createElemt()는 브라우저의 DOM API로 새로운 HTML 요소를 생성하는데 사용된다. 반면, React.createElement()는 React 엘리먼트를 생성하는 함수로 React의 가상 DOM을 구성하는 데 사용된다.
