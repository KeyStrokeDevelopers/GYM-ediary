import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import styled, { css } from 'styled-components'
import { number, validate } from '../Helper/formValidation'
import { renderTextField } from '../Helper/formField'
import { tableData } from './dummyData'
import colors from '../Common/color'
import Table from '../Helper/table'

const { BLUE_1, BLUE_2, GRAY_2, WHITE_1, RED_1, GREEN_1 } = colors

const Container = styled.div`
    width: 100%;
`
const PackageContainer = styled.div`
    width:100%;
     display: flex;
    @media (max-width: 600px) {
        flex-direction: column;
    }
     .MuiFormControl-root {
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
const PackageForm = styled.form`
    width: 100%;
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
const SaveButton = styled.button`
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
const CommonButtonCss = css`
    border: none;
    color: ${WHITE_1};
    border-radius: 20px;
    padding: 5px 10px;
    font-weight: bold;
`
const Active = styled.button`
    ${CommonButtonCss};
    background-color: ${GREEN_1};
`
const DeActive = styled.button`
    ${CommonButtonCss};
    background-color: ${RED_1};
`

const columns = [
    {
        title: 'Name',
        field: 'name'
    },
    {
        title: 'Details',
        field: 'details',
    },
    {
        title: 'Duration',
        field: 'duration'
    },
    {
        title: 'Price',
        field: 'price'
    },
    {
        title: 'Status',
        field: 'status',
        render: rowData => {
            return rowData.status === 'Active' ? <Active>{rowData.status}</Active> :
                <DeActive>{rowData.status}</DeActive>
        }
    }
];

class Package extends Component {

    handlePackage = (packageData) => {
        console.log('form data-------', packageData)
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props
        return (<Container>
            <Title>All Packages</Title>
            <PackageContainer>
                <PackageForm onSubmit={handleSubmit((packageData) => this.handlePackage(packageData))} >
                    <FieldRow>
                        <FieldColumnF>
                            <Field
                                name='name'
                                component={renderTextField}
                                label='Package Name e.g. "Monthly, Yearly"' />
                        </FieldColumnF>
                        <FieldColumn>
                            <Field
                                name='details'
                                component={renderTextField}
                                label='Package Details-"If Any"' />
                        </FieldColumn>
                    </FieldRow>
                    <FieldRow>
                        <FieldColumnF>
                            <Field
                                name='duration'
                                component={renderTextField}
                                label='Duration Months- "1,12"'
                                validate={number} />
                        </FieldColumnF>
                        <FieldColumn>
                            <Field
                                name='price'
                                component={renderTextField}
                                label='Price- "1000, 3000"'
                                validate={number} />
                        </FieldColumn>
                    </FieldRow>
                    <FieldRow>
                        <SaveButton type='submit' disabled={pristine || submitting} className='button'>
                            Save
			  			</SaveButton>
                    </FieldRow>
                </PackageForm>
            </PackageContainer>
            <Table columns={columns} data={tableData} />
        </Container>)
    }
}

export default withRouter(reduxForm({
    form: 'package',
    validate
})(Package))