const validate = values => {
    const errors = {}
    const requiredFields = [
        'regNo',
        'pinNo',
        'userName',
        'password',
        'ownerName',
        'gymName',
        'address',
        'city',
        'state',
        'ownerContactNumber',
        'contactNumber',
        'email',
        'password',
        'confirmPassword'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    if (values.confirmPassword && values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Password does\'t match'
    }
    if (!values.followUpDate && values.followUp) {
        errors['followUpDate'] = 'Required'
    }
    return errors
}

const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Invalid phone number, must be 10 digits'
        : undefined

const pinNumber = value =>
    value && !/^(0|[1-9][0-9]{5})$/i.test(value)
        ? 'Invalid pin number, must be 6 digits'
        : undefined

const number = value => isNaN(value) ? 'Invalid input' : undefined


export {
    validate,
    phoneNumber,
    pinNumber,
    number
}