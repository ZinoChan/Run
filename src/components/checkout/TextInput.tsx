import { FieldHookConfig, useField } from 'formik';

export const Label = ({ label }: { label: string }) => <label>{label}</label>;

export default function TextInput(props: FieldHookConfig<string>) {
  const [field, meta] = useField(props);

  return (
    <>
      <input className={props?.className || ''} {...field} type={props.type} />
      {meta.touched && meta.error ? (
        <div className="error text-danger">{meta.error}</div>
      ) : null}
    </>
  );
}
