import React from 'react';
import Index from '../index';
import LoadingContext from './context/LoadingContext';

const LoadingWrapper = () => {
    const [isLoading, setIsLoading] = useState(false);

    const toggleLoading = () => {
        setIsLoading(loading => !loading);
    }

    return (
        <>
         <LoadingContext.Provider value={toggleLoading}>
            <Index/>
         </LoadingContext.Provider>
        </>
    )
}

export default LoadingWrapper;