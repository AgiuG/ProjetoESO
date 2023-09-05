import { Trophy } from 'lucide-react';
import { FileQuestion } from 'lucide-react';
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

interface ISideMenuModalProps {
  openRankingModal: (value: boolean) => void;

}

function SideMenuModal({
  openRankingModal,

}: ISideMenuModalProps): JSX.Element {
  return (
    <div className='w-[16%] h-fit mr-5 bg-gray-50 fixed border'>
      <Link
        href="/contents"
        className="flex items-center gap-1 mt-2 mb-2 ml-2"
      >
        <ChevronLeft className="h-4 w-4" />
        <div className='font-bold'>Conteúdos</div>
      </Link>
      <a onClick={() => openRankingModal(true)}>
        <h3 className='pt-3 pl-2 flex gap-2 w-[100%] h-11 hover:bg-white hover:shadow-lg hover:cursor-pointer'>
          <Trophy className='block' />
          <div className='w-[100%] h-5 relative'>
            Ranking
          </div>
        </h3>
      </a>
      <hr />
      <a href={'/contents/introduction-networks/ranking'}>
        <h3 className='pt-3 pl-2 flex gap-2 w-[100%] h-11 hover:bg-white hover:shadow-lg hover:cursor-pointer'>
          <FileQuestion className='block' />
          <div className='w-[100%] h-5 relative'>
            Como usar?
          </div>
        </h3>
      </a>
    </div>
  )
}

export default SideMenuModal;