const getFormValues = (form) => {
  const formData = new FormData(form);
    
  const values = [...formData.values()];
  const isEmpty = values.includes('');

  const loginData = Object.fromEntries(formData);
  return {isEmpty, loginData};
}

export default getFormValues;