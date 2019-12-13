import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'
import { validate, phoneNumber } from '../Helper/formValidation'
import { renderTextField, renderSelectField, renderDatePicker, renderToggleInput } from '../Helper/formField'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import colors from '../Common/color'
import 'react-toggle/style.css'
import "react-datepicker/dist/react-datepicker.css";

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
const EnquiryContainer = styled.div`
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
const EnquiryForm = styled.form`
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
const EnquiryButton = styled.button`
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

class Enquiry extends Component {

    handleEnquiry = (enquiryData) => {
        console.log('form data-------', enquiryData)
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props
        return (<Container>
            <MuiThemeProvider>
                <EnquiryContainer>
                    <Title>New Enquiry</Title>
                    <EnquiryForm onSubmit={handleSubmit((formData) => this.handleEnquiry(formData))} >
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
                                <Field
                                    name='response'
                                    component={renderTextField}
                                    label='Response e.g. - Call Me Later, Not interested'
                                    multiline
                                    rowsMax='4'
                                    margin='normal' />
                            </FieldColumn>
                        </FieldRow>
                        <FieldRow>
                            <FieldColumnF>
                                <Field
                                    name="followUp"
                                    component={renderToggleInput}
                                />
                            </FieldColumnF>
                            <FieldColumn id='follow'>
                                <Field
                                    name='followUpDate'
                                    floatingLabelText='Follow Up Date'
                                    component={renderDatePicker}
                                    DateTimeFormat={Intl.DateTimeFormat} />
                            </FieldColumn>

                        </FieldRow>
                        <div>
                            <Field
                                name='peferredBy'
                                component={renderTextField}
                                label='Peferred By' />
                        </div>
                        <FieldRow>
                            <EnquiryButton type='submit' disabled={pristine || submitting} className='button'>
                                Save
			  			    </EnquiryButton>
                        </FieldRow>
                    </EnquiryForm>
                </EnquiryContainer>
            </MuiThemeProvider>
        </Container>)
    }
}

export default withRouter(reduxForm({
    form: 'enquiry',
    validate
})(Enquiry))