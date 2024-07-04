import React from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: React.ReactNode; // 이 컴포넌트는 자식 요소를 받을 수 있습니다.
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        // 오류가 발생했을 때 상태를 업데이트합니다.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // 여기에서 에러 리포팅 서비스로 오류 정보를 보낼 수 있습니다.
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // 여기에 에러 발생 시 보여줄 UI를 정의할 수 있습니다.
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
