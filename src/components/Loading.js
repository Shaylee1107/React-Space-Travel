import React from 'react';
import '../css/Loading.css';
import LoadingContext from '../context/LoadingContext';

const Loading = () => {
    return (
        <div className="loading">
         <i className="fas fa-4x fa-spinner fa-spin" />
       </div>
      )
}

export default Loading;