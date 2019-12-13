import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'
import { validate, phoneNumber, number } from '../Helper/formValidation'
import { renderTextField, renderSelectField, renderDatePicker } from '../Helper/formField'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import colors from '../Common/color'

const { BLUE_1, BLUE_2, GRAY_2, WHITE_1 } = colors

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
const RegistrationContainer = styled.div`
    width:100%;
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
const RegistrationForm = styled.form`
    padding: 0px 10%;
`
const FieldRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    .favour {
        margin-top: 14px;
    }
    @media (max-width: 600px) {
        flex-direction: column;
        .favour {
        margin-top: 0px;
        }
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
const FieldThreeColumn = styled.div`
    width:33.33%;
    @media (max-width: 600px) {
        width: 100%;
    }
`
const FieldThreeColumnF = styled.div`
    width:33.33%;
    padding-right: 10px;
    @media (max-width: 600px) {
        width: 100%;
    }
`
const RegistrationButton = styled.button`
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

class Registration extends Component {
    handleRegistration = (registrationData) => {
        console.log('form data-------', registrationData)
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props
        return (<Container>
            <MuiThemeProvider>
                <RegistrationContainer>
                    <Title>New Registration</Title>
                    <RegistrationForm onSubmit={handleSubmit((formData) => this.handleSignUp(formData))} >
                        <FieldRow>
                            <FieldColumnF>
                                <Field
                                    name='contactNumber'
                                    component={renderTextField}
                                    label='Contact Number'
                                    validate={phoneNumber} />
                            </FieldColumnF>
                            <FieldColumn>
                                <Field
                                    name='memberName'
                                    component={renderTextField}
                                    label='Member Name' />
                            </FieldColumn>
                        </FieldRow>
                        <FieldRow>
                            <FieldColumnF>
                                <Field name='title' component={renderSelectField} label='Title'>
                                    <MenuItem value={'son'} primaryText='S/o' />
                                    <MenuItem value={'dot'} primaryText='D/o' />
                                    <MenuItem value={'wife'} primaryText='W/o' />
                                </Field>
                            </FieldColumnF>
                            <FieldColumn className='favour'>
                                <Field
                                    name='favourOf'
                                    component={renderTextField}
                                    label='Favour Of & Name' />
                            </FieldColumn>
                        </FieldRow>
                        <FieldRow>
                            <FieldColumnF>
                                <Field
                                    name='alternativeCoontact'
                                    component={renderTextField}
                                    label='Alternative Contact'
                                    validate={phoneNumber} />
                            </FieldColumnF>
                            <FieldColumn>
                                <Field
                                    name='email'
                                    component={renderTextField}
                                    label='Email' />
                            </FieldColumn>
                        </FieldRow>
                        <FieldRow>
                            <FieldColumnF>
                                <Field
                                    name='dob'
                                    floatingLabelText='Date Of Birth'
                                    component={renderDatePicker}
                                    DateTimeFormat={Intl.DateTimeFormat} />
                            </FieldColumnF>
                            <FieldColumn className='favour'>
                                <Field
                                    name='age'
                                    label='Age'
                                    component={renderTextField} />
                            </FieldColumn>
                        </FieldRow>
                        <div>
                            <Field
                                name='postalAddress'
                                component={renderTextField}
                                label='POSTAL ADDRESS - if Any'
                                multiline
                                rowsMax='4'
                                margin='normal' />
                        </div>
                        <div>
                            <Field
                                name='occupation'
                                component={renderTextField}
                                label='Occupation e.g. Teacher, Doctor' />
                        </div>
                        <FieldRow>
                            <FieldThreeColumnF>
                                <Field name='bloodGroup' component={renderSelectField} label='Blood Group'>
                                    <MenuItem value={'nk'} primaryText='NOT KNOWN' />
                                    <MenuItem value={'a+'} primaryText='A+' />
                                    <MenuItem value={'a-'} primaryText='A-' />
                                    <MenuItem value={'b+'} primaryText='B+' />
                                    <MenuItem value={'b-'} primaryText='B-' />
                                    <MenuItem value={'o+'} primaryText='O+' />
                                    <MenuItem value={'o-'} primaryText='O-' />
                                </Field>
                            </FieldThreeColumnF>
                            <FieldThreeColumnF>
                                <Field name='maritalStatus' component={renderSelectField} label='Marital Status'>
                                    <MenuItem value={'nk'} primaryText='NOT KNOWN' />
                                    <MenuItem value={'single'} primaryText='SINGLE' />
                                    <MenuItem value={'married'} primaryText='MARRIED' />
                                    <MenuItem value={'widowed'} primaryText='WIDOWED' />
                                    <MenuItem value={'divorce'} primaryText='DIVORCED' />
                                    <MenuItem value={'separated'} primaryText='SEPARATED' />
                                </Field>
                            </FieldThreeColumnF>
                            <FieldThreeColumn>
                                <Field
                                    name='anniversary'
                                    floatingLabelText='Anniversary'
                                    component={renderDatePicker}
                                    DateTimeFormat={Intl.DateTimeFormat} />
                            </FieldThreeColumn>
                        </FieldRow>
                        <div>
                            <Field name='purpose' component={renderSelectField} label='Purpose'>
                                <MenuItem value={'competition'} primaryText='BODY BUILDING COMPETITION' />
                                <MenuItem value={'fitness'} primaryText='FITNESS' />
                                <MenuItem value={'weightGainNV'} primaryText='WEIGHT GAIN FOR BEGINNER NON VEG' />
                                <MenuItem value={'weightGainV'} primaryText='WEIGHT GAIN FOR BEGINNER VEG' />
                                <MenuItem value={'weightGainINV'} primaryText='WEIGHT GAIN FOR INTERMEDIATE NON VEG' />
                                <MenuItem value={'weightGainIV'} primaryText='WEIGHT GAIN FOR INTERMEDIATE VEG' />
                                <MenuItem value={'weightLoss'} primaryText='WEIGHT LOSS' />
                            </Field>
                        </div>
                        <div>
                            <Field
                                name='query'
                                component={renderTextField}
                                label='Query'
                                multiline
                                rowsMax='4'
                                margin='normal' />
                        </div>
                        <FieldRow>
                            <FieldColumnF>
                                <Field name='package' component={renderSelectField} label='Package'>
                                    <MenuItem value={'oneMonth'} primaryText='1 MONTH -- 1 Month - Rs. 2000' />
                                    <MenuItem value={'cardioOneMonth'} primaryText='CARDIO 1 MONTHLY - Cardio - 3 Months - Rs. 2500 ' />
                                    <MenuItem value={'cardioThreeMonth'} primaryText='CARDIO 3 MONTHLY - Cardio only - 3 Months - Rs. 2500' />
                                    <MenuItem value={'cgfCardio'} primaryText='CGF CARDIO - Cardio - 1 Month - Rs. 1000' />
                                    <MenuItem value={'crossFit'} primaryText='CROSS FIT -- 1 Month - Rs. 500' />
                                    <MenuItem value={'halfYearly'} primaryText='HALF YEARLY --  3 Months - Rs. 3000' />
                                </Field>
                            </FieldColumnF>
                            <FieldColumn>
                                <Field name='addOnClass' component={renderSelectField} label='ADD-ON-CLASS - if Any'>
                                    <MenuItem value={'dance'} primaryText='DANCE -- 12 Days - Rs. 0.05' />
                                    <MenuItem value={'meditation'} primaryText='MEDITATION -- 24 DAYS - RS. 500' />
                                    <MenuItem value={'yoga'} primaryText='YOGA -- 30 Days - Rs. 1000' />
                                    <MenuItem value={'zumba'} primaryText='ZUMBA - dance class - 30 Days - Rs. 2000' />
                                </Field>
                            </FieldColumn>
                        </FieldRow>
                        <FieldRow>
                            <FieldColumnF>
                                <Field
                                    name='packageDisc'
                                    component={renderTextField}
                                    label='Package Disc.' />
                            </FieldColumnF>
                            <FieldColumn>
                                <Field
                                    name='classDisc'
                                    component={renderTextField}
                                    label='Class Disc.' />
                            </FieldColumn>
                        </FieldRow>
                        <FieldRow>
                            <FieldThreeColumnF>
                                <Field
                                    name='payable'
                                    component={renderTextField}
                                    label='Payable'
                                    validate={number} />
                            </FieldThreeColumnF>
                            <FieldThreeColumnF>
                                <Field
                                    name='paidAmount'
                                    component={renderTextField}
                                    label='Paid Amount'
                                    validate={number} />
                            </FieldThreeColumnF>
                            <FieldThreeColumn>
                                <Field
                                    name='balanceAmount'
                                    component={renderTextField}
                                    label='Balance Amount'
                                    validate={number} />
                            </FieldThreeColumn>
                        </FieldRow>
                        <FieldRow>
                            <FieldColumnF>
                                <Field
                                    name='membershipActivation'
                                    floatingLabelText='Membership Activation'
                                    component={renderDatePicker}
                                    DateTimeFormat={Intl.DateTimeFormat} />
                            </FieldColumnF>
                            <FieldColumn>
                                <Field name='paymentMode' component={renderSelectField} label='Select Payment Mode'>
                                    <MenuItem value={'casj'} primaryText='CASH' />
                                    <MenuItem value={'adjustment'} primaryText='ADJUSTMENT' />
                                    <MenuItem value={'cardSwipe'} primaryText='CARD SWIPE || CBI || SONIYA || 99998989' />
                                    <MenuItem value={'onlinePay'} primaryText='ONLINE PAYMENT || CBI || SONIYA || 999998989' />
                                    <MenuItem value={'amazonPay'} primaryText='AMAZON PAY' />
                                    <MenuItem value={'googlePay'} primaryText='GOOGLE PAY' />
                                    <MenuItem value={'jioMoney'} primaryText='JIO MONEY' />
                                    <MenuItem value={'paid'} primaryText='PAID' />
                                    <MenuItem value={'paytm'} primaryText='PAYTM' />
                                </Field>
                            </FieldColumn>
                        </FieldRow>
                        <FieldRow>
                            <FieldColumnF>
                                <Field
                                    name='fingerprint'
                                    component={renderTextField}
                                    label='Fingerprint Code' />
                            </FieldColumnF>
                            <FieldColumn>
                                <Field
                                    name='peferredBy'
                                    component={renderTextField}
                                    label='Peferred By' />
                            </FieldColumn>
                        </FieldRow>
                        <FieldRow>
                            <RegistrationButton type='submit' disabled={pristine || submitting} className='button'>
                                Registration
			  			    </RegistrationButton>
                        </FieldRow>
                    </RegistrationForm>
                </RegistrationContainer>
            </MuiThemeProvider>
        </Container>)
    }
}

export default withRouter(reduxForm({
    form: 'registration',
    validate
})(Registration))