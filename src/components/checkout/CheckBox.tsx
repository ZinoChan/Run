// CheckBox.tsx
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

type CheckBoxProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  error: any;
}

const CheckBox = <T extends FieldValues>({ name, register, error }: CheckBoxProps<T>) => {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          {...register(name)}
        />
        <label className="form-check-label">I accept the terms of use</label>
        {error ? <div className="error text-danger">{error.message}</div> : null}
      </div>
    </>
  );
}

export default CheckBox;
