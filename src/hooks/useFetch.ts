import AppError from '@/types/appError';
import { useEffect, useReducer, useRef } from 'react';

interface State<T> {
    data?: T;
    error?: AppError;
    status: 'loading' | 'refetching' | 'fetched' | 'error';
}

interface Return<T> extends State<T> {
    refetch: () => Promise<void>;
}

type Action<T> =
    | { type: 'loading' }
    | { type: 'refetching' }
    | { type: 'fetched'; payload: T }
    | { type: 'error'; payload: AppError };

export function useFetch<T = unknown>({ queryFn }: { queryFn: () => Promise<T | AppError> }): Return<T> {
    const cancelRequest = useRef<boolean>(false);

    const initialState: State<T> = {
        error: undefined,
        data: undefined,
        status: 'loading',
    };

    const fetchReducer = (prevState: State<T>, action: Action<T>): State<T> => {
        switch (action.type) {
            case 'loading':
                return { ...initialState, status: 'loading' };
            case 'refetching':
                return { ...initialState, status: 'refetching', data: prevState.data };
            case 'fetched':
                return { ...initialState, status: 'fetched', data: action.payload };
            case 'error':
                return { ...initialState, status: 'error', error: action.payload };
            default:
                return prevState;
        }
    };

    const [state, dispatch] = useReducer(fetchReducer, initialState);
    const fetchData = async (): Promise<void> => {
        dispatch({ type: state.data ? 'refetching' : 'loading' });
        try {
            const response = await queryFn();
            const data = response as T;
            if (cancelRequest.current) return;
            dispatch({ type: 'fetched', payload: data });
        } catch (error) {
            if (cancelRequest.current) return;
            dispatch({ type: 'error', payload: error as AppError });
        }
    };

    useEffect(() => {
        cancelRequest.current = false;
        fetchData();
        return () => {
            cancelRequest.current = true;
        };
    }, []);

    return { ...state, refetch: fetchData };
}
