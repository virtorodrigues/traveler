import React from 'react';
import Image from 'next/image';

const Card = () => (
  <div className="w-64 shadow rounded-2xl overflow-hidden">
    <Image
      src={'/../public/florianopolis.jpg'}
      alt="My Image"
      width={300}
      height={200}
    />
    <div className="w-full flex flex-col ml-3 text-left py-3 px-4">
      <strong className="font-bold text-gray-800 w-full cursor-default text-lg">Florianópolis</strong>
      <p className=" pt-1 cursor-default text-sm text-gray-500">13 locais</p>
    </div>
  </div>
)

export default Card;