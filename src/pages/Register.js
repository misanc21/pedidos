import React, {useState, useContext} from 'react';
import styled from 'styled-components'
import {Row, Col, Form, Input, Button} from 'antd'
import AuthContext from '../context/authContext'

import ButtonGoogle from '../components/ButtonGoogle'

const Register = ({history}) => {
    const { signUpFunc } = useContext(AuthContext)
    const [data, setData] = useState({
        email:'',
        password:'',
        confirm:'',
        displayname:''
    })

    const {email, password, confirm, displayname} = data

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        signUpFunc(email, password, displayname)
        .then(e=> history.push("/"))
    }

    return ( 
        <Row justify="center">
            <StyledCol md={{span:10}} xs={{span:24}}>
                <h2>Registrate</h2>
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
                                message: 'No es un email valido'
                            },
                            {
                                required: true,
                                message: 'Introduce tu correo electronico'
                            }
                        ]}
                    >
                        <Input onChange={handleChange} name="email" value={email}/>
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="nombre usuario"
                        name="lblnombre"
                        rules={[
                            {
                                required: true,
                                message: 'Introduce tu nombre de usuario'
                            }
                        ]}
                    >
                        <Input onChange={handleChange} name="displayname" value={displayname}/>
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
                        hasFeedback
                    >
                        <Input.Password onChange={handleChange} name="password" value={password}/>
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="confirma tu contraseña"
                        dependencies={['lblpassword']}
                        name="lblconfirm"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'las contraseñas deben de ser iguales'
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (!value || getFieldValue('lblpassword') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject('las contraseñas deben de ser iguales');
                                },
                              }),
                        ]}
                    >
                        <Input.Password onChange={handleChange} name="confirm" value={confirm}/>
                    </Form.Item>
                    <StyledFormItem {...buttonLayout}>
                        <StyledButton type="primary" htmlType="submit" className="login-form-button">
                            Registrar
                        </StyledButton>
                    </StyledFormItem>
                    <ButtonGoogle />
                </StyledForm>
            </StyledCol>
        </Row>
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
    span: 9,
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
        span: 20,
    },
};

 
export default Register;