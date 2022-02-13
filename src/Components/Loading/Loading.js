import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Oval } from 'react-loader-spinner'
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading">
            <Oval
                type="Oval"
                color="rgb(0, 0, 0)"
                height={70}
                width={70}
            />
        </div>
    )
}

export default Loading
