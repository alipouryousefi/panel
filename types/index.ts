import { ReactNode } from "react";

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

export interface CustomButtonProps {
  title: string;
  onClick?: () => void;
  styles?: {};
  color?: string;
  size?: string;
}

export interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}
