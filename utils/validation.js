export const required = (message = "Required", isRequired = true) =>
  isRequired ? (value) => (value ? undefined : message) : () => {};
