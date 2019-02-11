export const updateUserConst = 'user:updateUser';

export const updateUser = (newUser) => {

  return {
    type: updateUserConst,
    payload: {
      user: newUser
    },
  }
}
