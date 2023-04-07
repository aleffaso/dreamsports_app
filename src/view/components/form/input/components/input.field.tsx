import { Field } from 'react-final-form';
import { InputProps } from '..';
import { ErrorField } from '../../styles';

export const InputField = ({ name, type, ...rest }: InputProps) => {
  return (
    <Field name={name} type={type}>
      {({ input, meta }) => (
        <>
          <input
            {...input}
            {...rest}
            className={(meta?.error || meta?.submitError) && meta?.touched ? 'error' : ''}
          />
          {(meta?.error || meta?.submitError) && meta?.touched ? (
            <ErrorField>{meta.error || meta.submitError}</ErrorField>
          ) : null}
        </>
      )}
    </Field>
  );
};
