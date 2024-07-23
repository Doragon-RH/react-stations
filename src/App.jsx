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

  // // XMLHttpRequestオブジェクトの作成
  // var request = new XMLHttpRequest()

  // // URLを開く
  // request.open('GET', 'https://dog.ceo/api/breeds/image/random', true)
  // request.responseType = 'json'
  // // レスポンスが返ってきた時の処理を記述
  // request.onload = function () {
  //   // レスポンスが返ってきた時の処理
  //   var data = this.response['message']
  //   console.log(data)
  // }

  // // リクエストをURLに送信
  // request.send()

  const getData = function () {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(apiData => setDogUrl(apiData.message))
      .catch(e => console.error(e.message))
  }
  return (
    <div>
      <header>犬アプリ</header>
      <h1>犬の画像</h1>
      <img src={DogUrl} alt="表示できません" />
      <button onClick={() => getData()}>更新</button>
    </div>
  )
}
