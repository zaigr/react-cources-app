import { Button } from '../../../common/Button/Button';

function getAuthorNames(authors) {
  return authors.slice(0, 2).join(', ') + (authors.length > 2 ? '...' : '');
}

function CourseCard(props) {
  return (
    <article>
      <section>
        <h3>{props.course.title}</h3>
        <p>{props.course.description}</p>
      </section>
      <section>
        <p>
          <strong>Authors:</strong> {getAuthorNames(props.course.authors)}
        </p>
        <p>
          <strong>Duration:</strong> {props.course.duration}
        </p>
        <p>
          <strong>Created:</strong> {props.course.creationDate}
        </p>
        <Button text='Show course' />
      </section>
    </article>
  );
}

export default CourseCard;
