type IFormDisabledParams = {
  isValid: boolean;
  isSubmitting: boolean;
};

const formDisabled = ({ isValid, isSubmitting }: IFormDisabledParams): boolean => !isValid || isSubmitting;

const ValidationUtils = {
  formDisabled,
};

export default ValidationUtils;
