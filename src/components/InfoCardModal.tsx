import Image, { StaticImageData } from 'next/image'

interface IInfoCardModalProps {
  title: string;
  image: StaticImageData;
  description: string;
  link?: string;
  conteudo: string;
}

function InfoCardModal({
  title,
  image,
  description,
  link,
  conteudo
}: IInfoCardModalProps): JSX.Element {
  return (
    <a href={link} className='hover:opacity-75'>
      <div className='rounded-b-3xl max-lg:mr-3 max-lg:ml-[0.1rem] max-w-[450px] max-lg:mx-auto h-auto bg-gray-50'>
        <div className=''>
          <Image
            src={image}
            alt=""
            className='w-full h-[180px] xl:h-[200px]'
          />
        </div>
        <div className='max-lg:h-[194px]'>
          <div className='grid grid-cols-1 md:gap-y-5 h-full text-left p-4 pt-7  leading-7'>
            <p className='text-xl text-slate-950 leading-relaxed max-xl:leading-5'>
              {title}
            </p>
            <div className='flex flex-col xl:pt-5 max-md:gap-5 max-xl:gap-3'>
              <div className='sm:mb-5'>
                <p className='text-justify'>
                  {description}
                </p>
              </div>
              <div className='sm:mb-5 text-purple-700'>{conteudo}</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default InfoCardModal;