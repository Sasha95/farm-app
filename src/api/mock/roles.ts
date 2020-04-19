import { IRole } from "../dto/Role";

export const roles: IRole[] = [
  {
    'id': 1,
    'Head_ID': 0,
    'name': "Админ",
    'isDeleted': false,
  },
  {
    'id': 2,
    'Head_ID': 0,
    'name': "Юзер",
    'isDeleted': false,
  },
  {
    'id': 3,
    'Head_ID': 0,
    'name': "Аноним",
    'isDeleted': true,
  },
];
