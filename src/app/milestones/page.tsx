import Image from 'next/image';
import Link from 'next/link';
import { headlineData } from '@/app/headline';

interface HeadlineProps {
  imageSrc: string;
  imageAlt: string;
  videoUrl: string;
  header: string;
  paragraph: string;
}


const Headline: React.FC<HeadlineProps> = ({ imageSrc, imageAlt, videoUrl, header, paragraph }) => {
  return (
    <div className=''>
      <Link href={videoUrl} passHref className="flex flex-col md:flex-row items-center justify-center bg-black text-white p-3"
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
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-5 md:py-21 p-4 hover:bg-gray-800 transition-colors duration-300">
          <h3 className="md:text-2xl text-xl font-semibold">{header}</h3>
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


const Milestone: React.FC = () => {
  return (
    <section className="bg-black pb-10 container">
      <div className=''>
        <Link href='/' className='mt-10'><span className='text-white text-2xl p-5 bg-[#333]'>&larr;</span></Link>
        <h2 className="text-center text-4xl font-bold md:pb-8 md:text-7xl bg-clip-text text-white bg-opacity-50 py-10">Milestones</h2></div>
      <div className="flex flex-col gap-4 justify-center w-full mb-6">
        {headlineData.map((data, index) => (
          <Headline
            key={index}
            imageSrc={data.imageSrc}
            imageAlt={data.imageAlt}
            videoUrl={data.videoUrl}
            header={data.header}
            paragraph={data.paragraph}
          />
        ))}
      </div>
    </section>
  );
}


export default Milestone;