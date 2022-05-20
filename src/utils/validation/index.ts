type IFormDisabledParams = {
  dirty: boolean;
  isValid: boolean;
  isSubmitting: boolean;
};

const formDisabled = ({ dirty, isValid, isSubmitting }: IFormDisabledParams): boolean =>
  !dirty || !isValid || isSubmitting;

const ValidationUtils = {
  formDisabled,
};

export default ValidationUtils;
