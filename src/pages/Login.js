import React, {useState, useContext} from 'react';
import styled from 'styled-components'
import {Row, Col, Form, Input, Button} from 'antd'
import AuthContext from '../context/authContext'

import ButtonGoogle from '../components/ButtonGoogle'

const Login = ({history}) => {
    const {
        SingInFunc,
    } = useContext(AuthContext)

    const [datos, setDatos] = useState({
        email: '',
        password:''
    })

    const {email, password} = datos

    const handleChange = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit =  () => {
        SingInFunc(email, password)
        .then(e => history.push("/"))
    }

    return (
        <> 
        <Row justify="center">
            <StyledCol md={{span:10}} xs={{span:24}}>
                <h2>Inicia sesión</h2>
                <StyledForm
                    onFinish={handleSubmit}
                    {...layout}
                >
                    <Form.Item
                        {...tailLayout}
                        label="correo"
                        name="lblemail"
                        rules={[
                            {
                                type:'email',
                                message: 'No es un correo valido'
                            },
                            {
                                required: true,
                                message: 'Introduce tu correo electronico'
                            }
                        ]}
                    >
                        <Input name="email" onChange={handleChange} value={email}/>
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="contraseña"
                        name="lblpassword"
                        rules={[
                            {
                                required: true,
                                message: 'Introduce tu contraseña'
                            },
                            {
                                pattern: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{6,})"),
                                message: 'minimo 6 caracteres, debe contener una minuscula, mayuscula, numero, y un caracter especial'
                            }
                        ]}
                    >
                        <Input.Password name="password" onChange={handleChange} value={password}/>
                    </Form.Item>
                    <StyledFormItem {...buttonLayout}>
                        <StyledButton type="primary" htmlType="submit" className="login-form-button">
                            Ingresar
                        </StyledButton>
                    </StyledFormItem>
                    <ButtonGoogle />
                </StyledForm>
            </StyledCol>
        </Row>
        </>
    );
}

const StyledCol = styled(Col)`
    text-align: center;
`

const StyledButton = styled(Button)`
    width: 100%;
`
const StyledForm = styled(Form)`
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
`
const StyledFormItem = styled(Form.Item)`
    margin-top: 1rem;
    display:flex;
    justify-content: center;
`

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 1,
    span: 15,
  },
};

const buttonLayout = {
    wrapperCol: {
        offset:2,
      span: 21,
    },
};

 
export default Login;