import React, { useCallback } from 'react';
import HeaderWhithBack from '../components/HeaderWhithBack';
import Image from 'next/image';
import Map from '../components/Map';

const PlaceDetail = () => {

  const CardServiceHour = useCallback(({ description, hour }) => (
    <div className="border rounded-xl bg-white p-5">
      <span className="block text-primary">{description}</span>
      <strong className="block pt-2 font-bold text-primary">{hour}</strong>
    </div>
  ), []);

  const RatingsCard = () => {
    return (
      <div className="flex gap-5 max-w-sm pt-3">
        <div>
          <Image
            src={`/../public/homem.svg`}
            alt="My Image"
            width={64}
            height={64}
          />

        </div>
        <div className="pt-1 border-b pb-4">
          <span className="text-primary font-semibold">Patrick</span>
          <p className="pt-2 text-sm text-primary">Grande variedade de bolos, cucas, tortas e algumas opções de salgados.</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <HeaderWhithBack />
      <div className="absolute top-0 right-0 ">
        <Image
          src={`/../public/place-florianopolis.svg`}
          alt="My Image"
          width={700}
          height={800}
        />
      </div>
      <section className="flex justify-center p-10">
        <div className="max-w-screen-lg w-full">
          <div className="max-w-lg w-full">
            <div className="flex">
              <div className="mr-20">
                <h1 className="text-3xl font-bold text-primary">Doce & Companhia</h1>
                <h2 className="text-sm font-semibold text-primary py-5">O melhor lugar da cidade para você tomar um bom café. Fatias de tortas artesanais, bolos, lanches e biscoitos caseiros.</h2>
              </div>
              <aside className="flex gap-5">
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center p-10">
        <div className="max-w-screen-lg w-full">
          <div className="max-w-lg w-full">

            <h1 className="text-2xl font-bold text-primary pb-2 border-b mb-7 max-w-lg">Atendimento</h1>

            <div className="">
              <ul className="flex gap-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <li>
                  <CardServiceHour description={'Domingo'} hour={'Fechado'} />
                </li>
                <li>
                  <CardServiceHour description={'Segunda'} hour={'8h - 19h'} />
                </li>
                <li>
                  <CardServiceHour description={'Terça'} hour={'8h - 19h'} />
                </li>
                <li>
                  <CardServiceHour description={'Quarta'} hour={'8h - 19h'} />
                </li>
                <li>
                  <CardServiceHour description={'Quinta'} hour={'8h - 19h'} />
                </li>
                <li>
                  <CardServiceHour description={'Sexta'} hour={'8h - 19h'} />
                </li>
                <li>
                  <CardServiceHour description={'Sábado'} hour={'8h - 17h'} />
                </li>
              </ul>
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
        </div>
      </section>

      <section className="flex justify-center p-10">
        <div className="max-w-screen-lg w-full">
          <h1 className="text-2xl font-bold text-primary pb-2 border-b mb-7 max-w-lg">Endereço</h1>

          <Map />
        </div>
      </section>

      <section className="flex justify-center p-10">
        <div className="max-w-screen-lg w-full">
          <h1 className="text-2xl font-bold text-primary pb-2 border-b mb-7 max-w-lg">Avaliações</h1>

          <ul>
            <li>
              <RatingsCard />
            </li>
            <li>
              <RatingsCard />
            </li>
            <li>
              <RatingsCard />
            </li>
            <li>
              <RatingsCard />
            </li>
          </ul>

        </div>
      </section>
    </>
  )
}

export default PlaceDetail;