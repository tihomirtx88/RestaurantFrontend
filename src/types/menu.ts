export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
};

export type CreateMenuItem = {
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
};

export type UpdateMenuItem = Partial<CreateMenuItem>;