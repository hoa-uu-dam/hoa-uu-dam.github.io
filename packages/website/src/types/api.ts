// Base Strapi types
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiItem {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Content type definitions (will be expanded as we create content models)
export interface Page extends StrapiItem {
  title: string;
  slug: string;
  content: string;
  featuredImage?: {
    url: string;
    alternativeText?: string;
  };
  seoTitle?: string;
  seoDescription?: string;
}

export interface BlogPost extends StrapiItem {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: {
    url: string;
    alternativeText?: string;
  };
  author: string;
  tags?: string[];
  category?: Category;
}

export interface Category extends StrapiItem {
  name: string;
  description?: string;
  slug: string;
}

export interface NavigationItem {
  label: string;
  url: string;
  isExternal?: boolean;
}
