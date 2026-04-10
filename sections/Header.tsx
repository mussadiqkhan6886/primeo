import { syne } from '@/libs/fonts'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const nav = [
        {name: "About" ,link:"#about"},
        {name: "8-Layers" ,link:"#layers"},
        {name: "How it works" ,link:"#work"},
        {name: "Results" ,link:"#result"},
        {name: "Pricing" ,link:"#pricing"},
    ]
  return (
    <header className='w-full flex items-center justify-center  fixed mx-auto top-2'>
        <div className=' text-black bg-gray-50 rounded-full p-3 backdrop-blur-md  border-white shadow-md text-sm max-w-180 flex justify-between items-center w-180 px-10 gap-10 '>
            {/* logo */}
            <div>
                <h1 className={`${syne.className} font-semibold`}>PRIMEO</h1>
            </div>
            {/* Nav */}
            <nav>
                <ul className='flex gap-6 items-center'>
                    {nav.map(item => (
                        <li key={item.name}><Link href={item.link}>{item.name}</Link></li>
                    ))}
                </ul>
            </nav>
            {/* CTA */}
            <div>
                    <button className='border-dark hover:bg-gold transition-all duration-300 rounded-lg hover:text-white hover:border-transparent border p-2 py-1 cursor-pointer'>
                        Book a Call
                    </button>
            </div>
      </div>
    </header>
  )
}

export default Header
