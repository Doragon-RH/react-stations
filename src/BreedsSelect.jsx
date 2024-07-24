// @ts-check

export const BreedsSelect = ({ breeds }) => {
  // const listItems = breeds.map((number, index) => (
  //   <option value="" key={index}>
  //     {number}
  //   </option>
  // ))　コメントアウトしているものをアクティブにすると上手くstateが更新されない

  return (
    <>
      {/* <select value={selectedBreed} onChange={handleBreedChange}>
        <option value="">選択してください</option>
        {listItems}
      </select> */}

      <option value="">選択してください</option>
      {breeds.map((breed, index) => (
        <option value={breed} key={index}>
          {breed}
        </option>
      ))}
    </>
  )
}

export default BreedsSelect
