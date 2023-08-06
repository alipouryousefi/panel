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

export interface FormValues {
  firstName: string;
  lastName: string | undefined;
  education: string;
  nationalCode: string;
  status: NonNullable<boolean | undefined>;
}

export interface CustomButtonProps {
  title: string;
  onClick?: () => void;
  styles?: React.CSSProperties;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export interface HomeProps {
  personsArray: Person[];
  totalCount: number;
}

export interface PaginateProps {
  count: number;
  page: number;
  updatePersonsList: (pageNumber?: number) => void;
}

export interface TableContentProps {
  persons: Person[];
  page: number;
}

export interface CreatePersonProps {
  updatePersonsList: (pageNumber?: number) => void;
}
