import React from 'react'
import Button from './Button'

const Card = ({ title, description, image }) => {
    return (
        <div className='h-[430px] w-[330px] relative rounded-2xl overflow-hidden  font-Noto shadow-lg bg-black hover:border-2 '>
            <img src={image} className='w-full h-full bg-contain bg-no-repeat ' />
            <div className='absolute  backdrop-blur-[3px] bg-[#2b2a2a70] top-0 flex flex-col items-start h-full p-2 w-full'>
                <div className='flex flex-col justify-evenly h-full'>
                    <h1 className='text-4xl text-left text-[#dfdddd]'>{title}</h1>
                    <p className='text-[#dadada] text-md text-left p-2'>{description}</p>
                    <hr className='mb-4 '/>
                </div>
                <div className='text-right w-full'>
                    <Button  title='Learn more' />
                </div>

            </div>
        </div>
    )
}

export default Card