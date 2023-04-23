import { Field } from 'react-final-form';
import { TextareaProps } from '..';
import { ErrorField } from '../../styles';

export const TextareaField = ({ name, ...rest }: TextareaProps) => {
  return (
    <Field name={name}>
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
