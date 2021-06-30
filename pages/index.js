import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../components/Button';
import Card from '../components/cards/CardCity';
import Home from './Home';
import 'tailwindcss/tailwind.css'

export default function Index() {
  return (
    <div className="m-7">
      <Home />
    </div>
  )
}
