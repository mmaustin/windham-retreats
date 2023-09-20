const getFormValues = (form) => {
  const formData = new FormData(form);
    
  const values = [...formData.values()];
  const isEmpty = values.includes('');

  const instanceData = Object.fromEntries(formData);
  return {isEmpty, instanceData};
}

export default getFormValues;