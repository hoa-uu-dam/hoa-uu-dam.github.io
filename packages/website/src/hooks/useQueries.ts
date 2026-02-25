import { useQuery } from '@tanstack/react-query';
import apiService from '../services/api';

// Query Keys
export const queryKeys = {
  blogPosts: {
    all: ['blogPosts'] as const,
    lists: () => [...queryKeys.blogPosts.all, 'list'] as const,
    list: (filters: Record<string, unknown>) =>
      [...queryKeys.blogPosts.lists(), { filters }] as const,
    details: () => [...queryKeys.blogPosts.all, 'detail'] as const,
    detail: (slug: string) => [...queryKeys.blogPosts.details(), slug] as const,
    featured: (limit: number) =>
      [...queryKeys.blogPosts.all, 'featured', limit] as const,
  },
  pages: {
    all: ['pages'] as const,
    lists: () => [...queryKeys.pages.all, 'list'] as const,
    details: () => [...queryKeys.pages.all, 'detail'] as const,
    detail: (slug: string) => [...queryKeys.pages.details(), slug] as const,
  },
  categories: {
    all: ['categories'] as const,
    lists: () => [...queryKeys.categories.all, 'list'] as const,
    details: () => [...queryKeys.categories.all, 'detail'] as const,
    detail: (slug: string) =>
      [...queryKeys.categories.details(), slug] as const,
  },
};

// Blog Posts Hooks
export const useFeaturedBlogPosts = (limit: number = 3) => {
  return useQuery({
    queryKey: queryKeys.blogPosts.featured(limit),
    queryFn: () => apiService.blogPosts.getFeatured(limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useBlogPosts = (page: number = 1, pageSize: number = 10) => {
  return useQuery({
    queryKey: queryKeys.blogPosts.list({ page, pageSize }),
    queryFn: () => apiService.blogPosts.getAll(page, pageSize),
    staleTime: 5 * 60 * 1000,
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: queryKeys.blogPosts.detail(slug),
    queryFn: () => apiService.blogPosts.getBySlug(slug),
    enabled: !!slug,
    staleTime: 10 * 60 * 1000, // 10 minutes for individual posts
  });
};

export const useBlogPostsByCategory = (
  categorySlug: string,
  page: number = 1,
  pageSize: number = 10
) => {
  return useQuery({
    queryKey: queryKeys.blogPosts.list({ categorySlug, page, pageSize }),
    queryFn: () =>
      apiService.blogPosts.getByCategory(categorySlug, page, pageSize),
    enabled: !!categorySlug,
    staleTime: 5 * 60 * 1000,
  });
};

// Pages Hooks
export const usePages = () => {
  return useQuery({
    queryKey: queryKeys.pages.lists(),
    queryFn: () => apiService.pages.getAll(),
    staleTime: 15 * 60 * 1000, // 15 minutes for pages (less frequently updated)
  });
};

export const usePage = (slug: string) => {
  return useQuery({
    queryKey: queryKeys.pages.detail(slug),
    queryFn: () => apiService.pages.getBySlug(slug),
    enabled: !!slug,
    staleTime: 15 * 60 * 1000,
  });
};

export const usePageById = (id: number) => {
  return useQuery({
    queryKey: queryKeys.pages.detail(id.toString()),
    queryFn: () => apiService.pages.getById(id),
    enabled: !!id,
    staleTime: 15 * 60 * 1000,
  });
};

// Categories Hooks
export const useCategories = () => {
  return useQuery({
    queryKey: queryKeys.categories.lists(),
    queryFn: () => apiService.categories.getAll(),
    staleTime: 30 * 60 * 1000, // 30 minutes for categories (rarely updated)
  });
};

export const useCategory = (slug: string) => {
  return useQuery({
    queryKey: queryKeys.categories.detail(slug),
    queryFn: () => apiService.categories.getBySlug(slug),
    enabled: !!slug,
    staleTime: 30 * 60 * 1000,
  });
};
