"use client";
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { getDocument } from '../../lib/firebaseUtils';
import { X } from 'lucide-react';

interface IRankingModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  module: string;
  refreshListUser: boolean;
  setRefreshListUser: (value: boolean) => void;
}


function RankingModal({
  isOpen,
  onRequestClose,
  module,
  refreshListUser,
  setRefreshListUser
}: IRankingModalProps): JSX.Element {
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [users, setUsers] = useState<any>()

  const filteredUsers = selectedSchool
    ? users.filter((user: any) => user.school === selectedSchool)
    : users;

  useEffect(() => {
    getListUser()
  }, [refreshListUser]);

  async function getListUser() {
    const users = await getDocument(module);
    setUsers(users);
    setRefreshListUser(false);
  }

  if (!users) {
    return <></>
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Classificação dos Usuários">
      <div className='flex justify-between'>
        <h2>Classificação dos Usuários</h2>
        <X className='cursor-pointer' onClick={onRequestClose} />
      </div>
      <label htmlFor="school">Filtrar por Escola:</label>
      <select
        id="school"
        onChange={(e) => setSelectedSchool(e.target.value || null)}
        value={selectedSchool || ''}
      >
        <option value="">Todas as Escolas</option>
        {users.map((user: any, index: number) => (
          <option value={user.school} key={index}>{user.school}</option>
        ))}
      </select>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="text-left">Nome</th>
            <th className="text-left">Pontos</th>
            <th className="text-left">Escola</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user: any, index: number) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.score}</td>
              <td>{user.school}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Modal>
  );
};

export default RankingModal;
