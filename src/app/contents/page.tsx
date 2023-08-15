import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import InfoCardModal from '@/components/InfoCardModal'
import mago from '../../assets/mago.svg'
import rede from '../../assets/rede.jpg'

export default function Matters() {
  return (
    <div className="flex-1 flex-col gap-4 p-10">
      <Link
        href="/"
        className="houver:text-gray-100 flex items-center gap-1 text-sm text-gray-200"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à home
      </Link>

      <div className='container max-sm:px-7 px-14 max-md:pt-16 pt-8'>
        <div className='w-full items-center justify-center md:flex'>
          <div className='w-full'>
            <div className='justify-center md:justify-start'>
              <h1 className="text-5xl font-bold mb-4">
                Conteúdos
              </h1>

              <div className='flex gap-3 justify-between'>
                <InfoCardModal
                  title='Magia Digital: A Jornada de Pedro por Cyberland'
                  image={mago}
                  description='Pedro, o jovem curioso de Cyberland, embarca em uma incrível jornada pela magia da tecnologia! 
                  Acompanhe-o enquanto descobre os segredos da comunicação de dados com a ajuda do enigmático Professor Doutor Data. 
                  Uma história repleta de aventuras, descobertas e trabalho em equipe, mostrando como a tecnologia conecta o mundo
                  de forma surpreendente!'
                  link='/contents/introduction-networks'
                  conteudo='Fundamentos de Redes'
                />
                <InfoCardModal
                  title='Introdução a redes de computadores'
                  image={rede}
                  description='testeando'
                  conteudo='teste'
                />
                <InfoCardModal
                  title='Introdução a redes de computadores'
                  image={rede}
                  description='testeando'
                  conteudo='teste'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
