import React, { useCallback } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import TitleWithActions from '../components/TitleWithActions';

const PlaceDetail = () => {

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

  const CardServiceHour = useCallback(({ description, hour }) => (
    <div className="border rounded-xl bg-white p-5">
      <span className="block text-primary">{description}</span>
      <strong className="block pt-2 font-bold text-primary">{hour}</strong>
    </div>
  ), []);

  return (
    <>
      <Header />

      <section className="flex justify-center p-10">
        <div className="max-w-screen-lg w-full">
          <div className="flex">
            <div className="mr-20">
              <h1 className="text-3xl font-bold text-primary">Doce & Companhia</h1>
              <h2 className="text-sm font-semibold text-primary py-5">O melhor lugar da cidade para você tomar um bom café. Fatias de tortas artesanais, bolos, lanches e biscoitos caseiros.</h2>
            </div>
            <aside className="flex gap-5">
            </aside>
          </div>
        </div>
      </section>

      <section className="flex justify-center p-10">
        <div className="max-w-screen-lg w-full">
          <h1 className="text-3xl font-bold text-primary">Atendimento</h1>

          <div className="flex gap-5 pt-7">
            <CardServiceHour description={'Domingo'} hour={'Fechado'} />
            <CardServiceHour description={'Segunda'} hour={'8h - 19h'} />
            <CardServiceHour description={'Terça'} hour={'8h - 19h'} />
            <CardServiceHour description={'Quarta'} hour={'8h - 19h'} />
            <CardServiceHour description={'Quinta'} hour={'8h - 19h'} />
            <CardServiceHour description={'Sexta'} hour={'8h - 19h'} />
            <CardServiceHour description={'Sábado'} hour={'8h - 17h'} />
          </div>

          <div className="pt-10 flex gap-10">
            <button className="px-7 flex items-center py-3 bg-green-600 text-white gap-3 rounded-xl">
              <Image
                src={`/../public/whatsapp.svg`}
                alt="My Image"
                width={20}
                height={20}
              />
              <span>Entrar em contato</span>
            </button>

            <div className="text-primary">
              <p className="pb-1">Telefone</p>
              <strong className="text-xl mt-2">(47) 3598 7815</strong>
            </div>
          </div>
        </div>
      </section>



      <section className="flex justify-center p-10">
        <div className="max-w-screen-lg w-full bg-white flex justify-between border rounded-2xl overflow-hidden">
          <div className="p-10">
            <button className="bg-orange-600 rounded-2xl flex gap-2 px-3 py-1 text-white items-center">
              <Image
                src={`/../public/information.svg`}
                alt="My Image"
                width={20}
                height={20}
              />
              <p className="text-xs font-semibold">Destaque</p>
            </button>
            <h1 className="text-3xl font-bold text-primary pt-7">Praia dos Ingleses</h1>
            <h2 className="text-sm font-semibold text-primary py-5">Uma parte do paraíso na terra. Frequentemente com águas
              claras em tons verdes e azuis. Um dos locais mais preferidos
              por turistas e viajantes.</h2>
          </div>

          <Image
            src={`/../public/pic-dest.svg`}
            alt="My Image"
            width={1500}
            height={700}
          />
        </div>
      </section>


    </>
  )
}

const actions = [
  { active: true, text: "Todos" },
  { active: false, text: "Pontos Turísticos" },
  { active: false, text: "Comida & Bebida" },
  { active: false, text: "Eventos Organizados" },
]

export default PlaceDetail;