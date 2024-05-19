import { useAuth } from '@/conntexts/AuthProvider';
import { getResError } from '@/utils/fetch';
import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

type IOpts = {
    onMount?: boolean;
    config?: AxiosRequestConfig;
}

export const useGet = <T>(url: string, opts?: IOpts) => {
    const { onMount = true } = opts ?? {};
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { AuthApi } = useAuth();

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await AuthApi?.get(url, opts?.config);
            // console.log(res?.data);
            setData(res?.data.data);
        } catch (error) {
            const err = getResError(error);
            console.log(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (onMount) {
            fetchData();
        }
    }, [url, onMount]);

    return { data, loading, error, getData: fetchData};
}