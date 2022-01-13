import './button.css';

export const Button = ({ text, style, onClick }) => (
  <button className='Button' style={style} onClick={onClick}>
    {text}
  </button>
);
