import {useState} from "react";
//hook который предоставляет обработку индикации загрузки
// и обработку ошибки какого-то запроса на получение данных
export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try{
            setIsLoading(true)
            await callback()
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error];
}