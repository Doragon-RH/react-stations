// DO NOT DELETE

import './App.css'
import { Header } from './Header'
import { Description } from './Description'
/**
 * @type {() => JSX.Element}
 */
export const App = () => {
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

  return (
    <div>
      <Header />
      <Description />
    </div>
  )
}
