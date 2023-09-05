"use client";

import QuestionCardModal from '@/components/QuestionsCardModal'
import RankingModal from '@/components/RankingModal';
import RegisterUserModal from '@/components/RegisterUserModal';
import SideMenuModal from '@/components/SideMenuModal';
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react';

export default function Enlace() {
  const questionList = [
    {
      case: 'Qual é o objetivo principal do controle de fluxo em redes de computadores?',
      options: ['Aumentar a taxa de transmissão de dados', 'Evitar congestionamentos e garantir que o transmissor não sobrecarregue o receptor', 'Minimizar o atraso na transmissão de dados',
        'Melhorar a qualidade de vídeo em streaming'],
      answerIndex: 1,
    },
    {
      case: 'Nas redes de computadores, além da detecção e correção de erros, qual é outra função importante da camada de enlace de dados (Data Link Layer)?',
      options: ['Roteamento de pacotes', 'Controle de acesso ao meio', 'Formatação de páginas da web', 'Autenticação de usuários'],
      answerIndex: 1,
    },
    {
      case: 'Qual protocolo é amplamente usado para a entrega confiável de dados na Internet, garantindo que os dados cheguem ao destino na ordem correta?',
      options: ['HTTP', 'TCP', 'UDP', 'SMTP'],
      answerIndex: 1,
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
            <h1>Na Rota dos Bits: A Saga das Redes e os Protocolos, um Cordel Tecnológico!</h1>
          </div>
          <div >
            <p>
              Preste atenção pessoal, na historia que agora lhes digo,<br />
              Sobre protocolos e camadas, vou contar com afinco,<br />
              Aqui, na Enlace, onde a informação é transmitida,<br />
              E os objetivos são claros, a meta definida.
            </p>
            <br />
            <p>
              Na camada de Enlace, inicia nossa jornada,<br />
              Estabelecendo conexões, na rede tão aguardada,<br />
              Transferindo os dados com rapidez e destreza,<br />
              Detectando e corrigindo erros com firmeza.
            </p>
            <br />
            <p>
              Entre a Física e a Rede, ela faz sua morada,<br />
              Lidando com ligações ponto a ponto, sem parada,<br />
              Mas, se a mensagem não pertence a um deles, com certeza,<br />
              É na camada de Rede que encontra sua natureza.
            </p>
            <br />
            <p>
              Enquadramento é sua primeira função a realizar,<br />
              Delimitando o início e o fim, para não se atrapalhar,<br />
              Contagem de caracteres e preenchimento de bit,<br />
              Evitando confusões, garantindo o êxito do transmitir.
            </p>
            <br />
            <p>
              Controle de fluxo é essencial, sem dúvida,<br />
              Cadenciando a transmissão, com destreza aguçada,<br />
              Stop-and-Wait e Sliding-Window, estratégias a considerar,<br />
              Para que os dados fluam, sem problemas no ar.
            </p>
            <br />
            <p>
              Na detecção de erros, não podemos vacilar,<br />
              Códigos e técnicas para nos auxiliar,<br />
              Paridade, Checksum e CRC, a proteção a aumentar,<br />
              Garantindo a integridade, sem se preocupar.
            </p>
            <br />
            <p>
              Mas e se o erro persistir e a mensagem se perder?<br />
              Aí entra a correção, um recurso a se valer,<br />
              Códigos FEC e protocolos ARQ, a escolher,<br />
              Para garantir a comunicação, é o que vamos fazer.
            </p>
            <br />
            <p>
              No Stop-and-Wait, pacotes vão e esperam a resposta,<br />
              Se houver erro, reenviam, sem dar margem a desgosto,<br />
              Go-back-N e Selective-Reject, outras opções à vista,<br />
              Para assegurar a entrega, sem nenhum contratempo à vista.
            </p>
            <br />
            <p>
              O desempenho é crucial, não podemos ignorar,<br />
              Tempo de transmissão, capacidade a calcular,<br />
              É na camada de Enlace que tudo vai se concretizar,<br />
              Com protocolos e estratégias a nos guiar.
            </p>
            <br />
            <p>
              Assim, nesta jornada pelas camadas de rede,<br />
              A camada de Enlace é essencial, sem precedentes,<br />
              Com seus objetivos claros, a transmitir e a proteger,<br />
              Nas redes de computadores, sempre tão presentes.
            </p>
            <br />
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
              module={'scoreM2'}
              setRefreshListUser={setRefreshListUser} /> : ''}
          <RankingModal
            isOpen={rakingModalIsOpen}
            onRequestClose={() => setRakingModalIsOpen(false)}
            module={'scoreM2'}
            refreshListUser={refreshListUser}
            setRefreshListUser={setRefreshListUser}
          />
        </div>
        <div className='w-[20%]'></div>
      </section>
    </div>
  )
}
