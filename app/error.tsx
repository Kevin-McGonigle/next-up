"use client"

import { Button } from "@/components/ui/button"
import type { ReactElement } from "react"

type ErrorPageProps = {
  error: Error & {
    digest?: string
  }
  reset: () => void
}
export default function Error({ error, reset }: ErrorPageProps): ReactElement {
  return (
    <div className="m-auto w-fit">
      <h1 className="font-extrabold mb-4 text-4xl">💥 Error</h1>
      <p>Something went wrong.</p>
      <p className="bold font-code">{error.message}</p>
      {error.digest && <p className="font-code">Digest: {error.digest}</p>}
      <Button className="block mx-auto mt-4 px-8" onClick={reset}>
        Reset
      </Button>
    </div>
  )
}
