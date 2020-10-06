import React, { useContext } from 'react';
import styled from 'styled-components'
import {Form, Button} from 'antd'
import AuthContext from '../context/authContext'

const ButtonGoogle = () => {
    const {signInGoogleFunc} = useContext(AuthContext)

    const handleSignGoogle = () => {
        signInGoogleFunc()
    }
    return (
        <StyledFormItem {...buttonLayout}>
            <StyledButton type="secondary" className="login-form-button" onClick={handleSignGoogle}>
                Ingresar con Google
            </StyledButton>
        </StyledFormItem>
    );
}

const StyledFormItem = styled(Form.Item)`
    display:flex;
    justify-content: center;
`

const StyledButton = styled(Button)`
    width: 100%;
`

const buttonLayout = {
    wrapperCol: {
        offset:1,
        span: 21,
    },
};

export default ButtonGoogle;