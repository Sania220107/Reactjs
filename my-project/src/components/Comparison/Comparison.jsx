import React from 'react'
import Laptop1 from '../../assets/Laptop1.png'
import Processor from '../../assets/Processor.png'
import Compact_disk from '../../assets/Compact_disk.png'

const ComparisonData=[
    {
        id:1,
        img:Laptop1,
        tittle:"Asus Zenbook Pro UX-430 US",
        img1:Processor,
        title:"Processor",
        subtitle:"Intel® Core™ i3 7100U Processor",
        img2:Compact_disk,
        judul:"Operating System",
        subjudul:"Windows 10 Pro for business",
    },
    {
        id:2,
        img:Laptop1,
        tittle: "Lenovo Legion Y545 2018",
        img2:Processor,
        title:"Processor",
        subtitle:"Intel® Core™ i3 7100U Processor",
        img1:Compact_disk,
        judul:"Operating System",
        subjudul:"Windows 10 Pro for business",
        
    },
    {
        id:3,
        img:Laptop1,
        tittle: "Acer Swift Air SF-313 51",
        img1:Processor,
        img2:Compact_disk,
        title:"Processor",
        subtitle:"Intel® Core™ i3 7100U Processor",
        judul:"Operating System",
        subjudul:"Windows 10 Pro for business",
    },
    {
        id:4,
        img:Laptop1,
        tittle: "Lenovo Thinkpad Y51 X1 2019",
        img1:Processor,
        title:"Processor",
        subtitle:"Intel® Core™ i3 7100U Processor",
        img2:Compact_disk,
        judul:"Operating System",
        subjudul:"Windows 10 Pro for business",
        
    }
]
const Comparison = () => {
  return (
    <section>
        <div>
            <div>
                <h1 className='text-lg font-semibold text-center px-3'>Compare the Product</h1>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-7'>
                {ComparisonData.map((compare) => (
                    <div>
                        <div className=' rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover: scale-110 duration-300 hover:shadow-2xl'>
                            <div>
                                <img src={Laptop1}/>
                                <p>{compare.tittle}</p>
                            </div>
                                <img src={compare.img1} />
                                <p>{compare.title}</p>
                                <p>{compare.subtitle}</p>
                                <hr className='border-gray-200 my-8' /> {/* Remove mx-auto */}
                                <img src={compare.img2}/>
                                <p>{compare.judul}</p>
                                <p>{compare.subjudul}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Comparison