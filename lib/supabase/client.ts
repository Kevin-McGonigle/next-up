import { env } from "@/lib/utils"
import { createBrowserClient } from "@supabase/ssr"
import "client-only"

export const createClient = () =>
  createBrowserClient(
    env("NEXT_PUBLIC_SUPABASE_URL"),
    env("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  )
