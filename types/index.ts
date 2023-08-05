enum Education {
  highSchool = "زیر دیپلم",
  diploma = "دیپلم",
  bachelor = "لیسانس",
  master = "فوق لیسانس",
  phd = "دکتری",
}

export interface Person {
  nationalCode: string;
  firstName: string;
  lastName?: string;
  education: Education;
  status: boolean;
}
