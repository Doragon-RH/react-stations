// @ts-check
import { useState } from 'react'

export const BreedsSelect = ({ breeds }) => {
  const [selectedBreed, setSelectedBreed] = useState('')
  // const listItems = breeds.map((number, index) => (
  //   <option value="" key={index}>
  //     {number}
  //   </option>
  // ))　コメントアウトしているものをアクティブにすると上手くstateが更新されない
  const handleBreedChange = event => {
    setSelectedBreed(event.target.value)
  }
  return (
    <>
      {/* <select value={selectedBreed} onChange={handleBreedChange}>
        <option value="">選択してください</option>
        {listItems}
      </select> */}
      <select value={selectedBreed} onChange={handleBreedChange}>
        <option value="">選択してください</option>
        {breeds.map((breed, index) => (
          <option value={breed} key={index}>
            {breed}
          </option>
        ))}
      </select>
    </>
  )
}

export default BreedsSelect
