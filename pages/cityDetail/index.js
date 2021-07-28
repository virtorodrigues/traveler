import React, { useCallback } from 'react';
import Card from '../../components/cards/CardCity';
import Header from '../../components/Header';
import Image from 'next/image';

const CityDetail = () => {

  const CardInformation = useCallback(({ img, description, number }) => (
    <div className="w-32 border rounded-2xl bg-white">
      <div className="p-4 flex">
        <Image
          src={`/../public/${img}.svg`}
          alt="My Image"
          width={30}
          height={30}
        />
      </div>
      <div className="p-4 text-left border-t">
        <strong className="font-bold text-gray-800 text-2xl">{number}</strong>
        <p className="text-gray-500 font-medium text-xs pt-2">{description}</p>
      </div>
    </div>
  ), []);

  const CardTopAvaliation = useCallback(({ img, description, number, icon }) => (
    <div className="relative pt-4">
      <div className="w-56 border rounded-2xl overflow-hidden bg-white">
        <div className="rounded-md absolute top-0 left-5 z-50 bg-orange-600 p-3 text-white gap-1 flex flex-col items-center">
          <div className="flex">
            <Image
              src={'/../public/star.svg'}
              alt="My Image"
              width={15}
              height={15}
            />
          </div>
          <p className="text-sm font-medium">5,0</p>
        </div>
        <Image
          src={'/../public/florianopolis.svg'}
          alt="My Image"
          width={300}
          height={200}
        />
        <div className="w-full flex flex-col text-left">
          <strong className="text-primary font-semibold text-md p-4 border-b">Florianópolis</strong>
          <div className="flex justify-between p-4">
            <p className="text-primary font-medium text-xs">13 locais</p>
            <Image
              src={`/../public/${icon}.svg`}
              alt="My Image"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  ), []);

  return (
    <>
      <Header />

      <header className="w-full bg-blue-200">
        imagem
      </header>

      <section className="flex justify-center p-10">
        <div className="max-w-screen-lg w-full">
          <div className="flex">
            <div className="mr-20">
              <h1 className="text-3xl font-bold text-primary">Florianópolis</h1>
              <h2 className="text-sm font-semibold text-primary py-5">Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.</h2>
              <h3 className="text-xs font-medium text-primary">É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.</h3>
            </div>
            <aside className="flex gap-5">
              <CardInformation img={'photo'} description={'Pontos Turísticos'} number={67} />
              <CardInformation img={'coffe'} description={'Comida e Bebida'} number={20} />
              <CardInformation img={'calendar'} description={'Eventos Organizados'} number={11} />
            </aside>
          </div>
        </div>
      </section>

      <section className="flex justify-center p-10">
        <div className="max-w-screen-lg w-full">
          <h1 className="text-3xl font-bold text-primary">Top avaliados</h1>

          <div className="flex gap-5 pt-7">
            <CardTopAvaliation img={'photo'} icon={'photo'} description={'Pontos Turísticos'} number={67} />
            <CardTopAvaliation img={'coffe'} icon={'coffe'} description={'Comida e Bebida'} number={20} />
            <CardTopAvaliation img={'calendar'} icon={'photo'} description={'Eventos Organizados'} number={11} />
            <CardTopAvaliation img={'calendar'} icon={'calendar'} description={'Eventos Organizados'} number={11} />
          </div>
        </div>
      </section>
    </>
  )
}

export default CityDetail;