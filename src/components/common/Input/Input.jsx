import './input.css';

export const Input = ({ placeholder, style, onChange }) => (
  <input
    className='Input'
    style={style}
    placeholder={placeholder}
    onChange={onChange}
  />
);
