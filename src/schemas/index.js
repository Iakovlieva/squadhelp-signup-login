import * as yup from 'yup';

export const SCHEMA = yup.object({
    firstName: yup.string().required('Field cannot be empty'),
    lastName: yup.string().required('Field cannot be empty'),
    displayName: yup.string().required().min(5,'Display name should be more than 4 characters'),    
    email: yup.string().required().email('Please check the format of email address'),
    pass: yup.string().required('Password confirmation needs to match original password'),
    passConfirm: yup.string().required('Password confirmation needs to match original password')
    // joinUs: yup.string().required('Please specify whether you are a Creative or a Buyer')
})

export const SCHEMA_LOGIN = yup.object({ 
    email: yup.string().email('Email is not valid format').required('Email is not valid format'),
    pass: yup.string().required('Password cannot be empty')
})