import React from "react";
import * as axios from "axios";

const istance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "api-key": "382e24bd-2b31-46df-863b-386fd7a617ca"
    }
    
})


const usersAPI = {
    getUsers(totalShowPage, currentPage) {
        return istance.get(`users?count=${totalShowPage}&page=${currentPage}`, )
            .then((response) => {
                return response.data;
            });
    },
    follow(userId) {
        return istance.post(`follow/${userId}`, )
    },
    unfollow(userId) {
        return istance.delete(`follow/${userId}`, )
    }

}
export const profileAPI = {
    getUserProfile(userId) {
        return istance.get(`profile/${userId}`)
    },
    getUserStatus(userId) {
        return istance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status) {
        return istance.put(`profile/status/`, {
            status: status
        })
    },
    putPhotoProfile(photo) {
        const formData = new FormData();
        formData.append("image", photo)
        return istance.put(`/profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    putProfileForm(profile){
        return istance.put(`profile/`, profile)
    }
}





export const authAPI = {
    me() {
        return istance.get(`auth/me`);
    },
    login(obj) {
        return istance.post(`/auth/login`, {
            email: obj.email,
            password: obj.password,
            rememberMe: obj.rememberMe = false,
            captcha: obj.captcha
        });
    },
    logout() {
        return istance.delete(`/auth/login`);
    },
    get_captcha(){
        return istance.get(`/security/get-captcha-url`);
    }
}

export default usersAPI;