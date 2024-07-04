import styled from '@emotion/styled';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { Button } from '@/components/common/Button';
import { useAuth } from '@/state/login';
import { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const { login } = useAuth();

    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        const authTokenFromSession = sessionStorage.getItem('authToken');
        if (authTokenFromSession) {
            history.push('/');
        }
    }, []);

    const onEnterId = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value);
    }, [password])

    const onEnterPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }, [password])

    const onBtnClickedHandler = () => {
        if (id && password) {
            login(id);
            history.goBack();
        } else {
            alert('id와 password를 입력해주세요!')
        }
    }

    return (
        <LoginBox>
            <UnderlineTextField placeholder='이름' value={id} onChange={onEnterId} />
            <div style={{ height: "16px" }} />
            <UnderlineTextField type='password' placeholder='비밀번호' value={password} onChange={onEnterPassword} />
            <div style={{ height: "60px" }} />
            <Button onClick={onBtnClickedHandler} children='로그인' />
        </LoginBox>
    )
}

export default Login;

const LoginBox = styled.article({
    border: '1px solid rgba(0, 0, 0, 0.12)',
    padding: '60px 52px',
    width: '100%',
    maxWidth: '475px'
})