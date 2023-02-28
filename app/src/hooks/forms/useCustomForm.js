import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const useCustomForm = (schema, props = {}) => {
  const {
    formState: { errors },
    register,
    watch,
    setValue,
    ...form
  } = useForm({
    resolver: yupResolver(schema),
    ...props,
  });
  
  const setFieldErrors = (propertyName, { setHelperText = true } = {}) => {
    if (!errors[propertyName]) return null;

    const hasProp = Object.hasOwn(errors, propertyName);

    if (!hasProp) return null;

    const props = {
      error: hasProp,
    };

    if (setHelperText) {
      props.helperText = errors?.[propertyName]?.message ?? null;
    }

    return props;
  };

  const registerField = (
    property,
    { setErrors = true, setHelperText = true } = {}
  ) => {
    const propertyName = property?.name ?? property;

    const fieldErrors = setErrors
      ? { ...setFieldErrors(propertyName, { setHelperText }) }
      : null;

    const props = typeof property === "object" ? property : {};

    return { ...register(propertyName), ...fieldErrors, ...props };
  };

  return {
    ...form,
    errors,
    registerField,
    setFieldErrors,
    setValue,
    watch,
  };
};
