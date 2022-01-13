import { useState } from 'react';

import { Button } from '../../../common/Button/Button';
import { Input } from '../../../common/Input/Input';

function SearchBar(props) {
  const [inputText, setInputText] = useState(null);

  function handleInputChange(event) {
    if (!event.target.value) {
      props.onSearchReset();
    }

    setInputText(event.target.value);
  }

  return (
    <>
      <Input placeholder='Enter course name...' onChange={handleInputChange} />
      <Button
        style={{ marginLeft: '1%' }}
        text='Search'
        onClick={() => props.onSearchSubmit(inputText)}
      />
    </>
  );
}

export default SearchBar;
