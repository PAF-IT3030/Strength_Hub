import axios from "axios";
import { API_BASE_URL, api } from "../../config/api";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "./auth.actionType";

export const loginUserAction = (loginData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData.data);

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }

        console.log("login success", data);
        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });

    } catch (error) {
        console.log("------", error);
        dispatch({ type: LOGIN_FAILURE, payload: error });
    }
};

export const registerUserAction = (registerData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, registerData.data);

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }

        console.log("register success!!!", data);
        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });

    } catch (error) {
        console.log("------", error);
        dispatch({ type: REGISTER_FAILURE, payload: error });
    }
};

export const updateProfileAction = (registerData) => async (dispatch) => {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    try {
        const { data } = await api.put(`${API_BASE_URL}/api/users/`, registerData.data);

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }

        console.log("update profile", data);
        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.jwt });

    } catch (error) {
        console.log("------", error);
        dispatch({ type: UPDATE_PROFILE_FAILURE, payload: error });
    }
};
