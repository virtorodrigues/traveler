import React from 'react';
import Image from 'next/image';
import Card from '../components/cards/CardCity';
import Header from '../components/Header';

const CityList = () => (
  <>
    <Header />

    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl w-full p-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary">Selecione uma cidade</h1>
        <div>
          <button className="mt-4 px-4 py-2 border-b-2 border-secondary font-bold text-primary hover:border-secondary">
            Todas
          </button>
          <button className="mt-4 px-4 py-2 border-b-2 border-gray-300 font-bold text-gray-300 hover:border-secondary">
            Mais acessadas
          </button>
          <button className="mt-4 px-4 py-2 border-b-2 border-gray-300 font-bold text-gray-300 hover:border-secondary">
            A - Z
          </button>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl p-10 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </>
)

export default CityList;