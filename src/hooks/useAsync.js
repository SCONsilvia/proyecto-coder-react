import {useState, useEffect} from "react";

export const useAsync = (asyncFn, depedencias = []) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    
    useEffect(() => {
        setLoading(true);
        asyncFn().then(reponse => {
            setData(reponse);
        }).catch(error => {
            setError(error);
        }).finally(() => {
            setLoading(false);
        })

    },depedencias);

    return {
        data,
        loading,
        error
    }
}