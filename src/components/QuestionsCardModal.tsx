"use client";

import React, { useState } from "react";
import { Question } from "@/models/Question";
import checkIcon from "../assets/checkIcon.svg"
import closeIcon from "../assets/closeIcon.svg"
import Image from 'next/image'

interface IQuestionCardModalProps {
  question: Question;
}

function QuestionCardModal({
  question
}: IQuestionCardModalProps): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<number>();
  const [rigthResponse, setRigthResponse] = useState<boolean>(false);
  const [openResultModal, setOpenResultModal] = useState<boolean>(false);

  function handleOptionSelect(optionIndex: number) {
    setSelectedOption(optionIndex);
  };

  function handleAnswer(question: Question) {
    setOpenResultModal(true)
    if (selectedOption === question.answerIndex) {
      setRigthResponse(true)
    }
  }

  function decideHandleButton() {
    if (!openResultModal) {
      return (<button className="mx-auto mt-4 inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
        onClick={() => handleAnswer(question)}
      >
        Enviar
      </button>)
    }

    if (rigthResponse) {
      return (
        <div className="mx-auto mt-5">
          <Image
            src={checkIcon}
            alt=""
            className='mx-auto'
          />
          Correto
        </div>
      )
    }

    return (
      <div className="mx-auto mt-5">
        <Image
          src={closeIcon}
          alt=""
          className='mx-auto'
        />
        Incorreto
      </div>
    )
  }

  return (
    <div className="qa-panel">
      <div className='bg-gray-50 shadow-md p-6 mb-10'>
        <div className='top-5% mx-5'>
          {question.case}
          <hr className='mt-2' />
        </div>
        <div className="mt-2 top-5% mx-5 grid">
          {question.options.map((option, optionIndex) => (
            <label className='' htmlFor={option}>
              <div className="hover:bg-white hover:shadow-lg hover:cursor-pointer p-7 flex" >
                <input
                  type="radio"
                  name={'input'}
                  value={option}
                  id={option}
                  onChange={() => handleOptionSelect(optionIndex)}
                  className='hover:cursor-pointer'
                />
                <div className='ml-6 hover:cursor-pointer'> {option}</div>
              </div>
            </label>
          ))}
          {decideHandleButton()}
        </div>
      </div>
    </div >
  );
};

export default QuestionCardModal;