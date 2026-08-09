"use client";

import { useState, useEffect } from "react";
import { API_BASE } from "../lib/api";

export interface BlogPost {
  id?: string;
  _id?: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  date: string;
  author: string;
  image: string;
  bgColor: string;
  readTime: string;
  popular: boolean;
  content: string;
  views: number;
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setPosts(data.data);
        } else {
          setError("Failed to load blog posts");
        }
      })
      .catch(() => setError("Network error — could not reach API"))
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
}
