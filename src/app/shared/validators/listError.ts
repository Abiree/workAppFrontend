export const ListError = 
  {
    password: {
        required:"Password is required",
        minlength:"Password must contain more than \n 8 characters",
        maxlength:"Le mot de passe doit contenir moins \n de 32 caractères",
        format:"Password must contain at least one uppercase letter, one lowercase letter, one numeric character and one symbol or special character",
        matching:"Passwords do not match"
    },
    email: {
      required:"The email address is required",
      format:"The format of the email address is invalid",
      maxlength:"The email address must contain less than 50 characters",
    },
    username: {
        required:"Userame is required",
      },
    firstname: {
        required:"FirstName is required",
      },
    lastname: {
          required:"LastName is required",
        },
    phone: {
            required:"Phone is required",
          }

  };