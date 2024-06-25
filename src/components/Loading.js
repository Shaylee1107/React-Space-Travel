import React from 'react';
import '../css/Loading.css';

const Loading = () => {
    return (
        <div className="loading">
         <i className="fas fa-4x fa-spinner fa-spin" />
         <p>Loading...</p>
       </div>
      )
}

export default Loading;