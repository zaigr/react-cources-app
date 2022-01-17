import { useMemo, useState } from 'react';

import Header from '../Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import { Button } from '../common/Button/Button';

import DataGenerator from '../../helpers/dataGenerator';

import './courses.css';

function Courses({ onAddNewCourse }) {
  const authorsList = useMemo(() => DataGenerator.getAuthors(), []);
  const coursesList = useMemo(() => getCoursesList(authorsList), [authorsList]);

  const [courses, setCourses] = useState(coursesList);

  function getCoursesList(authors) {
    console.log('get courses from source');
    var list = DataGenerator.getCoursesList();
    list.forEach((course) => {
      course.authors = authors
        .filter((a) => course.authors.includes(a.id))
        .map((a) => a.name);
    });

    return list;
  }

  function handleSearchSubmit(text) {
    if (!text) {
      return;
    }

    var filteredList = coursesList.filter((c) =>
      c.title.toLowerCase().includes(text.toLowerCase())
    );

    setCourses(filteredList);
  }

  function handleSearchReset() {
    setCourses(coursesList);
  }

  return (
    <>
      <Header />
      <div>
        <div className='Courses-actionbar'>
          <SearchBar
            onSearchSubmit={handleSearchSubmit}
            onSearchReset={handleSearchReset}
          />
          <Button
            text='Add new course'
            style={{ float: 'right' }}
            onClick={onAddNewCourse}
          />
        </div>
        <article>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </article>
      </div>
    </>
  );
}

export default Courses;
