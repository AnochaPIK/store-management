import { TextField } from "@mui/material";
import { Field } from "react-final-form";

const Error = ({ name }) => (
  <Field name={name} subscription={{ touched: true, error: true }}>
    {({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  </Field>
);

const TextFieldAdapter = (props) => {
  const { input, meta, ...rest } = props;
  const { name, ...restInput } = input;
  const hasError = meta.touched && meta.error;

  return (
    <>
      <TextField
        name={name}
        error={hasError}
        helperText={hasError && meta.error}
        inputProps={restInput}
        {...rest}
      />
    </>
  );
};

export const FormTextField = (props) => {
  return <Field {...props} component={TextFieldAdapter} />;
};
