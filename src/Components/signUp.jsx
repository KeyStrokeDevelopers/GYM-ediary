import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'
import { validate, phoneNumber, pinNumber } from '../Helper/formValidation'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import { renderTextField } from '../Helper/formField'
import ImageBlock from '../Common/login_signUp_image'
import colors from '../Common/color'

const { BLUE_1, BLUE_2, GRAY_2, WHITE_1, GRAY_1 } = colors

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
const SignUpContainer = styled.div`
    width:50%;
    overflow: scroll;
    max-height: 100vh;
    @media (max-width: 600px) {
        width: 100%;
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
const SignUpForm = styled.form`
    padding: 0px 10%;
`
const FieldRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`
const FieldColumn = styled.div`
    width:50%;
    @media (max-width: 600px) {
        width: 100%;
    }
`
const FieldColumnF = styled.div`
    width:50%;
    padding-right: 10px;
    @media (max-width: 600px) {
        width: 100%;
    }
`
const SignUpButton = styled.button`
    color: ${WHITE_1};
    border-radius: 50px;
    font-size: 15px;
    font-weight: bolder;
    cursor: pointer;
    border: none;
    padding: 10px;
    background-color: ${BLUE_2};
    width: 80%;
    margin-top: 30px;
    :hover {
        background-color: ${BLUE_1};
    }
`
const SignUpMessage = styled.div`
    max-width: 100%;
    color: ${GRAY_1};
    padding-left: 40px;
    padding-top: 25px;
`

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPasswordShow: false,
            isConfirmPasswordShow: false
        }
    }
    handleSignUp = (signUpData) => {
        console.log('form data-------', signUpData)
    }

    handleShowPassword = () => {
        this.setState(preState => ({ isPasswordShow: !preState.isPasswordShow }))
    }

    handleShowConfirmPassword = () => {
        this.setState(preState => ({ isConfirmPasswordShow: !preState.isConfirmPasswordShow }))
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props
        const { isPasswordShow, isConfirmPasswordShow } = this.state
        return (<Container>
            <ImageBlock />
            <SignUpContainer>
                <SignUpMessage>
                    Kindly fill this form for GymeDiary Software Activation
                </SignUpMessage>
                <Title>SignUp Account</Title>
                <SignUpForm onSubmit={handleSubmit((signUpData) => this.handleSignUp(signUpData))} >
                    <div>
                        <Field
                            name='ownerName'
                            component={renderTextField}
                            label="Owner's Name" />
                    </div>
                    <div>
                        <Field
                            name='gymName'
                            component={renderTextField}
                            label='Name Of GYM' />
                    </div>
                    <div>
                        <Field
                            name='address'
                            component={renderTextField}
                            label='Address'
                            multiline
                            rowsMax='4'
                            margin='normal'
                        />
                    </div>
                    <FieldRow>
                        <FieldColumnF>
                            <Field
                                name='city'
                                component={renderTextField}
                                label='City' />
                        </FieldColumnF>
                        <FieldColumn>
                            <Field
                                name='state'
                                component={renderTextField}
                                label='State' />
                        </FieldColumn>
                    </FieldRow>
                    <div>
                        <Field
                            name='pinNo'
                            component={renderTextField}
                            label='Pin code number'
                            validate={pinNumber} />
                    </div>
                    <FieldRow>
                        <FieldColumnF>
                            <Field
                                name='ownerContactNumber'
                                component={renderTextField}
                                label='Owner Number'
                                validate={phoneNumber} />
                        </FieldColumnF>
                        <FieldColumn>
                            <Field
                                name='contactNumber'
                                component={renderTextField}
                                label='GYM Number'
                                validate={phoneNumber} />
                        </FieldColumn>
                    </FieldRow>
                    <div>
                        <Field
                            name='additionalNumber'
                            component={renderTextField}
                            label='Additional Contact No'
                            validate={phoneNumber} />
                    </div>
                    <div>
                        <Field
                            name='email'
                            component={renderTextField}
                            label='E-mail Id' />
                    </div>
                    <FieldRow>
                        <FieldColumnF>
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
                        </FieldColumnF>
                        <FieldColumn>
                            <Field
                                name='confirmPassword'
                                component={renderTextField}
                                label='Confirm Password'
                                type={isConfirmPasswordShow ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton
                                                aria-label='toggle password visibility'
                                                onClick={this.handleShowConfirmPassword}
                                            >
                                                {isConfirmPasswordShow ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>)
                                }} />
                        </FieldColumn>
                    </FieldRow>
                    <FieldRow>
                        <SignUpButton type='submit' disabled={pristine || submitting} className='button'>
                            Sign Up
			  			</SignUpButton>
                    </FieldRow>
                </SignUpForm>
                <SignUpMessage>
                    Software will be activated within 48 hrs of your payment
                </SignUpMessage>
            </SignUpContainer>
        </Container>)
    }
}

export default withRouter(reduxForm({
    form: 'signUp',
    validate
})(SignUp))