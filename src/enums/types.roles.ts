export enum TypesRoles {
  SUPER_ADMIN,
  ADMIN,
  USER,
  GUEST,
}

export const parseTypeRoles = (type: number) => {
  switch (type) {
    case TypesRoles.SUPER_ADMIN:
      return TypesRoles.SUPER_ADMIN;
    case TypesRoles.ADMIN:
      return TypesRoles.ADMIN;
    case TypesRoles.USER:
      return TypesRoles.USER;
    case TypesRoles.GUEST:
      return TypesRoles.GUEST;
    default:
      return TypesRoles.USER;
  }
};

