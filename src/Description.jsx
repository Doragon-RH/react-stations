// @ts-check
import { useState, useEffect } from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  var [DogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/mountain-bernese/n02107683_6596.jpg',
  )
  const imageUrl = function () {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(apiData => setDogUrl(apiData.message))
    // .catch(e => console.error(e.message))
  }
  return (
    <>
      <h1>犬の画像</h1>
      <DogImage imageUrl={DogUrl} />
      <button onClick={() => imageUrl()}>更新</button>
    </>
  )
}

export default Description
