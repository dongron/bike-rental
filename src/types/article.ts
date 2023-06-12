interface Article {
  title: string;
  questions?: string[];
  published?: string;
  author?: [];
  tags?: any[];
  body: any;
  imageUrl?: string;
  meta: {
    title?: string;
    description?: string;
  };
}

export type { Article };
