import './input.css';

export const Input = ({ placeholder, label, style, onChange }) => (
  <label>
    {label}
    <input
      className='Input'
      style={style}
      placeholder={placeholder}
      onChange={onChange}
    />
  </label>
);
