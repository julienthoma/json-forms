import React from 'react';

const Input = ({ value, updateField }) => (
  <input type="text" value={value} onChange={(evt) => updateField(evt.target.value)} />
);

export default Input;
