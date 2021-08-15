import React from 'react';
import Error404 from '../images/error404.svg'
function NotFound (){
    return (
        <div className="container text-center">

            <img className="img-fluid w-50" src={Error404} alt="error 404" />
        </div>
    )
}

export default NotFound;