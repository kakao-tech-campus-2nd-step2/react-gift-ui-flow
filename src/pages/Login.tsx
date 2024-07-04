//import React from 'react'
import './Login.css'

import { Button } from "@/components/common/Button"
import { UnderlineTextField } from "@/components/common/Form/Input/UnderlineTextField"

const Login = () => {
  return (
    <div className="Login">
        <div className="title">Kakao</div>
        <div className="container">
            <UnderlineTextField placeholder='이름' className='textFieldId'/>
            <UnderlineTextField placeholder='비밀번호' className='textFieldPw'/>
            <Button theme='kakao' size='responsive' className='buttonLogin'>
                <div>로그인</div>
            </Button>
        </div>
    </div>
  )
}

export default Login