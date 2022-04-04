import React from 'react';
import { useField } from 'formik';

export default function CheckBox({ children, ...props }) {
  const [field, meta] = useField(props, 'checkbox');

  return (
    <>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          {...field}
          {...props}
        />
        <label className="form-check-label">I accept the terms of use</label>
      </div>
      {meta.touched && meta.error ? (
        <div className="error text-danger">{meta.error}</div>
      ) : null}
    </>
  );
}
