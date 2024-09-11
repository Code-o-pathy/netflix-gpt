export const checkValidation = (email, password) => {
  const isEmail = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email);
  const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password);
  if (!isPassword) return "Password Invalid";
  if (!isEmail) return "Email Invalid";
   
  return null;
};
