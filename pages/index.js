import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../components/Button';
import Card from '../components/cards/CardCity';
import Home from './Home';
import CityList from './CityList';
import CityDetail from './cityDetail';
import PlaceDetail from './PlaceDetail';

import 'tailwindcss/tailwind.css'

export default function Index() {
  return (
    <div className="bg-background w-100 vh-100">
      <PlaceDetail />
    </div>
  )
}
