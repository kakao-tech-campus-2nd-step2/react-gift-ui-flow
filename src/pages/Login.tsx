import './Login.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from "@/components/common/Button"
import { UnderlineTextField } from "@/components/common/Form/Input/UnderlineTextField"
import { useAuth } from '@/context/AuthContext';

const Login = () => {

    const navigate = useNavigate()
    const { login } = useAuth()
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const handleLogin = () => {
        if (id&&pw) { // id와 비밀번호가 모두 입력되었을 때만 로그인 처리
            login(id)
            navigate(-1)
        } else {
            alert('ID와 비밀번호를 모두 입력해주세요.')
        }

    }

  return (
    <div className="Login">
        <div className="title">Kakao</div>
        <div className="container">
            <UnderlineTextField placeholder='이름' value={id} onChange={(e) => setId((e.target as HTMLInputElement).value)} className='textFieldId'/>
            <UnderlineTextField placeholder='비밀번호' value={pw} onChange={(e) => setPw((e.target as HTMLInputElement).value)} className='textFieldPw'/>
            <Button theme='kakao' size='responsive' onClick={handleLogin} className='buttonLogin'>
                <div>로그인</div>
            </Button>
        </div>
    </div>
  )
}

export default Login