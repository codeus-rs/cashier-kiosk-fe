// import AppError from '@/types/appError';
import axios from 'axios';

// const shouldThrowError = (): boolean => {
//     const randomNumber = Math.floor(Math.random() * 3);
//     if (randomNumber === 1) return true;
//     return false;
// };
export const getCatFacts = async (): Promise<{ fact: string }> => {
    await new Promise((res) => setTimeout(res, 500));
    const response = await axios.get('https://catfact.ninja/fact');
    // if (shouldThrowError()) {
    //     const error: AppError = {
    //         errorCode: 'CAT_ERROR',
    //         message: 'Error occured while fetching fact',
    //     };
    //     throw error;
    // }
    return response.data;
};
