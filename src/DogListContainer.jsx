// @ts-check
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'
export const DogListContainer = () => {
  var [breeds, setBreeds] = useState([])

  useEffect(() => {
    // 処理
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(apiData => setBreeds(Object.keys(apiData.message)))
    // .catch(e => console.error(e.message))
  }, [])

  return (
    <>
      <h2>犬の品種を選択してください</h2>
      <BreedsSelect breeds={breeds} />
    </>
  )
}

export default DogListContainer
