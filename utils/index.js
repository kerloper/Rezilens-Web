import {api, fetchData} from "~/api/api";
import axios from "axios";
import {useUserStore} from "~/store/user";

export const getSavedItems = () => {

    let savedItems = null;
    try {
        savedItems = typeof window !== 'undefined' ?
            localStorage.getItem('savedItems') != null ? JSON.parse(localStorage.getItem('savedItems')) : null
            : null;
    } catch (error) {
        console.log(">>>> src/utils/index.js : getSavedItems -> error", error)
        savedItems = null;
    }
    return savedItems;
}

export const setSavedItems = (savedItems) => {
    try {
        if (savedItems) {
            localStorage.setItem('savedItems', JSON.stringify(savedItems))
        } else {
            localStorage.removeItem('savedItems');
        }
    } catch (error) {
        console.log(">>>> src/utils/index.js : setSavedItems -> error", error)
    }
}

export const getLatestItems = () => {
    let latestItems = null;
    try {
        latestItems = typeof window !== 'undefined' ?
            localStorage.getItem('latestItems') != null ? JSON.parse(localStorage.getItem('latestItems')) : null
            : null;
    } catch (error) {
        console.log(">>>> src/utils/index.js : getSavedItems -> error", error)
        latestItems = null;
    }
    return latestItems;
}

export const setLatestItems = (latestItems) => {
    try {
        if (latestItems) {
            localStorage.setItem('latestItems', JSON.stringify(latestItems))
        } else {
            localStorage.removeItem('latestItems');
        }
    } catch (error) {
        console.log(">>>> src/utils/index.js : setLatestItems -> error", error)
    }
}

export const getKnowItems = () => {
    let knowItems = null;
    try {
        knowItems = typeof window !== 'undefined' ?
            localStorage.getItem('knowItems') != null ? JSON.parse(localStorage.getItem('knowItems')) : null
            : null;
    } catch (error) {
        console.log(">>>> src/utils/index.js : getKnowItems -> error", error)
        knowItems = null;
    }
    return knowItems;
}

export const setKnowItems = (knowItems) => {
    try {
        if (knowItems) {
            localStorage.setItem('knowItems', JSON.stringify(knowItems))
        } else {
            localStorage.removeItem('knowItems');
        }
    } catch (error) {
        console.log(">>>> src/utils/index.js : setKnowItems -> error", error)
    }
}

export const getNextTripItems = () => {
    let nextTripItems = null;
    try {
        nextTripItems = typeof window !== 'undefined' ?
            localStorage.getItem('nextTripItems') != null ? JSON.parse(localStorage.getItem('nextTripItems')) : null
            : null;
    } catch (error) {
        console.log(">>>> src/utils/index.js : getNextTripItems -> error", error)
        nextTripItems = null;
    }
    return nextTripItems;
}

export const setNextTripItems = (nextTripItems) => {
    try {
        if (nextTripItems) {
            localStorage.setItem('nextTripItems', JSON.stringify(nextTripItems))
        } else {
            localStorage.removeItem('nextTripItems');
        }
    } catch (error) {
        console.log(">>>> src/utils/index.js : setNextTripItems -> error", error)
    }
}

/**
 * caller
 * Notice : for use this method , your page must have request object as :
 * 1- request: {fields:{},service:''}
 * 2- responseHandler(data) method
 * 3- errorHandler(error) method
 * @param request
 */
export const responder = (request) => {
    console.log(request);
    const userStore = useUserStore();
    const bodyFormData = new FormData();
    try {
        for (const key in request.fields) {
            bodyFormData.append(key, request.fields[key]);
        }
        api(axios, request.service, bodyFormData, userStore.isLogin ? userStore.auth.user.access_token : "").then(response => {
            request.callBack(response.data);
        }).catch(error => {
            request.error;
        })
    } catch (error) {
        console.log(error)
        request.error;
    }
}


/**
 * caller
 * Notice : for use this method , your page must have request object as :
 * 1- request: {fields:{},service:''}
 * 2- responseHandler(data) method
 * 3- errorHandler(error) method
 * @param request
 */
export const fetcher = async (request) => {
    try {
        const response = await fetchData(request.service, {
                method: 'POST',
            }
        );

        console.log(response.data.value.data);
    } catch (error) {
        request.error;
    }
}




export const uri = {
    dashboard: "public/content/dashboard/get",
    get: "public/content/item/get",
    list: "public/content/item/list",
    add_to_cart: 'content/cart/add',
    get_cart_list: 'content/cart/list',
    update_cart: 'content/cart/update',
    delete_cart: 'content/cart/delete',
    get_address_list: 'content/address/list',
    add_order: 'order/physical/create',
    get_order_list: 'order/physical/list',
    get_order_list_: 'content/order/list',
    get_order:'order/physical/get',
    get_payment_url:'order/payment/get',
    verify_payment:'order/payment/verify',
    verify_discount:'order/discount/verify',
    // product_detail:  "public/content/item/get",

    otp: "user/authentication/mobile/request",
    verify: "user/authentication/mobile/verify",
    support_list: "admin/content/support/list",
    tour_detail: "public/content/tourism/tour/get",
    tour_list: "public/content/tourism/tour/list",
    destination_detail: "public/content/tourism/destination/get",
    destination_list: "public/content/tourism/destination/list",
    blog: "public/content/item/get",
    item_list: "public/content/item/list",
    item: "public/content/item/get",
    main_data: 'public/content/tourism/main/data',
    update_profile: 'user/profile/update',
    logout: 'user/authentication/logout',
    reserve: 'order/reserve/create',
    reserve_list: 'order/reserve/list',


}