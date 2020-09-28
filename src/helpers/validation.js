import * as Yup from 'yup';

export const billingValidation = Yup.object({
    fullname: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid Email Address')
        .required('Required'),
    address: Yup.string()
        .required('Required'),
    country: Yup.string()
        .required('Required'),
    city: Yup.string()
        .required('Required'),
    phone: Yup.string()
        .required('Required')

});

export const paymentValidation = Yup.object({
    cardName: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .required("Required"),
    cardNumber: Yup.string()
      .min(13, "Credit Card Number can't be less then 13")
      .required("Required"),
    cvvCode: Yup.string()
      .min(3, 'Cvv Code must be 3 for Mastercard or Visa and 4 for Express')
      .max(4, 'Cvv Code must be 3 for Mastercard or Visa and 4 for Express')
      .required("Required"),
    date: Yup.date()
        .min(new Date(), `Date must be later then ${new Date()}`)
        .required('Required')
});
