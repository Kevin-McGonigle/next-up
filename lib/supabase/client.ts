import { createBrowserClient } from "@supabase/ssr"
import { z } from "zod"

export const createClient = () =>
  createBrowserClient(
    z.string().parse(process.env.NEXT_PUBLIC_SUPABASE_URL),
    z.string().parse(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
  )
