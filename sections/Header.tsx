'use client';

import AwwwardsButton from '@/components/user/CTAButton';
import { syne } from '@/libs/fonts'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const nav = [
        { name: "About", link: "#about" },
        { name: "8-Layers", link: "#layers" },
        { name: "How it works", link: "#work" },
        { name: "Results", link: "#result" },
        { name: "Pricing", link: "#pricing" },
    ]

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY >= 10)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, []) 

    return (
        <header className='w-full flex items-center justify-center z-50 fixed mx-auto top-2'>
            <div className={`
                ${scrolled ? "w-[90%] md:w-[800px] bg-white/20" : "w-[95%] md:w-[750px] bg-white/20"} 
                transition-all duration-300 text-black rounded-full p-2 backdrop-blur-md 
                border border-white/20 shadow-md uppercase text-[12px] flex justify-between items-center px-10 gap-10
            `}>
                {/* Logo */}
                <div>
                    <h1 className={`${syne.className} font-semibold tracking-tight`}>PRIMEO</h1>
                </div>

                {/* Nav */}
                <nav className="hidden md:block">
                    <ul className='flex gap-6 items-center'>
                        {nav.map(item => (
                            <li key={item.name} className="hover:opacity-60 transition-opacity">
                                <Link href={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* CTA */}
               <AwwwardsButton />
            </div>
        </header>
    )
}

export default Header