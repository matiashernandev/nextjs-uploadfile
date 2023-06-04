"use client"

import { useState } from "react"

export default function Home() {
  const [file, setFile] = useState()

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault()

          if (!file) return

          const form = new FormData()
          form.set("file", file)

          const res = await fetch("/api/upload", {
            method: "POST",
            body: form,
          })
          const data = await res.json()
          console.log(data)
        }}
      >
        <label>
          Upload file
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </label>
        <button>Upload</button>
      </form>
    </div>
  )
}
