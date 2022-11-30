import React from 'react'

const Button = ({title}) => {
    return (
        <button className='text-white border-2 p-2 rounded-xl hover:scale-110 hover:text-[#e0c7c7] hover:border-[#e0c7c7]'>
            {title}
        </button>
    )
}

export default Button