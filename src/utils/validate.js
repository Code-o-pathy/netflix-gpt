export const checkValidation = (email, password) => {
  const isEmail = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email);
  const isPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
      password
    );

  if (!isPassword) return "Password Invalid-Capital letter,number, and special character";
  if (!isEmail) return "Email Invalid -@gmail.com required";

  return null;
};

export const nameValidation = (name, email, password) => {
  const isName = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/.test(name);
  const isEmail = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email);
  const isPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
      password
    );

  if (!isPassword) return "(Capital letter,number, and special character)";
  if (!isEmail) return "Email Invalid(@gmail.com required)";
  if (!isName) return "Name Invalid";
  return null;
};
