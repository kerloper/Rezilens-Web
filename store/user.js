import {defineStore} from "pinia";
import axios from "axios";
import {navigateTo, useCookie} from "nuxt/app";
import {ref} from "vue";

export const useUserStore = defineStore("user", {
    state: () => ({
        /* User */
        user: null,
        isLogin: false,
        userAvatar: null,
        accessToken: "",
        auth: ref(useCookie('auth')),
        /* Field focus with ctrl+k (to register only once) */
        isFieldFocusRegistered: false,

    }), actions: {
        setUser(payload) {
            if (payload.user) {
                this.user = payload.user;
                this.accessToken = payload.user.access_token;
            }
            if (payload.isLogin) {
                this.isloginn = payload.isLogin;
            }
            if (payload.userAvatar) {
                this.userAvatar = payload.userAvatar;
            }
            this.auth = payload
        }, fetch() {

        },
    },
});
