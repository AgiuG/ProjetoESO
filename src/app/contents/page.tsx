import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import InfoCardModal from '@/components/InfoCardModal'
import capaModulo1 from '../../assets/capaModulo1.png'
import capaModulo2 from '../../assets/cordel-2.jpg'
import capaModulo3 from '../../assets/capaModulo3.jpg'

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

      <div className='max-sm:px-7 px-14 max-md:pt-16 pt-8'>
        <div className='items-center justify-center md:flex'>
          <div className=''>
            <div className='justify-center md:justify-start'>
              <h1 className="text-5xl font-bold mb-4">
                Conteúdos
              </h1>

              <div className='flex gap-10 justify-between'>
                <InfoCardModal
                  title='Magia Digital: A Jornada de Pedro por Cyberland'
                  image={capaModulo1}
                  description='Pedro, o jovem curioso de Cyberland, embarca em uma incrível jornada pela magia da tecnologia! 
                  Acompanhe-o enquanto descobre os segredos da comunicação de dados com a ajuda do enigmático Professor Doutor Data. 
                  Uma história repleta de aventuras, descobertas e trabalho em equipe, mostrando como a tecnologia conecta o mundo
                  de forma surpreendente!'
                  link='/contents/introduction-networks'
                  skillsList={['EF13COM201', 'EF15COCR201', 'EF13COM203']}
                />
                <InfoCardModal
                  title='Na Rota dos Bits: A Saga das Redes e os Protocolos, um Cordel Tecnológico!'
                  image={capaModulo2}
                  description='Este cordel combina poesia nordestina com a complexidade da comunicação digital, proporcionando uma viagem fascinante pelas entranhas da internet. Conheça heróis invisíveis como TCP, UDP e HTTP enquanto descobre como nossos dados são transmitidos com segurança e eficiência.'
                  skillsList={["EF69M11", "EF69M12", "EF69M17"]}
                  link='/contents/enlace'
                />
                <InfoCardModal
                  title='Os Hackers do Futuro e o Enigma DNS'
                  image={capaModulo3}
                  description='Em Cybertown, quatro jovens aventureiros decifram o enigma do DNS (Domain Name System), essencial para a internet. Navegando no "Domínio de Nomes," eles desvendam o DNS e encontram informações valiosas sobre a história da internet. Tornam-se os "Hackers do Futuro," celebrando sua amizade e conhecimento tecnológico. Destacando a importância do DNS, a história mostra como a curiosidade e a colaboração revelam segredos no mundo virtual.'
                  skillsList={["EM13COC06", "EM13COC04", "EM13COC03"]}
                  link='/contents/dns'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
