"use client";

import { useState } from 'react';
import { addDocument } from '../../lib/firebaseUtils';

interface IRegisterUserModalProps {
  onClose: () => void;
  score: number;
  module: string;
  setRefreshListUser: (value: boolean) => void;
}

function RegisterUserModal({ onClose, score, module, setRefreshListUser }: IRegisterUserModalProps): JSX.Element {

  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [isLoading, setIsloading] = useState(false);

  function handleNameChange(e: any) {
    setName(e.target.value);
  };

  function handleSchoolChange(e: any) {
    setSchool(e.target.value);
  };

  async function handleSubmit() {
    setIsloading(true)
    try {
      const documentId = await addDocument(module, { name, school, score });
      setRefreshListUser(true)
      console.log('Documento adicionado com sucesso. ID:', documentId);
    } catch (error) {
      console.error('Erro ao adicionar documento:', error);
    }
    setIsloading(false)
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-container bg-white w-96 mx-auto rounded shadow-lg">
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Preencha seu nome e escola</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              className="border border-gray-300 rounded w-full px-3 py-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="school" className="block text-sm font-medium text-gray-700">
              Escola:
            </label>
            <input
              type="text"
              id="school"
              name="school"
              value={school}
              onChange={handleSchoolChange}
              className="border border-gray-300 rounded w-full px-3 py-2 mt-1"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default RegisterUserModal;