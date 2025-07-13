import Image from 'next/image';
import Link from 'next/link';
import { headlineData } from '@/app/headline'
import React from 'react';

interface HeadlineProps {
  imageSrc: string;
  imageAlt: string;
  videoUrl: string;
  header: string;
  paragraph: string;
}


const Headline: React.FC<HeadlineProps> = ({ imageSrc, imageAlt, videoUrl, header, paragraph }) => {
  return (
    <div className='h-full'>
      <Link href={videoUrl} passHref className="flex flex-col md:flex-row justify-center bg-black text-white p-3"
        target="_blank"
        rel="noopener noreferrer">
        <div className="w-full md:w-1/5">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={50}
          />
        </div>
        <div className="h-auto w-full md:w-1/2 mt-4 md:mt-0 md:pl-5 md:py-21 p-4 hover:bg-gray-800 transition-colors duration-300">
          <h3 className="md:text-3xl text-xl font-semibold">{header}</h3>
          <p className="mt-2">{paragraph}</p>
          <div className="mt-4 flex items-center group">
            <span className="text-lg font-medium">Listen Here</span>
            <span className="ml-2 transform transition-transform duration-300 group-hover:ml-4">
              &gt;
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};


const Headlines: React.FC = () => {
  return (
    <section className="bg-black pb-10">
      <div className="container mx-auto py-10">
      <h2 className="text-center text-4xl font-bold md:pb-8 md:text-7xl bg-clip-text text-white bg-opacity-50 py-10">Headline</h2>
      <div className="flex flex-col gap-4 justify-center w-full mb-6">
        {headlineData.slice(0,3).map((data, index) => (
          <Headline
            key={index}
            imageSrc={data.imageSrc}
            imageAlt={data.imageAlt}
            videoUrl={data.videoUrl}
            header={data.header}
            paragraph={data.paragraph}
          />
        ))}
        <Link href="/milestones" className='text-lg text-white text-center justify-center'><button className='hover:bg-white hover:text-black p-4 mt-10 bg-[gray] rounded-lg cursor-pointer'>View More</button></Link>
      </div>
      </div>
    </section>
  );

}
export default Headlines;
