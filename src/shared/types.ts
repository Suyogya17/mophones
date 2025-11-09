import z from "zod";

export const PhoneSchema = z.object({
  id: z.number(),
  name: z.string(),
  brand: z.string(),
  model: z.string(),
  price: z.number(),
  original_price: z.number().nullable(),
  image_url: z.string().nullable(),
  description: z.string().nullable(),
  display_size: z.string().nullable(),
  processor: z.string().nullable(),
  ram: z.string().nullable(),
  storage: z.string().nullable(),
  camera_main: z.string().nullable(),
  camera_front: z.string().nullable(),
  battery: z.string().nullable(),
  operating_system: z.string().nullable(),
  color: z.string().nullable(),
  weight: z.string().nullable(),
  dimensions: z.string().nullable(),
  network: z.string().nullable(),
  is_featured: z.number().int(),
  is_available: z.number().int(),
  stock_quantity: z.number().int(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type Phone = z.infer<typeof PhoneSchema>;

export const UserSchema = z.object({
  id: z.number(),
  email: z.string(),
  first_name: z.string().nullable(),
  last_name: z.string().nullable(),
  phone_number: z.string().nullable(),
  address: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export const FilterParams = z.object({
  brand: z.string().optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  storage: z.string().optional(),
  ram: z.string().optional(),
  sortBy: z.enum(['price_asc', 'price_desc', 'name_asc', 'name_desc', 'newest']).optional(),
});

export type FilterParamsType = z.infer<typeof FilterParams>;

export const ComparisonSchema = z.object({
  id: z.number(),
  user_id: z.number().nullable(),
  phone_ids: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type Comparison = z.infer<typeof ComparisonSchema>;
