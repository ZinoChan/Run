import { UseFormRegister, Path, FieldValues } from 'react-hook-form';

type Props<T extends FieldValues> = {
  name: Path<T>;
  type: string;
  className?: string;
  register: UseFormRegister<T>;
  error: any;
};

export const Label = ({ label }: { label: string }) => (
  <label className="text-capitalize">{label}</label>
);

const TextInput = <T extends FieldValues>({
  name,
  type,
  className,
  register,
  error,
}: Props<T>) => {
  return (
    <>
      <input type={type} className={className || ''} {...register(name)} />
      {error ? <div className="error text-danger">{error.message}</div> : null}
    </>
  );
};

export default TextInput;



