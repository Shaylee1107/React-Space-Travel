import React, {useState} from 'react';
import Index from '../index';
import LoadingContext from '../context/LoadingContext';

const LoadingWrapper = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);

    const toggleLoading = () => {
        setIsLoading(loading => !loading);
    }

    return (
        <>
         <LoadingContext.Provider value={{toggleLoading}}>
            {children}
         </LoadingContext.Provider>
        </>
    )
}

export default LoadingWrapper;