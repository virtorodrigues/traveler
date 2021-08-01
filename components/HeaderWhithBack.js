import React from 'react';
import Image from 'next/image';

const HeaderWhithBack = () => (
  <div className="flex justify-center bg-white">
    <div className="max-w-screen-lg w-full py-1 flex gap-8 items-center">
      <div className="flex">
        <Image
          src={'/../public/logo.svg'}
          alt='logo'
          width={100}
          height={50}
        />
      </div>

      <button className="rounded-xl border flex items-center h-7">
        <Image
          src={'/../public/arrow-left.svg'}
          alt='logo'
          width={30}
          height={15}
        />
      </button>

    </div>
  </div>
)

export default HeaderWhithBack;