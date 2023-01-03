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
  const { name } = input;
  const hasError = meta.touched && meta.error;

  return (
    <>
      <TextField
        {...input}
        name={name}
        error={hasError}
        helperText={hasError && meta.error}
        {...rest}
      />
    </>
  );
};

export const FormTextField = (props) => {
  const { ...rest } = props;
  return <Field {...rest} component={TextFieldAdapter} />;
};
