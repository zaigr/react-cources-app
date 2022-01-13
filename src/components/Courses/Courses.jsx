import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';

import {
  mockedCoursesList,
  mockedAuthorsList,
} from '../../helpers/dateGenerator';

function Courses() {
  console.log(mockedAuthorsList);
  console.log(mockedCoursesList);

  var courseList = [...mockedCoursesList];

  console.log(courseList);

  courseList.forEach((course) => {
    course.authors = mockedAuthorsList
      .filter((a) => course.authors.includes(a.id))
      .map((a) => a.name);
  });

  console.log(courseList);

  return (
    <div>
      <SearchBar />
      <article>
        {courseList.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </article>
    </div>
  );
}

export default Courses;
