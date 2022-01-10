import './Button.css';

function Button(props) {
  return (
    <a className='Button' href={props.link}>
      {props.text}
    </a>
  );
}

export default Button;
