// DO NOT DELETE

import './App.css'
import { useState } from 'react'
/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  var [DogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/mountain-bernese/n02107683_6596.jpg',
  )

  return (
    <div>
      <header>書籍管理アプリ</header>
      <h1>犬の画像</h1>
      <img src={DogUrl} alt="表示できません" />
      <button
        onClick={() =>
          setDogUrl(
            'https://images.dog.ceo/breeds/newfoundland/n02111277_120.jpg',
          )
        }
      >
        更新
      </button>
    </div>
  )
}
