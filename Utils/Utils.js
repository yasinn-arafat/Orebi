import { toast, Bounce } from "react-toastify";

function checkEmail(email = "yasinarafat123@gamil.com") {
  const regexPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let isEmailValidation = regexPattern.test(email.toLocaleLowerCase());
  return isEmailValidation;
}

function checkWordLimit(Message) {
  return Message.length > 100 ? false : true;
}

function successMessage(
  message = "Everything is Ok",
  position = "top-right",
  delay = 4000,
) {
  toast.success(message, {
    position: position,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
}

function errorMessage(
  message = "Something is wrong",
  position = "top-left",
  delay = 4000,
) {
  toast.error(message, {
    position: position,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
}

export { checkEmail, checkWordLimit, successMessage, errorMessage };
