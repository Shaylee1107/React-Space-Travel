import React, {useState, useEffect} from 'react';
import LoadingContext from '../context/LoadingContext';
import Loading from '../components/Loading';
import { useCallback } from 'react';

const LoadingWrapper = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    console.log(isLoading, 'isLoading in loadingwrapper')

    const enableLoading = useCallback(() =>
    {
      setIsLoading(true);
    },
    []
);

const disableLoading = useCallback(() =>
     {
       setIsLoading(false);
     },
     []
);

    const showLoadingSign = () => {
        if(isLoading === true){
          return (
              <Loading />
          )
        }
    }

    return (
        <>
         <LoadingContext.Provider value={{isLoading, setIsLoading, showLoadingSign, disableLoading, enableLoading}}>
            {children}
         </LoadingContext.Provider>
        </>
    )
}

export default LoadingWrapper;