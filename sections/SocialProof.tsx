import CountUp from '@/components/ui/Count';
import { InfiniteMovingCards } from '@/components/ui/Loop'
import { bricolage, syne } from '@/libs/fonts';
import React from 'react'

const SocialProof = () => {
    const logos = [
        "Forbes", "LinkedIn", "HBR", "McKinsey", 
        "Wired", "TED", "Bloomberg", "Deloitte", 
        "Fortune", "Inc.", "The Economist", "MIT"
    ];

    const proof = [
        { heading: "Global Leaders Transformed", number: 40, suffix: "+" },
        { heading: "Client Satisfaction Rate", number: 5, suffix: "/5" },
        { heading: "Operational Countries", number: 12, suffix: "" },
    ];

    return (
        <section className='py-24 bg-black text-white overflow-hidden'>
            {/* 1. The Header: Minimalist & Wide */}
            <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Proof of Impact</span>
                    <h2 className={`${syne.className} font-bold text-5xl md:text-7xl tracking-tighter uppercase`}>
                        The Network.
                    </h2>
                </div>
                <p className="max-w-xs text-stone-500 text-sm leading-relaxed pb-2 border-l border-stone-800 pl-4">
                    Architecting presence for the world's most ambitious minds across the globe.
                </p>
            </div>

            {/* 2. The Infinite Loop: Full Width with Mask */}
            <div className="border-y border-white/5 py-10 mb-20 bg-stone-950/30">
                <InfiniteMovingCards items={logos} speed='slow' direction='left' />
            </div>

            {/* 3. The Stats: Architectural Layout */}
            <div className='max-w-7xl mx-auto px-6'>
                <div className='grid grid-cols-1 md:grid-cols-3 border-t border-white/10'>
                    {proof.map((item, idx) => (
                        <div 
                            className={`group p-10 flex flex-col gap-6 transition-colors duration-500 hover:bg-white/5
                                ${idx !== 2 ? "md:border-r border-white/10" : ""} 
                                border-b md:border-b-0 border-white/10`} 
                            key={idx}
                        >
                            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 group-hover:text-gold transition-colors">
                                {item.heading}
                            </p>
                            
                            <div className={`${syne.className} text-6xl md:text-8xl font-bold flex items-baseline tracking-tighter`}>
                                <CountUp
                                    from={0}
                                    to={item.number}
                                    separator=","
                                    direction="up"
                                    duration={2}
                                    className="text-white"
                                    startCounting={true}
                                />
                                <span className="text-gold ml-2 text-4xl">{item.suffix}</span>
                            </div>

                            <div className="w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-700 ease-in-out" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SocialProof