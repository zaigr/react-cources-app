import { Button } from '../../../common/Button/Button';
import { Input } from '../../../common/Input/Input';

import './search-bar.css';

function SearchBar() {
  return (
    <div className='SearchBar'>
      <Input placeholder='Enter course name...' />
      <Button style={{ marginLeft: '1%' }} text='Search' />
      <Button style={{ float: 'right' }} text='Add new course' />
    </div>
  );
}

export default SearchBar;
