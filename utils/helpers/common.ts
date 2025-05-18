export const handleErrors = (errors: any) => {
  const formErrors: any = {};

  errors.map((err: any) => {
    // if (!Object.keys(formErrors).length) {
    console.log("err", err);

    formErrors[err?.field] = {
      message: err.messages.join(". ").replaceAll(/id/gi, ""),
    };
  });

  return formErrors;
};
