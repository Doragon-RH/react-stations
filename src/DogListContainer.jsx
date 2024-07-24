// @ts-check
import { useState, useEffect } from 'react'

export const DogListContainer = () => {
  var [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')
  useEffect(() => {
    // 処理
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(apiData => setBreeds(Object.keys(apiData.message)))
    // .catch(e => console.error(e.message))
  }, [])
  const listItems = breeds.map((number, index) => (
    <option value="" key={index}>
      {number}
    </option>
  ))
  const handleBreedChange = event => {
    setSelectedBreed(event.target.value)
  }

  return (
    <>
      <h2>犬の品種を選択してください</h2>
      <select value={selectedBreed} onChange={handleBreedChange}>
        <option value="">選択してください</option>
        {listItems}
      </select>
    </>
  )
}

export default DogListContainer
