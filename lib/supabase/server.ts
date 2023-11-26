import { type CookieOptions, createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { z } from "zod"

export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
  return createServerClient(
    z.string().parse(process.env.NEXT_PUBLIC_SUPABASE_URL),
    z.string().parse(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
            console.error(error)
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options })
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
            console.error(error)
          }
        },
      },
    },
  )
}
