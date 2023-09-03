import PropTypes from 'prop-types';
import { Label } from './Filter.styled';
import { Input } from 'components/Input/Input';

export const Filter = ({ onChange, filter }) => (
  <>
    <Label>Find contacts by name</Label>
    <Input type="text" name="filter" onChange={onChange} value={filter} />
  </>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
