export type Review = {
  id: number;

  rating: number;

  comment: string;

  user_id: number;

  menu_item_id: number;

  created_at?: string;
};

export type CreateReview = {
  rating: number;

  comment: string;

  menu_item_id: number;
};

export type UpdateReview =
  Partial<CreateReview>;