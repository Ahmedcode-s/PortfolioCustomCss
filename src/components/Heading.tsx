import React from 'react'
import "../app/styles/heading.css"
interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
    const [featured, project] = title.split(' ');
    return (
        <div className='heading-container' >
            <p className=' heading title '> <span className='text-[#ffff]'>{featured}</span>{' '}
            <span className=' text-[#e4c031]'>{project}</span> </p>
        </div>
    )
}

export default Heading
