import { FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(setFilter(e.currentTarget.value));

  return (
    <label>
      Find contacts by name
      <FilterInput type="text" onChange={handleFilterChange} />
    </label>
  );
};

export default Filter;
