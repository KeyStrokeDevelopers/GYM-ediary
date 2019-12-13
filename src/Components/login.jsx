import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import styled, { css } from 'styled-components'
import { validate, phoneNumber } from '../Helper/formValidation'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { renderTextField } from '../Helper/formField'
import ImageBlock from '../Common/login_signUp_image'
import colors from '../Common/color'

const { BLUE_1, BLUE_2, GRAY_1, GRAY_2, WHITE_1, TOMATO_1, TOMATO_2, GREEN_1, GREEN_2 } = colors

const Container = styled.div`
    width: 100%;
    display: flex;
    .MuiFormControl-root {
        width: 100%;
    }
    @media (max-width: 600px) {
        flex-direction: column;
    }
`
const LoginContainer = styled.div`
    width:50%;
    overflow: scroll;
    max-height: 100vh;
    @media (max-width: 600px) {
        width: 100%;
    }
`
const SignUpLink = styled.div`
    max-width: 100%;
    text-align: right;
    color: ${GRAY_1};
    padding-top: 25px;
    padding-right: 30px;
    a {
        text-decoration: none;
        cursor: pointer;
        color: ${BLUE_1};
    }
`
const Title = styled.div`
    width: 100%;
    text-align: center;
    font-size: 2em;
    color: ${GRAY_2};
    font-weight: 700;
    padding: 25px 0px;
`
const LoginForm = styled.form`
    padding: 0px 10%;
`
const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px 0px;
`
const ForgotPassword = styled.div`
    width: 50%;
    display: flex;
    color: ${GRAY_1};
    align-items: center;
    a {
        text-decoration: none;
        cursor: pointer;
        color: ${GRAY_1};
        :hover {
            color: ${BLUE_1};
        }
    }
`
const SharedButtonStyle = css`
    color: ${WHITE_1};
    border-radius: 50px;
    font-size: 15px;
    font-weight: bolder;
    cursor: pointer;
    border: none;
    padding: 10px;
`
const LoginButton = styled.button`
    ${SharedButtonStyle};
    background-color: ${BLUE_2};
    width: 50%;
    :hover {
        background-color: ${BLUE_1};
    }
`
const DemoButton = styled.button`
    ${SharedButtonStyle};
    background-color: ${TOMATO_2};
    width: 80%;
    :hover {
        background-color: ${TOMATO_1};
    }
`
const AppButton = styled.button`
    ${SharedButtonStyle};
    background-color: ${GREEN_2};
    width: 80%;
    :hover {
        background-color: ${GREEN_1};
    }
`
const AnyQuery = styled.div`
    max-width: 100%;
    text-align: center;
    color: ${GRAY_1};
`

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPasswordShow: false
        }
    }

    handleLogin = (loginData) => {
        console.log('form data-------', loginData)
    }

    handleShowPassword = () => {
        this.setState(preState => ({ isPasswordShow: !preState.isPasswordShow }))
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props
        const { isPasswordShow } = this.state
        return (<Container>
            <ImageBlock />
            <LoginContainer>
                <SignUpLink>Dont't have an account yet?
                    <Link to='/signup'> Sign Up!</Link>
                </SignUpLink>
                <Title>Login Account</Title>
                <LoginForm onSubmit={handleSubmit((loginData) => this.handleLogin(loginData))} >
                    <div>
                        <Field
                            name='regNo'
                            component={renderTextField}
                            label='Reg. Contact Number'
                            validate={phoneNumber} />
                    </div>
                    <div>
                        <Field
                            name='userName'
                            component={renderTextField}
                            label='UserName' />
                    </div>
                    <div>
                        <Field
                            name='password'
                            component={renderTextField}
                            label='Password'
                            type={isPasswordShow ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={this.handleShowPassword}
                                        >
                                            {isPasswordShow ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>)
                            }} />
                    </div>
                    <ButtonContainer>
                        <ForgotPassword>
                            <Link to='/forgotpassword'>Forgot Password </Link>
                        </ForgotPassword>
                        <LoginButton type='submit' disabled={pristine || submitting} className='button'>
                            LOG IN
			  			</LoginButton>
                    </ButtonContainer>
                    <ButtonContainer>
                        <DemoButton type='submit' disabled={pristine || submitting} className='button'>
                            CLICK HERE FOR DEMO
			  			</DemoButton>
                    </ButtonContainer>
                    <ButtonContainer>
                        <AppButton type='submit' disabled={pristine || submitting} className='button'>
                            MOBILE APP ALSO AVAILABLE
			  			</AppButton>
                    </ButtonContainer>
                    <AnyQuery>
                        For Any Query +917973397629
                    </AnyQuery>
                </LoginForm>
            </LoginContainer>
        </Container>)
    }
}

export default withRouter(reduxForm({
    form: 'login',
    validate
})(Login))