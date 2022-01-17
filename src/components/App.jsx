import { useState } from 'react';

import Header from './Header/Header';
import Courses from './Courses/Courses';
import CreateCourse from './CreateCourse/CreateCourse';

function App() {
  const [isCreateCourse, setCreateCourse] = useState(false);

  return (
    <div className='container'>
      <Header />
      {isCreateCourse ? (
        <CreateCourse />
      ) : (
        <Courses onAddNewCourse={() => setCreateCourse(true)} />
      )}
    </div>
  );
}

export default App;
