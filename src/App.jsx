// DO NOT DELETE

import './App.css'
import { useState } from 'react'
/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  function setDogURL() {
    const [DogUrl] = useState(
      'https://images.dog.ceo/breeds/mountain-bernese/n02107683_6596.jpg',
    )
    return DogUrl
  }

  // const DogUrl =
  //   'https://images.dog.ceo/breeds/mountain-bernese/n02107683_6596.jpg'

  return (
    <div>
      <header>書籍管理アプリ</header>
      <h1>犬の画像</h1>
      <img src={setDogURL()} alt="表示できません" />
    </div>
  )
}
