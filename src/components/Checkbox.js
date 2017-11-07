import React from 'react';

const Checkbox = ({ value, updateField }) => (
  <input type="checkbox" checked={value} onChange={(evt) => updateField(evt.target.checked)} />
);

export default Checkbox;
