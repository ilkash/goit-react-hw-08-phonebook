import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'Redux/filter/filterSlice';
import { selectFilter } from 'Redux/selectors';
import { Input, LabelWrapper } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <LabelWrapper>
      Search contacts by name:
      <Input
        type="text"
        value={filter}
        onChange={changeFilter}
        placeholder="search..."
      />
    </LabelWrapper>
  );
};

export default Filter;
