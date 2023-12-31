"use client";

import QuestionCardModal from '@/components/QuestionsCardModal'
import pedroImage from '../../../assets/pedro.png'
import Image from 'next/image'
import pedroEntusiasmado from '../../../assets/pedroEntusiasmado.png'
import personagem2Entusiasmado from '../../../assets/personagem2Entusiasmado.png'
import personagem3Entusiasmado from '../../../assets/personagem3Entusiasmada.png'
import personagem2Falando from '../../../assets/personagem2Falando.png'
import personagem3Falando from '../../../assets/personagem3Falando.png'
import personagem4 from '../../../assets/personagem4.png'
import professorData from '../../../assets/professorData.png'
import { useState } from 'react'
import RegisterUserModal from '@/components/RegisterUserModal';
import SideMenuModal from '@/components/SideMenuModal';
import RankingModal from '@/components/RankingModal';

export default function introdução() {
  const questionList = [
    {
      case: 'Qual é o marco histórico discutido na apresentação do Professor Doutor Data?',
      options: ['A invenção do primeiro telefone', 'O desenvolvimento do primeiro sistema operacional', 'A criação da ARPANET, a precursora da internet',
        'A descoberta da eletricidade'],
      answerIndex: 2,
    },
    {
      case: 'Na simulação do modelo de comunicação, qual é o papel dos repetidores?',
      options: ['Converter dados analógicos em digitais', 'Amplificar o sinal para estender a distância da transmissão', 'Criar endereços IP para os dispositivos conectados', 'Autenticar os dispositivos na rede'],
      answerIndex: 1,
    },
    {
      case: 'No contexto da simulação, qual é a função dos comutadores e roteadores?',
      options: ['Criar backups dos dados transmitidos', 'Armazenar informações de login dos usuários', 'Controlar o tráfego de rede e encontrar o melhor caminho para os dados', 'Garantir a segurança da conexão sem fio'],
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
    <div className="flex-1 flex-col gap-4 p-10 my-0 mx-auto flex">
      <section className='flex'>
        <div className='w-[20%] pt-11'>
          <SideMenuModal openRankingModal={setRakingModalIsOpen} />
        </div>
        <div className='w-[60%] pt-8'>
          <div className='mb-10 text-5xl font-bold leading-tight'>
            <h1>Magia Digital: A Jornada de Pedro por Cyberland</h1>
          </div>
          <div className='text-justify'>
            <p>
              Era uma vez uma cidade chamada Cyberland, um lugar onde a magia da tecnologia conectava todas as pessoas em um mundo interconectado.
              Naquela cidade, os estudantes do primeiro ano do ensino médio frequentavam a renomada escola "TechEd",
              conhecida por seu pioneirismo em usar tecnologia para aprimorar a educação.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={pedroImage}
                alt=""
                className='w-16 h-16'
              />
              <p>
                Pedro é um jovem curioso e entusiasmado por aprender sobre comunicação de dados e tecnologia.
                Certo dia, ao chegar à escola, Pedro foi surpreendido com uma apresentação especial do Professor Doutor Data, um renomado
                especialista em redes de comunicação de dados.
              </p>
            </div>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={professorData}
                alt=""
                className='w-20 h-20 mr-1'
              />
              <p>
                Professor Doutor Data: Bem-vindos, jovens ávidos por conhecimento!
                Hoje, embarcaremos juntos em uma emocionante jornada pela história da Internet.
              </p>
            </div>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={pedroEntusiasmado}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Pedro: Mal posso esperar, Professor Data!
              </p>
            </div>
            <br />
            <p>
              O Professor Doutor Data levou os alunos a uma viagem no tempo, transportando-os para o ano de 1960,
              quando o Departamento de Defesa dos Estados Unidos criou a ARPANET, a primeira rede de computadores interligada.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={personagem3Entusiasmado}
                alt=""
                className='w-16 h-16'
              />
              <p>
                Alunos: Uau!
              </p>
              <Image
                src={personagem2Entusiasmado}
                alt=""
                className='w-20 h-20'
              />
            </div>
            <br />
            <p>
              Pedro e seus colegas ficaram fascinados ao ver como a ARPANET evoluiu para a Internet que conhecemos hoje,
              uma rede global que conecta bilhões de pessoas em todo o mundo.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={professorData}
                alt=""
                className='w-20 h-20 mr-1'
              />
              <p>
                Professor Doutor Data: Agora, para compreender melhor como a comunicação de dados funciona,
                imaginem cada camada do modelo como um andar de um prédio.
                As informações são processadas e passam de um andar para o outro até chegarem ao destino desejado.
              </p>
            </div>
            <br />
            <p>
              Para tornar a explicação mais interativa, o professor convida os alunos a participarem de um emocionante jogo de simulação.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={professorData}
                alt=""
                className='w-20 h-20 mr-1'
              />
              <p>
                Professor Doutor Data: Cada um de vocês representará um dispositivo de rede. Trabalhem em equipe para transmitir uma mensagem
                misteriosa do prédio da escola para um prédio vizinho.
              </p>
            </div>
            <br />
            <p>
              Pedro estava animado por assumir o papel de cliente na simulação proposta pelo Professor Doutor Data.
              Ele imaginava-se como um explorador de dados, pronto para enviar uma mensagem importante para o prédio vizinho, representado por um dos colegas.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={professorData}
                alt=""
                className='w-20 h-20 mr-1'
              />
              <p>
                Professor Doutor Data: Muito bem, Pedro! Sua missão é enviar esta mensagem (entrega um pequeno envelope imaginário) ao prédio vizinho.
                Vocês, servidores, repetidores, comutadores e roteadores, estarão trabalhando juntos para garantir que a mensagem chegue ao seu destino.
              </p>
            </div>
            <br />
            <p>
              Os colegas de Pedro se posicionaram estrategicamente pelo caminho imaginário que a mensagem deveria percorrer.
              Alguns assumiram o papel de servidores, prontos para fornecer informações, enquanto outros se tornaram repetidores,
              responsáveis por amplificar o sinal da mensagem para que ela alcance distâncias maiores.
            </p>
            <br />
            <p>
              Havia também os comutadores, que agiam como direcionadores de tráfego, escolhendo o melhor caminho para a mensagem seguir,
              e os roteadores, encarregados de determinar a rota mais eficiente para que a mensagem chegasse ao prédio vizinho.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={pedroImage}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Pedro: Vamos lá, pessoal! Temos uma mensagem importante para entregar.
                Com certeza conseguiremos!
              </p>
            </div>
            <br />
            <p>
              Os dispositivos de rede começaram a colaborar, trabalhando em harmonia para transmitir a mensagem.
              Pedro enviou a mensagem para o primeiro servidor, que a recebeu prontamente e a repassou para o repetidor mais próximo.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={personagem3Falando}
                alt=""
                className='w-20 h-20'
              />

              <p>
                Servidor 1: Recebendo a mensagem! Repassando ao repetidor!
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
                Repetidor 1: Recebido! Amplificando o sinal e enviando ao comutador!
              </p>
            </div>
            <br />
            <p>
              A mensagem percorreu o caminho, passando de dispositivo para dispositivo, enquanto o Professor Doutor Data explicava o papel de cada
              um deles na comunicação de dados.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={professorData}
                alt=""
                className='w-20 h-20 mr-1'
              />
              <p>
                Professor Doutor Data: Vocês estão fazendo um excelente trabalho! Os servidores garantem que a mensagem seja tratada e processada,
                os repetidores fortalecem o sinal para que ele possa atravessar grandes distâncias e os comutadores direcionam o
                tráfego de forma inteligente.
              </p>
            </div>
            <br />
            <p>
              Pedro sentiu a empolgação de aprender na prática como os dispositivos de rede colaboravam para tornar a comunicação eficiente.
              Ele admirava a maneira como todos os elementos trabalhavam juntos, como uma verdadeira equipe, para cumprir a missão.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={pedroEntusiasmado}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Pedro: É incrível como cada dispositivo tem um papel fundamental nesse processo.
                Estamos mais fortes quando trabalhamos juntos!
              </p>
            </div>
            <br />
            <p>
              Finalmente, a mensagem chegou ao último roteador, que identificou o caminho mais
              rápido e seguro para alcançar o prédio vizinho.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={personagem4}
                alt=""
                className='w-20 h-20'
              />
              <p>
                Roteador 2: Recebendo a mensagem! Encaminhando ao prédio vizinho!
              </p>
            </div>
            <br />
            <p>
              A mensagem chegou ao prédio vizinho e foi entregue com sucesso,
              desencadeando um sentimento de satisfação e realização em Pedro e seus colegas.
            </p>
            <br />
            <div className='md:flex items-center'>
              <Image
                src={professorData}
                alt=""
                className='w-20 h-20 mr-1'
              />
              <p>
                Professor Doutor Data: Parabéns, jovens! Vocês entenderam a importância da colaboração entre os dispositivos de rede.
                Assim como nesta simulação, a comunicação de dados é uma jornada de cooperação para alcançar resultados notáveis.
              </p>
            </div>
            <br />
            <p>
              Pedro sentiu-se inspirado por essa experiência única de aprendizado.
              Ele percebeu que, assim como os dispositivos de rede, cada pessoa tinha um papel
              importante no mundo interconectado em que viviam.

              A simulação terminou, mas a lição ficou gravada em suas mentes. A partir desse dia, Pedro e seus colegas valorizaram ainda
              mais a importância da tecnologia e da colaboração para construir um futuro melhor e mais conectado em Cyberland.
              E, em todas as suas futuras aventuras no mundo da tecnologia, eles lembrariam com carinho daquele dia especial com o
              Professor Doutor Data.
            </p>
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
              module={'scoreM1'}
              setRefreshListUser={setRefreshListUser} /> : ''}
          <RankingModal
            isOpen={rakingModalIsOpen}
            onRequestClose={() => setRakingModalIsOpen(false)}
            module={'scoreM1'}
            refreshListUser={refreshListUser}
            setRefreshListUser={setRefreshListUser}
          />
        </div>
        <div className='w-[20%]'></div>
      </section>
    </div>
  )
}
