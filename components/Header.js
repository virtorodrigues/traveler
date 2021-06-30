import React from 'react';
import Image from 'next/image';

const Header = () => (
  <div className='p-10 bg-white flex justify-between'>
    <Image
      src={'/../public/logo.svg'}
      alt='logo'
      width={200}
      height={50}
    />

    <div className='bg-background p-1 flex w-4/12 border-border border rounded-2xl'>
      <span className='w-auto flex justify-end items-center p-2'>
        <Image src='/../public/search.svg' height={20} width={20} alt='search' />
      </span>
      <input className='w-full bg-background p-2 focus:outline-none' type='text' placeholder='Qual cidade você procura?' />
    </div>

    <button className='p-3 px-5 bg-blue-200 text-blue-500 font-semibold rounded-2xl focus:outline-none'>Acesso restrito</button>

  </div>
)

export default Header;