import { FieldHookConfig, useField } from 'formik';

export const Label = ({ label }: { label: string }) => <label>{label}</label>;

export default function TextInput(props: FieldHookConfig<string>) {
  const [field, meta] = useField(props);

  return (
    <>
      <input className="text-input" {...field} />
      {meta.touched && meta.error ? (
        <div className="error text-danger">{meta.error}</div>
      ) : null}
    </>
  );
}
