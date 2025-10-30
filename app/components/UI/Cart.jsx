import Image from 'next/image.js'
import React from 'react'

const Card = ({Ime, title, subTitle, description, dullerPrice, price }) => {
  return (
    <>
    <div className="w-[370px] h-[500px] bg-[#ffffff62] shadow ">
          <Image src={Ime} alt='Image' />
          <div className=" text p-[24px] ">
          <h2 className='text-[24px] font-bold '> {title} </h2>
          <p className='text-[16px] font-medium text-[#999999] '> {subTitle} </p>

          <p className='text-[#333333] text-[16px] font-medium py-[24px] '> {description} </p>

          <div className="raised w-full ">

            <div className="h-[10px] w-full border border-[#128C76] ">
              <div className="h-full w-[60%] bg-[#128C76] "></div>
            </div>

            <div className="numbers w-full mt-[8px] ">
              <p className='text-[#595959] text-[16px] font-semibold '> <span className='text-[#128C76] '> {dullerPrice} </span> {price} </p>
            </div>

          </div>

        </div>
        </div>
    </>
  )
}

export default Card
