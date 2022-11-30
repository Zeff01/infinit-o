import React from 'react'
import Card from '../components/Card'
import DATA from '../sampledata'

const Index = () => {
    return (
        <div className=' text-white h-full w-full p-4 grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-2'>
            {DATA.map(data => {
                return <Card title={data.title} description={data.description} image={data.image} />
            })}

        </div>
    )
}

export default Index