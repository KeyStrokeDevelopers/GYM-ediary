import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'
import { validate } from '../Helper/formValidation'
import { renderTextField } from '../Helper/formField'
import ImageBlock from '../Common/login_signUp_image'
import colors from '../Common/color'

const { BLUE_1, BLUE_2, GRAY_1, GRAY_2, WHITE_1 } = colors

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    .MuiFormControl-root {
        width: 100%;
    }
    @media (max-width: 600px) {
        flex-direction: column;
    }
`
const ForgotContainer = styled.div`
    width:50%;
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
const ForgotForm = styled.form`
    padding: 0px 10%;
`
const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px 0px;
`
const ForgotButton = styled.button`
    color: ${WHITE_1};
    border-radius: 50px;
    font-size: 15px;
    font-weight: bolder;
    cursor: pointer;
    border: none;
    padding: 10px;
    background-color: ${BLUE_2};
    width: 80%;
    :hover {
        background-color: ${BLUE_1};
    }
`
const AnyQuery = styled.div`
    max-width: 100%;
    text-align: center;
    color: ${GRAY_1};
`

class ForgotPassword extends Component {
    handleForgot = (email) => {
        console.log('forgot form data-------', email)
    }
    render() {
        const { handleSubmit, pristine, submitting } = this.props
        return (<Container>
            <ImageBlock />
            <ForgotContainer>
                <Title>Forgot Password</Title>
                <ForgotForm onSubmit={handleSubmit((email) => this.handleForgot(email))} >
                    <div>
                        <Field
                            name="email"
                            component={renderTextField}
                            label="Registered Email Id" />
                    </div>

                    <ButtonContainer>
                        <ForgotButton type="submit" disabled={pristine || submitting} className='button'>
                            Forgot Password
			  			</ForgotButton>
                    </ButtonContainer>
                    <AnyQuery>
                        For Any Query +917973397629
                    </AnyQuery>
                </ForgotForm>
            </ForgotContainer>
        </Container>)
    }
}

export default withRouter(reduxForm({
    form: 'forgotPassword',
    validate
})(ForgotPassword))