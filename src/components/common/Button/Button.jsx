import './button.css';

export const Button = ({ text, onClick }) => (
  <button className='Button' onClick={onClick}>
    {text}
  </button>
);
