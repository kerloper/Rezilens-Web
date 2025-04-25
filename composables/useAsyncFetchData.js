export const useAsyncFetchData = (caller, opts) => {
    const config = useRuntimeConfig()
    const token = caller.token;

    // Add the token to the request headers
    opts.headers = {
        ...opts.headers,
        token: token
    };
    return useAsyncData(
        caller.key,
        () => $fetch(config.public.baseURL + caller.service, opts),
        {
            transform: (tours) => {
                return tours.data.list
            }, watch: caller.watchData
        }
    )
}