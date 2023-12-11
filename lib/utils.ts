import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"
import { fromZodError } from "zod-validation-error"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function env(name: string): string {
  return parse(process.env[name], z.string())
}

export function parse<T>(data: unknown, schema: z.Schema<T>): T {
  const result = schema.safeParse(data)

  if (!result.success) {
    throw fromZodError(result.error)
  }

  return result.data
}
