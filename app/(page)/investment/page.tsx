import Image from 'next/image.js'
import React from 'react'
import Ime from '../../../public/Img.png'
import Card from '../../components/UI/Cart'
const page = () => {
  return (
    <>

    <>
    <div className="main w-full h-screen ">

      <div className=" w-full flex flex-col items-center ">
        <h2 className='font-bold text-[48px] text-[#292929e5] '>Offerings open for investment</h2>
        <p className='text-[#999999] text-[24px] '>Explore pre-vetted investment opportunities available in a growing number of industry categories.</p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-20 mt-20 ">

        <Card 
        Ime={Ime}
        title={"Oxalis"}
        subTitle={"Brooklyn, NY"}
        description={"A recognized leader in language immersion <br/> & early education, opening second school."}
        dullerPrice={"$574,920"}
        price={"raised of $1,000,000"}
        />
        <Card 
        Ime={Ime}
        title={"Oxalis"}
        subTitle={"Brooklyn, NY"}
        description={"A recognized leader in language immersion <br/> & early education, opening second school."}
        dullerPrice={"$574,920"}
        price={"raised of $1,000,000"}
        />
        <Card 
        Ime={Ime}
        title={"Oxalis"}
        subTitle={"Brooklyn, NY"}
        description={"A recognized leader in language immersion <br/> & early education, opening second school."}
        dullerPrice={"$574,920"}
        price={"raised of $1,000,000"}
        />
        <Card 
        Ime={Ime}
        title={"Oxalis"}
        subTitle={"Brooklyn, NY"}
        description={"A recognized leader in language immersion <br/> & early education, opening second school."}
        dullerPrice={"$574,920"}
        price={"raised of $1,000,000"}
        />
        <Card 
        Ime={Ime}
        title={"Oxalis"}
        subTitle={"Brooklyn, NY"}
        description={"A recognized leader in language immersion <br/> & early education, opening second school."}
        dullerPrice={"$574,920"}
        price={"raised of $1,000,000"}
        />
        <Card 
        Ime={Ime}
        title={"Oxalis"}
        subTitle={"Brooklyn, NY"}
        description={"A recognized leader in language immersion <br/> & early education, opening second school."}
        dullerPrice={"$574,920"}
        price={"raised of $1,000,000"}
        />

        
      
      </div>

    </div>
    </>
      
    </>
  )
}

export default page
