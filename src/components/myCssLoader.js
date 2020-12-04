import React from 'react';
import '../Styles/myLoaderStyles.css'
function MyCssLoader(props) {
    return (
        <div className="container">
            <div className="loader">
                <div className="loader--dot"></div>
                <div className="loader--dot"></div>
                <div className="loader--dot"></div>
                <div className="loader--dot"></div>
                <div className="loader--dot"></div>
                <div className="loader--dot"></div>
                <div className="loader--text"></div>
            </div>
        </div>


    );
}

export default MyCssLoader;