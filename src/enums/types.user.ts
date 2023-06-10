export enum TypesUser {
  SUPER_ADMIN,
  ADMIN,
  USER,
  GUEST,
}

export const parseTypeUser = (type: number) => {
  switch (type) {
    case TypesUser.SUPER_ADMIN:
      return TypesUser.SUPER_ADMIN;
    case TypesUser.ADMIN:
      return TypesUser.ADMIN;
    case TypesUser.USER:
      return TypesUser.USER;
    case TypesUser.GUEST:
      return TypesUser.GUEST;
    default:
      return TypesUser.USER;
  }
};

