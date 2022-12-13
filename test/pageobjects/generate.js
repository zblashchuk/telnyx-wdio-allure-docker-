const { faker } = require('@faker-js/faker');
// import { faker } from '@faker-js/faker/locale/de';
function generateUser(){

  const validEmail = "zblashchuk@gmail.com"
  const validPassword = "Qwerty123456*"
  const invalidEmail = "zblashchukzzz@gmail.com"
  const wrongEmailFormat = "z"
  
  const firstName = "Yana"
  const lastName= "Yanosh"
  const companyName = "YY company"
  const randomNumber = Math.random().toString().slice(2, 6)
  const firstNameRandom = faker.name.firstName()
  const lastNameRandom = faker.name.lastName()
  const empty = ''
  const email = `${firstNameRandom + randomNumber}@gmail.com`
  const password = "1A*" + Math.random().toString(36).slice(-9)
  const mobile = faker.phone.number('##########')
  const reasonForContact = ['Support', 'Sales Inquiry',];
  let rand = Math.floor(Math.random() * reasonForContact.length);
  const randReasonForContact = (reasonForContact[rand])
 
  const adress = faker.address.streetAddress()
 
  return {validEmail, validPassword, invalidEmail, wrongEmailFormat, companyName, firstNameRandom, lastNameRandom, email, firstName, lastName, mobile, empty, password, randReasonForContact};
}
module.exports = {generateUser};