import React from 'react';
import Card from '../components/cards/CardCity';
import Button from '../components/Button';
import Image from 'next/image';

const Home = () => (
  <>
    <Image
      src={'/../public/logo.svg'}
      alt="My Image"
      width={200}
      height={50}
    />
    <div className="flex justify-center items-center">
      <div className="w-3/12 ml-5 pr-20 ">
        <h1 className="font-bold text-7xl text-primary">Viva uma grande aventura</h1>
        <p className="mt-10 mb-20">Descubra locais incríveis para se visitar em cidades maravilhosas de Santa Catarina.</p>
        <Button className="mt-10" bgColor="secondary">Descobrir todos os lugares</Button>
      </div>
      <div className="mr-5">
        <div className="flex sm:flex-col md:flex-row xs:flex-row">
          <div>
            <Card />
            <Card />
            <Card />
          </div>
          <div className="mt-12">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

      </div>
    </div>
  </>
)

export default Home;