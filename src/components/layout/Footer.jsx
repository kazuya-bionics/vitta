import React from 'react'

export const Footer = () => {
  return (
    <div className='w-full bg-[#f2f2f2] py-12 px-8'>
        {/* top container */}
        <div className='flex flex-col gap-y-12 md:flex-row justify-between'>
            {/* left cont */}
            <div className='flex flex-col gap-y-4'>
                <h3 className='text-5xl'> Talk <span className='font-semibold'>with us</span></h3>
                <form className='flex w-full gap-x-2'>
                    <input type="email" placeholder='Your Email' className=' bg-black/60 text-white w-40 focus:bg-black/80 px-4 py-1 rounded-[45px]' />
                    <button type="submit" className='bg-black/60 px-4 py-1 text-white rounded-[45px]'>Contact</button>
                </form>
            </div>
            {/* right cont */}
            <div className='flex flex-col md:w-1/2 gap-y-4'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere commodi mollitia culpa, tempore dolorum ex, accusamus similique cupiditate hic corrupti ratione voluptatum eaque doloremque asperiores totam adipisci. Cupiditate, nesciunt neque!</p>
                <ul className='flex gap-x-4 mt-12 md:mt-0'>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
                </ul>
                <ul className='flex gap-x-4'>
                    <p className='border px-2'>Behance</p>
                    <p className='border px-2'>Linkedin</p>
                </ul>
            </div>
        </div>

        {/* vitta tittle and terms */}
        <div className='flex flex-col'>
            <h3 className='border-b-2 text-4xl md:text-[168px] leading-48 md:text-center font-medium'>WE ARE VITTA</h3>
            <div className='w-full mt-8 flex justify-between items-center'>
                <div>
                    2025 All rights reserved
                </div>
                <div className='flex gap-x-4'>
                    <h3>Terms of Service</h3>
                    <h3>Privacy Policy</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
