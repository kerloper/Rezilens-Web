import {useFetch} from "nuxt/app";

export const useFetcher = (request, opts) => {
    const config = useRuntimeConfig()
    return useFetch(request, {
        baseURL: config.public.baseURL,
        onRequest({request, options}) {
            // Set the request headers
            // options.headers= {token:  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6InVzZXItYWNjZXNzLTMtN3l2OGhtbWswdnhlcXZneiIsInVpZCI6IjMiLCJpYXQiOjE2ODEzMDM1NTQsImV4cCI6MTY4MjUxMzE1NCwidHlwZSI6ImFjY2VzcyJ9.OPFl_4QYT2vKkQy2_el8x_v_tfBJjn_xdjZONxhAXOY'}

        },
        onRequestError({request, options, error}) {
            // Handle the request errors

        },
        onResponse({request, response, options}) {
            // Process the response data

            return response._data
        },
        onResponseError({request, response, options}) {
            // Handle the response errors

        },
        ...opts
    })
}