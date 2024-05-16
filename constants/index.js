export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

export const ROUTES = {
  TEACHER: "Teacher",
  STUDENT: "Student",
  LOGIN: "Login",
  STUDENT_PROFILE: "Student Profile",
};

export const ROLE_ROUTE_MAP = {
  [ROLES.ADMIN]: ROUTES.TEACHER,
  [ROLES.USER]: ROUTES.STUDENT,
};

export const SUBJECTS = {
  MATHEMATICS: "Mathematics",
  BIOLOGY: "Biology",
};

export const MATHEMATICS_ID = "1";
export const BIOLOGY_ID = "2";

export const SUBJECT_ID_MAP = {
  [SUBJECTS.MATHEMATICS]: MATHEMATICS_ID,
  [SUBJECTS.BIOLOGY]: BIOLOGY_ID,
};
