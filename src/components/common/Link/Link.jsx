import './Link.css';

function Link(props) {
  return (
    <a className='Link' href={props.href}>
      {props.text}
    </a>
  );
}

export default Link;
