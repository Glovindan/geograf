import { useState, useCallback } from 'react';
import axios from 'axios';

import { API_URL } from '../constants/constants';

export const useHttp = () => {
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const request = useCallback(async (
        url,
        method,
        headers,
        body
    ) => {
        try {
            setLoading(true);

            const res = await axios({
                method: method,
                url: API_URL + url,
                headers: {
                    ...headers
                },
                data: {
                    ...body
                }});

            if (res.statusText !== 'OK') {
                throw new Error('Произошёл сбой на сервере');
            }

            return {
                status: res.status,
                ...res.data
            };
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, [])

    return { request, loading, error }
}