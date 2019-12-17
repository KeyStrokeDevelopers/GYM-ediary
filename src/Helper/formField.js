
import React from 'react'
import TextField from '@material-ui/core/TextField'
import SelectField from 'material-ui/SelectField'
import DatePicker from 'material-ui/DatePicker'
import colors from '../Common/color'
import Toggle from 'react-toggle'

const { GRAY_2 } = colors

const renderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom} />
)

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
        style={{ width: '100%' }} />
)

const renderDatePicker = ({ input, label, meta: { touched, error }, ...custom }) => {
    return (
        <DatePicker
            onChange={(e, val) => { return input.onChange(new Date(val)) }}
            {...custom}
            value={input.value}
            style={{ width: '100%' }}
        />
    );
}

const UploadFile = ({ input: { value: omitValue, ...inputProps }, meta: omitMeta, ...props }) => (
    <input type='file' {...inputProps} {...props} />
);

const renderToggleInput = (field) => {
    return (
        <div>
            <div style={{ color: GRAY_2, marginTop: '14px' }}>
                Follow Up eg. "YES/NO" - If YES Then Choose Date
        </div>
            <div style={{ textAlign: 'center', marginTop: '5px' }}>
                <Toggle checked={Boolean(field.input.value)} onChange={field.input.onChange} icons={true} />
            </div>
        </div>
    )
};

export {
    renderTextField,
    renderSelectField,
    renderDatePicker,
    renderToggleInput,
    UploadFile
}