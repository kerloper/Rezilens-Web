export const useSSRFetch = async (caller, opts) => {
    const config = useRuntimeConfig()

    // if (process.server) {
        const response = await fetch(`${config.public.baseURL}${caller.service}`, {
            method: opts.method || 'POST',
            headers: { token: caller.token },
            body: opts.body || null
        })

        const data = await response.json()
        caller.callBack(data)
        return { data } // Include the 'data' property in the return value
    // }

    // return {
    //     data: null // Return null or an initial value for 'data' on the client-side
    // }
}



