// import {useState} from 'react'

const IconButton = ({onClick, icon, ...props}) => {
    return <div className='icon-button' onClick={onClick}>
        <i className={`fa ${icon}`}></i>
    </div>
}

export default IconButton