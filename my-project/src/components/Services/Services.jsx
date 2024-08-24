import React from 'react'
import Tshirt from '../../assets/Tshirt.png'
import Phone from '../../assets/Phone.png'
import Notebook from '../../assets/Notebook.png'
import Not from '../../assets/Not.png'
import Camera from '../../assets/Camera.png'
import Chair from '../../assets/Chair.png'
import Dokter from '../../assets/Dokter.png'
import Ball from '../../assets/Ball.png'

const ServicesData=[
    {
        id: 1,
        title: "Fashion",
        body: "290K items",
        link: "#",
        img:Tshirt,
        delay: 0.2
    },
    {
        id: 2,
        title: "Handphone",
        body: "3M items",
        link: "#",
        img:Phone,
        delay: 0.3
    },
    {
        id: 3,
        title: "Laptop",
        body: "1.2M items",
        link: "#",
        img: Notebook,
        delay: 0.4
    },
    {
        id: 4,
        title: "Music",
        body: "751K items",
        link: "#",
        img:Not,
        delay: 0.5
    },
    {
        id: 5,
        title: "Photography",
        link: "#",
        body: "1.0M items",
        img:Camera,
        delay: 0.6
    },
    {
        id: 6,
        title: "Chair",
        body: "88K items",
        link: "#",
        img:Chair,
        delay: 0.7
    },
    {
        id: 7,
        title: "Healt",
        body: "761K items",
        link: "#",
        img:Dokter,
        delay: 0.8
    },
    {
        id: 8,
        title: "Sport",
        body: "2.9K items",
        link: "#",
        img:Ball,
        delay: 0.9
    }
]
const Services = () => {
  return (
    <section className='bg-white'>
        <div className="container pb-14 pt-16">
            <h1 className='text-4xl font-bold text-left pb-10'>Categories</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-8'>
                {ServicesData.map((service) => (
                    <div className=' rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover: scale-110 duration-300 hover:shadow-2xl'>
                        <div>
                            <img className='border text-4xl mb-4' src={service.img} />
                            <h1 className='text-lg font-semibold text-center px-3'>{service.title}</h1>
                            <h3 className='text-lg text-center'>{service.body}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            
    </section>
  )
}

export default Services