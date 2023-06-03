"use client"

import { useState } from "react"

export default function Home() {
  const [file, setFile] = useState()

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()

          if (!file) return

          console.log(file)
        }}
      >
        <label> Upload file</label>

        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <button>Upload</button>
      </form>
    </div>
  )
}
