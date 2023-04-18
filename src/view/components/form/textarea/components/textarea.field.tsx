import { Field } from 'react-final-form';
import { TextareaProps } from '..';
import { ErrorField } from '../../styles';

export const TextareaField = ({ name, type, ...rest }: TextareaProps) => {
  return (
    <Field name={name} type={type}>
      {({ input, meta }) => (
        <>
          <textarea
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
