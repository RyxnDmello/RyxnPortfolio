export interface IContact {
  name: string;
  email: string;
  number: number;
  designation: string;
  description: string;
}

export interface IService extends IContact {
  type: string;
}

export interface IComment extends IContact {}
