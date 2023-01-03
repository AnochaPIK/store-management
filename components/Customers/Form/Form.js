import { Form as FinalForm, Field } from "react-final-form";
import { FormTextField } from "./FormTextField";

export const Form = (props) => {
  const { children, ...rest } = props;
  return (
    <FinalForm
      {...rest}
      render={(props) => (
        <form onSubmit={props.handleSubmit}>{children(props)}</form>
      )}
    />
  );
};

Form.TextField = FormTextField;
