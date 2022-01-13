import { Button } from '../../../common/Button/Button';

import './course-card.css';

function getAuthorNames(authors) {
  return authors.slice(0, 2).join(', ') + (authors.length > 2 ? '...' : '');
}

function CourseCard(props) {
  return (
    <article className='CourseCard'>
      <section className='CourseCard-description'>
        <h2>{props.course.title}</h2>
        <p>{props.course.description}</p>
      </section>
      <section className='CourseCard-details'>
        <p>
          <strong>Authors:</strong> {getAuthorNames(props.course.authors)}
        </p>
        <p>
          <strong>Duration:</strong> {props.course.duration}
        </p>
        <p>
          <strong>Created:</strong> {props.course.creationDate}
        </p>
        <Button
          style={{ marginLeft: '40%', marginTop: '2%' }}
          text='Show course'
        />
      </section>
    </article>
  );
}

export default CourseCard;
