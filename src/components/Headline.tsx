import Image from 'next/image';
import Link from 'next/link';


const headlineData = [
  {
    imageSrc: '/frosh_better_plan.webp',
    imageAlt: 'Better Plan Album cover',
    videoUrl: 'https://music.apple.com/us/album/better-plan-single/1802074548',
    header: 'Better Plan - Single',
    paragraph: 'AFRO-POP - 2025, March 27, 2025',
  },
  {
    imageSrc: '/frosh.webp',
    imageAlt: 'Remedy Song cover',
    videoUrl: 'https://youtu.be/J2xFSYYobfM?si=h-TjD-dJEizHFF4j',
    header: 'Remedy',
    paragraph: 'Remedy is a music that resonates with any audience. It is a tool that inspires change, promote social justice, and bring awareness to important causes.',
  },
  {
    imageSrc: '/frosh_pic.jpg',
    imageAlt: 'Over-Ten Song Cover',
    videoUrl: 'https://www.boomplay.com/songs/154564010',
    header: 'Over Ten',
    paragraph: 'OverTen is a music by Mr Frosh that also resonates with any audience. It inspires change, promotes social justice, and brings awareness to important causes.',
  },
  {
    imageSrc: '/ecious_pic_1.jpg',
    imageAlt: 'Descriptive alt text',
    videoUrl: 'https://youtu.be/Y2dwjDk7ruE?si=nIToIR6Y_f0pwp2V',
    header: 'HP',
    paragraph: 'HP is a music by Ecious that also resonates with any audience. It inspires change.',
  },
  {
    imageSrc: '/audiomack1.png',
    imageAlt: 'DYNA Music Video',
    videoUrl: 'https://www.youtube.com/watch?v=pUwDy_GHyRk',
    header: 'DYNA',
    paragraph: 'DYNA is a music by ERMA that also resonates with any audience. It inspires change, promotes social justice, and brings awareness to important causes.',
  },

]

interface HeadlineProps {
  imageSrc: string;
  imageAlt: string;
  videoUrl: string;
  header: string;
  paragraph: string;
}


const Headline: React.FC<HeadlineProps> = ({ imageSrc, imageAlt, videoUrl, header, paragraph }) => {
  return (
    <div>
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


const Headlines: React.FC = () => {
  return (
    <section className="bg-black my-6 pb-10">
        <h2 className="text-center text-4xl font-bold md:pb-8 md:text-7xl bg-clip-text text-white bg-opacity-50 py-10">Headline</h2>
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
export default Headlines;
