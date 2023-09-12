const getFormValues = (form) => {
  const formData = new FormData(form);
    
  const values = [...formData.values()];
  const isEmpty = values.includes('');

  const registrationData = Object.fromEntries(formData);
  return {isEmpty, registrationData};
}

export default getFormValues;