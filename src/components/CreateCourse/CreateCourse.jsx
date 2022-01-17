import Header from '../Header/Header';
import { Input } from '../common/Input/Input';
import { Button } from '../common/Button/Button';

import './create-course.css';

function CreateCourse() {
  return (
    <>
      <Header />
      <div className='CreateCourse'>
        <Input label='Title' placeholder='Enter course name...' />
        <Button text='Create course' />
      </div>
    </>
  );
}

export default CreateCourse;
