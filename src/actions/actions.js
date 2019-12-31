import * as types from '../constants/actionTypes.js'

export const enterUsername = username => ({
    type: types.ENTER_USERNAME,
    payload: username,
});

export const enterPassword = password => ({
    type: types.ENTER_PASSWORD,
    payload: password,
})

export const forgotPassword = () => ({
    type: types.FORGOT_PASSWORD,
    payload: forgotPassword,
})