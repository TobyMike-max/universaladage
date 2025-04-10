import Image from 'next/image';
import Link from 'next/link';


const headlineData = [
  {
    imageSrc: '/frosh_better_plan.webp',
    imageAlt: 'Better Plan Album cover',
    videoUrl: 'https://example.com/video.mp4',
    header: 'Better Plan',
    paragraph: 'This is a sample paragraph.',
  },
  {
    imageSrc: '/frosh.webp',
    imageAlt: 'Remedy Song cover',
    videoUrl: 'https://example.com/video.mp4',
    header: 'Remedy',
    paragraph: 'This is a sample paragraph.',
  },
  {
    imageSrc: '/frosh_pic.jpg',
    imageAlt: 'Over-Ten Song Cover',
    videoUrl: 'https://example.com/video.mp4',
    header: 'Over Ten',
    paragraph: 'This is a sample paragraph.',
  },
  {
    imageSrc: '/ecious_pic_1.jpg',
    imageAlt: 'Descriptive alt text',
    videoUrl: 'https://example.com/video.mp4',
    header: 'Sample Header',
    paragraph: 'This is a sample paragraph.',
  },
  {
    imageSrc: '/nazo2.jpg',
    imageAlt: 'Descriptive alt text',
    videoUrl: 'https://example.com/video.mp4',
    header: 'Sample Header',
    paragraph: 'This is a sample paragraph.',
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
        <Link href={videoUrl} passHref className="flex flex-col md:flex-row items-center bg-black text-white hover:bg-gray-800 transition-colors duration-300 p-6 rounded-lg"
            target="_blank"
            rel="noopener noreferrer">
            <div className="w-full md:w-1/4">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={50}
                className="rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-20">
              <h3 className="text-2xl font-semibold">{header}</h3>
              <p className="mt-2">{paragraph}</p>
              <div className="mt-4 flex items-center group">
                <span className="text-lg font-medium">Watch Video</span>
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
    <section className="bg-black my-6">
        <h2 className="text-center text-4xl font-bold md:pb-8 md:text-7xl bg-clip-text text-white bg-opacity-50 pt-10">Headline</h2>
    <div className="flex flex-col gap-8 justify-center w-full px-4 py-12">
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
