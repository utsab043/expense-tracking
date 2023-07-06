//API

import { DB_KEYS } from "../../utils/constance"
import { dbWrite, getdbRead } from "./db"
import { v4 } from "uuid";

export const apiLogin = (username, password) => {
  //get all users
  const users = JSON.parse(getdbRead(DB_KEYS.USERS) || '[]');

  let isRegistered = false;
  let uId = null;
  // checking if user is registered
  users.map(user => {
    if (user.username === username && user.password === password) {
      isRegistered = true;
      uId = user.Id;
      return;
    }
  });

  let value = {};
  //save in database if users credentials match
  if (isRegistered) {
    value = {
      username: username,
      password: password,
      id: uId,
    }
    dbWrite(DB_KEYS.CURRENT_USER, JSON.stringify(value));
    return {
      status: 200,
      statusText: 'OK',
      message: 'logged in successfully',
    }
  }
  return {
    status: 400,
    message: 'Username or password didnt match',
  }

}
export const apiRegister = (username, email, password) => {

  const value = {
    id: v4(),
    username: username,
    password: password,
    email: email,
  }

  //gettiing the registered users list and adding new user
  const users = JSON.parse(getDBRead(DB_KEYS.USERS) || '[]');
  users.push(value);

  dbWrite(DB_KEYS.USERS, JSON.stringify(value));

  return {
    status: 200,
    message: 'Successfully registerd',
  }


}