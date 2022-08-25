export const phoneNumberRegex = /^\(\d{3}\)\d{3} \d{4}$/;
export const zipCodeRegex = /(^\d{5}$)/;
export const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;


export const emailValidate = (input) => {
    
  if (input.match(emailRegex)) {
    return true;
  } else {
    return false;
  }
};

export const passwordValidate = (input) => {
  if (input.match(passwordRegex)) {
    return true;
  } else {
    return false;
  }
};
