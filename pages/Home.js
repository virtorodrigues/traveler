import React from 'react';
import Card from '../components/cards/CardCity';
import Button from '../components/Button';

const Home = () => (
  <div className="flex justify-center items-center">
    <div className="w-4/12 pr-20 ">
      <h1 className="font-bold text-7xl text-primary">Viva uma grande aventura</h1>
      <p className="mt-10 mb-20">Descubra locais incríveis para se visitar em cidades maravilhosas de Santa Catarina.</p>
      <Button className="mt-10" bgColor="secondary">Descobrir todos os lugares</Button>
    </div>
    <div className="w-6/12">
      <div className="flex sm:flex-col md:flex-row xs:flex-row">
        <div className="mr-5">
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
)

export default Home;