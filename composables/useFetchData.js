export const useFetchData = (caller, opts) => {
    const config = useRuntimeConfig()
    return useFetch(caller.service, {
        baseURL: config.public.baseURL,
        onRequest({request, options}) {
            // Set the request headers
            options.headers = {token: caller.token}
        },
        onRequestError({request, options, error}) {
            // Handle the request errors
        },
        onResponse({request, response, options}) {
            caller.callBack(response)
            // Process the response data
            // return response._data
        },
        onResponseError({request, response, options}) {
            // Handle the response errors
        },
        ...opts
    })
}



