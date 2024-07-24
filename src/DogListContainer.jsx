// @ts-check
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'
export const DogListContainer = () => {
  var [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')
  var [DogUrl, setDogUrl] = useState('')
  useEffect(() => {
    // 処理
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(apiData => setBreeds(Object.keys(apiData.message)))
    // .then(console.log(Object.keys(apiData.message)))
    // .catch(e => console.error(e.message))
  }, [])
  const imageUrl = function () {
    const URL = `https://dog.ceo/api/breed/${selectedBreed}/images/random/`
    console.log(URL)
    console.log(selectedBreed)
    fetch(URL)
      .then(res => res.json())
      .then(apiData => setDogUrl(apiData.message))
    // .catch(e => console.error(e.message))
  }
  const handleBreedChange = event => {
    setSelectedBreed(event.target.value)
  }
  return (
    <>
      <h2>犬の品種を選択してください</h2>
      <select value={selectedBreed} onChange={handleBreedChange}>
        <BreedsSelect breeds={breeds} />
      </select>
      <h1>犬の画像</h1>
      <img src={DogUrl} alt="" />
      <button onClick={() => imageUrl()}>表示</button>
    </>
  )
}

export default DogListContainer
