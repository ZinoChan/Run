import { useField, FieldHookConfig } from 'formik';

export default function CheckBox(props: FieldHookConfig<string>) {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="form-check">
        <input className="form-check-input" {...field} name={props.name} />
        <label className="form-check-label">I accept the terms of use</label>
      </div>
      {meta.touched && meta.error ? (
        <div className="error text-danger">{meta.error}</div>
      ) : null}
    </>
  );
}
