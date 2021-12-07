import { useState, useCallback } from 'react';
import { API_URL } from '../constants/constants';

export const useHttp = () => {
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const request = useCallback(async (
        url,
        options
    ) => {
        try {
            setLoading(true);
            const res = await fetch(API_URL + url, options);
            if (!res.ok) {
                throw new Error('Произошёл сбой на сервере');
            }
            const json = await res.json();

            return json;
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, [])

    return { request, loading, error }
}