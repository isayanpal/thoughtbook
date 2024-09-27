import z from "zod";

export const signupInput = z.object({
  username: z.string(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const signinInput = z.object({
  username: z.string(),
  password: z.string(),
});

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number(),
});

export type SignupType = z.infer<typeof signupInput>;
export type SigninType = z.infer<typeof signinInput>;
export type CreatePostType = z.infer<typeof createBlogInput>;
export type UpdatePostType = z.infer<typeof updateBlogInput>;
