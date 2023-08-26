import './Searchbar.css';

export default function Searchbar({ filter, setFilter }) {
    return (
      <div className="Searchbar">
        <label>
            Find images
            <input
              className='Searchbar__input'
              type="text"
              name="filter"
              value={filter}
              onChange={setFilter}
              //placeholder='Filter...'
            /> 
            </label>
            </div>
            
  )
}