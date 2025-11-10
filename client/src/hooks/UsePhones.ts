import { useState, useEffect } from 'react';
import type { Phone, FilterParamsType } from '../shared/types';

export function usePhones(filters?: FilterParamsType) {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhones = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const params = new URLSearchParams();
        if (filters?.brand) params.append('brand', filters.brand);
        if (filters?.minPrice !== undefined) params.append('minPrice', filters.minPrice.toString());
        if (filters?.maxPrice !== undefined) params.append('maxPrice', filters.maxPrice.toString());
        if (filters?.storage) params.append('storage', filters.storage);
        if (filters?.ram) params.append('ram', filters.ram);
        if (filters?.sortBy) params.append('sortBy', filters.sortBy);

        const url = `/api/phones${params.toString() ? `?${params.toString()}` : ''}`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch phones');
        }
        
        const data = await response.json();
        setPhones(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPhones();
  }, [filters]);

  return { phones, loading, error };
}

export function useFeaturedPhones() {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedPhones = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch('/api/phones/featured');
        
        if (!response.ok) {
          throw new Error('Failed to fetch featured phones');
        }
        
        const data = await response.json();
        setPhones(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPhones();
  }, []);

  return { phones, loading, error };
}

export function usePhone(id: string) {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhone = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`/api/phones/${id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch phone');
        }
        
        const data = await response.json();
        setPhone(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPhone();
    }
  }, [id]);

  return { phone, loading, error };
}

export function useComparePhones(phoneIds: number[]) {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComparePhones = async () => {
      if (phoneIds.length < 2) {
        setPhones([]);
        return;
      }

      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch('/api/phones/compare', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phone_ids: phoneIds }),
        });
        
        if (!response.ok) {
          throw new Error('Failed to compare phones');
        }
        
        const data = await response.json();
        setPhones(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchComparePhones();
  }, [phoneIds]);

  return { phones, loading, error };
}
