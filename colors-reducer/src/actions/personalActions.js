const GET_FORM = "GET_FORM";

export const getForm = (form) => {
  return {
    type: GET_FORM,
    personalInfo: form,
  };
};
