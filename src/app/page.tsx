import ptBr from 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
import Image from 'next/image'
import rede from '../assets/rede.jpg'
import Link from 'next/link'


dayjs.locale(ptBr)
export default async function Home() {
  return (
    <main className='bg-white_100 h-screen w-screen overflow-x-hidden'>
      <div className='pt-7'>
        <div className="container w-full h-auto grid max-sm:flex gap-y-[4%] object-cover grid-cols-2 max-sm:flex-col m-auto">
          <div className='flex flex-col max-sm:order-1 xl:w-[82%] max-sm:px-7 px-28 justify-end relative  items-start  overflow-hidden pb-6'>
            <h1 className='pb-6 text-5xl font-bold leading-tight'>
              Aprenda redes de forma descontraída!
            </h1>
            <p className='text-lg leading-relaxed pb-7'>
              Nossos materiais são elaborados por especialistas na área,
              mas buscamos evitar linguagem técnica excessiva,
              tornando os conceitos compreensíveis e aplicáveis
              ao cotidiano. Acreditamos que o aprendizado pode ser divertido e estimulante,
              e é por isso que incorporamos elementos interativos, como quizzes,
              para envolver os alunos de forma ativa em sua jornada de conhecimento.
            </p>
            <Link
              href="/contents"
              className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
            >
              Comece a explorar
            </Link>
          </div>
          <div className="flex items-center">
            <Image
              src={rede}
              alt=""
              className="flex bg-no-repeat object-cover w-full md:w-80% xl:w-full justify-end max-sm:order-2 row-span-2"
            />
          </div>

        </div>
      </div>
    </main>
  )
}
