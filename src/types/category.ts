export type Category = {
  id: number;
  name: string;
  order?: number;
};

export type CreateCategory = {
  name: string;
  order?: number;
};

export type UpdateCategory = Partial<CreateCategory>;