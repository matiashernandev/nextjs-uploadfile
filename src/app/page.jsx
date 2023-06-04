"use client"

import { useState } from "react"

export default function Home() {
  const [file, setFile] = useState()

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault()

          if (!file) return

          try {
            const form = new FormData()
            form.set("file", file)

            const res = await fetch("/api/upload", {
              method: "POST",
              body: form,
            })

            if (res.ok) {
              console.log("file uploaded")
            }

            const data = await res.json()
            console.log(data)
          } catch (error) {
            console.log(error)
          }
        }}
      >
        <label>
          Upload file
          <input type="file" onChange={handleFileChange} />
        </label>
        <button>Upload</button>
      </form>
    </div>
  )
}
