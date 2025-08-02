'use client'

import Navbar from "@/components/Navbar";
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CldImage } from "next-cloudinary";

const artists = [
    {
        name: 'Gift Godwin',
        genre: 'Actress',
        image: 'Black_dress_2_gtned2',
        bio: 'Soulful acting, realistic storyteller. One to watch.',
        link: '/'
    },
    {
        name: 'Kitay',
        genre: 'Afro-Beat Artist',
        image: 'ogogoro_cover_art_rc9c3x',
        bio: 'Blending smooth hip-hop with a futuristic sound.',
        link: '/'
    },
    // Add more artists...
]


function NextUpPage() {
    return (
        <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Navbar
                scrollToFaq={() => { }}
                scrollToService={() => { }}
                scrollToHeadline={() => { }}
            />
                <main className="bg-black md:min-h-screen text-white px-6 md:px-12 py-20 md:mt-15">
                    <div className="container mx-auto">
                        <p className="text-gray-400 mb-12 text-lg">Upcoming artists you need to keep your eyes on.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {artists.map((artist, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                                >
                                    <div className="relative w-full h-64 overflow-hidden">
                                        <CldImage
                                            src={artist.image}
                                            alt={artist.name}
                                            fill
                                            sizes="100vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            style={{ backgroundPosition: 'center 30%'}}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-2xl font-semibold">{artist.name}</h2>
                                        <p className="text-sm text-gray-400 mb-2">{artist.genre}</p>
                                        <p className="text-base text-gray-300 mb-4">{artist.bio}</p>
                                        <Link href={artist.link} className="text-white hover:underline">
                                            See More &rarr;
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
    );
}

export default NextUpPage;