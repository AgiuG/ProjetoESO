"use client";

import QuestionCardModal from '@/components/QuestionsCardModal'
import pedroImage from '../../../assets/pedro.png'
import Image from 'next/image'
import pedroEntusiasmado from '../../../assets/pedroEntusiasmado.png'
import personagem3Entusiasmado from '../../../assets/personagem3Entusiasmada.png'
import personagem2Falando from '../../../assets/personagem2Falando.png'
import personagem3Falando from '../../../assets/personagem3Falando.png'
import personagem4 from '../../../assets/personagem4.png'
import personagem4duvida from '../../../assets/personagem4duvida.png'
import { useState } from 'react'
import RegisterUserModal from '@/components/RegisterUserModal';
import SideMenuModal from '@/components/SideMenuModal';
import RankingModal from '@/components/RankingModal';

export default function Dns() {
  const questionList = [
    {
      case: 'O que é o DNS (Domain Name System) e qual é o seu papel na rede?',
      options: ['É um sistema de busca na internet', 'É um protocolo de segurança online', 'É um sistema que traduz nomes de domínio em endereços IP',
        'É uma linguagem de programação para servidores web'],
      answerIndex: 2,
    },
    {
      case: 'Como o DNS (Domain Name System) ajuda na navegação na Internet?',
      options: ['Ele acelera a velocidade da conexão de Internet', 'Ele fornece segurança extra para os computadores', 'Ele traduz nomes de domínio em endereços IP, facilitando a localização de sites', 'Ele controla o acesso à web em todo o mundo'],
      answerIndex: 0,
    },
    {
      case: 'Por que é importante ter um sistema como o DNS na Internet?',
      options: ['Para criar jogos online', 'Para proteger contra vírus de computador', 'Para facilitar a comunicação entre dispositivos usando nomes em vez de endereços IP', 'Para acelerar a velocidade da Internet'],
      answerIndex: 2,
    },
  ];
  const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [scoreQuestion, setScoreQuestion] = useState<number>(0);
  const [rakingModalIsOpen, setRakingModalIsOpen] = useState<boolean>(false);
  const [refreshListUser, setRefreshListUser] = useState<boolean>(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex-1 flex-col gap-4 p-10 my-0 flex m-0">
      <section className='flex'>
        <div className='w-[20%] pt-11'>
          <SideMenuModal openRankingModal={setRakingModalIsOpen} />
        </div>
        <div className='w-[60%] pt-8'>
          <div className='mb-10 text-5xl font-bold leading-tight'>
            <h1>Os Hackers do Futuro e o Enigma DNS</h1>
          </div>
          <div className='text-justify'>
            <p>
              Na cidade futurista de Cybertown, quatro jovens destemidos se destacam!
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={pedroImage}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Pedro: Ei pessoal, olhem isso! Apareceu algo estranho no meu monitor.
              </p>
            </div>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={personagem2Falando}
                alt=""
                className='w-20 h-20'
              />
              <p>
                João: Estamos prontos para mais uma aventura?
              </p>
            </div>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={personagem3Falando}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Ana: Claro! Vamos descobrir o que está acontecendo.
              </p>
            </div>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={personagem4duvida}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Carlos: Isso parece muito antigo. O que será?
              </p>
            </div>
            <br />
            <p>
              Era um desafio que os levou ao passado da rede - o "DNS", ou Domain Name System.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={pedroEntusiasmado}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Pedro: Vamos investigar! Quem sabe o que vamos encontrar.
              </p>
            </div>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={pedroImage}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Pedro: Estou pesquisando sobre o DNS. Parece que é algo importante.
              </p>
            </div>
            <br />
            <p>
              O DNS era um mundo complexo, cheio de nomes e endereços.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={personagem2Falando}
                alt=""
                className='w-20 h-20 '
              />
              <p>
                João: Isso é como um labirinto virtual. Vamos explorar cada subdomínio.
              </p>
            </div>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={personagem3Falando}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Ana: Vamos por aqui. Quem sabe o que podemos encontrar.
              </p>
            </div>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={personagem4}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Carlos: Isso parece um código. Vamos decifrar!
              </p>
            </div>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={personagem2Falando}
                alt=""
                className='w-20 h-20'
              />
              <p>
                João: Cada subdomínio é como uma peça desse quebra-cabeça. Estamos chegando perto!
              </p>
            </div>
            <br />
            <p>
              As pistas os levaram a um enigma final.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={personagem3Entusiasmado}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Ana: Este enigma é desafiador, mas não vamos desistir.
              </p>
            </div>
            <br />
            <p>
              E eles descobriram um local real em sua cidade.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={pedroImage}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Pedro: Olhem! Há um cofre aqui. Será que é o nosso objetivo?
              </p>
            </div>
            <br />
            <p>
              ...uma chave USB com informações importantes sobre a história do desenvolvimento da rede mundial de computadores.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={personagem4}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Carlos: Parece que encontramos algo importante!
              </p>
            </div>
            <br />
            <p>
              Esta aventura fortaleceu ainda mais a amizade do grupo e os transformou em lendas da rede de Cybertown.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={personagem3Falando}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Ana: Somos os Hackers do Futuro!
              </p>
            </div>
            <br />
            <p>
              Eles perceberam que a tecnologia era uma jornada emocionante, cheia de mistérios a serem desvendados.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={personagem4}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Carlos: Continuaremos explorando e aprendendo!
              </p>
            </div>
            <br />
            <p>
              E assim, os "Hackers do Futuro" continuaram explorando os segredos da rede, sabendo que sempre haveria novas aventuras à espera deles.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={pedroEntusiasmado}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Pedro: Nosso próximo desafio nos aguarda!
              </p>
              <br />
            </div>
          </div>
          <div className="pt-4">
            <h1 className="text-2xl font-bold mb-4">Questões</h1>
            {questionList.map((question) => (
              <QuestionCardModal
                question={question}
                questionsAnswered={questionsAnswered}
                setQuestionsAnswered={setQuestionsAnswered}
                score={scoreQuestion}
                setScore={setScoreQuestion}
              />
            ))}
          </div>
          {questionsAnswered === questionList.length && isModalOpen === true
            ? <RegisterUserModal
              onClose={closeModal}
              score={scoreQuestion}
              module={'scoreM3'}
              setRefreshListUser={setRefreshListUser} /> : ''}
          <RankingModal
            isOpen={rakingModalIsOpen}
            onRequestClose={() => setRakingModalIsOpen(false)}
            module={'scoreM3'}
            refreshListUser={refreshListUser}
            setRefreshListUser={setRefreshListUser}
          />
        </div>
        <div className='w-[20%]'></div>
      </section >
    </div >
  )
}
