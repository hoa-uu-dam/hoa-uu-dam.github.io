import axios from 'axios';
import type { StrapiResponse, Page, BlogPost, Category } from '../types/api';

// Configure the base URL for the Strapi API
const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:1337/api';

// Create axios instance with default configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth tokens (if needed in the future)
api.interceptors.request.use(
  config => {
    // You can add authorization headers here if needed
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Handle common errors (401, 403, 500, etc.)
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API service functions
export const apiService = {
  // Pages API
  pages: {
    getAll: async (): Promise<Page[]> => {
      const response = await api.get<StrapiResponse<Page[]>>(
        '/pages?populate=featuredImage'
      );
      return response.data.data;
    },

    getBySlug: async (slug: string): Promise<Page | null> => {
      const response = await api.get<StrapiResponse<Page[]>>(
        `/pages?filters[slug][$eq]=${slug}&populate=featuredImage`
      );
      return response.data.data[0] || null;
    },

    getById: async (id: number): Promise<Page | null> => {
      const response = await api.get<StrapiResponse<Page>>(
        `/pages/${id}?populate=featuredImage`
      );
      return response.data.data;
    },
  },

  // Blog Posts API
  blogPosts: {
    getAll: async (
      page = 1,
      pageSize = 10
    ): Promise<{ posts: BlogPost[]; meta: unknown }> => {
      const response = await api.get<StrapiResponse<BlogPost[]>>(
        `/blog-posts?populate=featuredImage,category&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`
      );
      return {
        posts: response.data.data,
        meta: response.data.meta,
      };
    },

    getBySlug: async (slug: string): Promise<BlogPost | null> => {
      const response = await api.get<StrapiResponse<BlogPost[]>>(
        `/blog-posts?filters[slug][$eq]=${slug}&populate=featuredImage,category`
      );
      return response.data.data[0] || null;
    },

    getByCategory: async (
      categorySlug: string,
      page = 1,
      pageSize = 10
    ): Promise<{ posts: BlogPost[]; meta: unknown }> => {
      const response = await api.get<StrapiResponse<BlogPost[]>>(
        `/blog-posts?filters[category][slug][$eq]=${categorySlug}&populate=featuredImage,category&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`
      );
      return {
        posts: response.data.data,
        meta: response.data.meta,
      };
    },

    getFeatured: async (limit = 3): Promise<BlogPost[]> => {
      const response = await api.get<StrapiResponse<BlogPost[]>>(
        `/blog-posts?populate=featuredImage,category&pagination[limit]=${limit}&sort=publishedAt:desc`
      );
      return response.data.data;
    },
  },

  // Categories API
  categories: {
    getAll: async (): Promise<Category[]> => {
      const response = await api.get<StrapiResponse<Category[]>>('/categories');
      return response.data.data;
    },

    getBySlug: async (slug: string): Promise<Category | null> => {
      const response = await api.get<StrapiResponse<Category[]>>(
        `/categories?filters[slug][$eq]=${slug}`
      );
      return response.data.data[0] || null;
    },
  },
};

// Export the axios instance for custom requests if needed
export { api };

export default apiService;
