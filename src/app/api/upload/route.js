import { writeFile } from "fs/promises"
import path from "path"

export async function POST(request) {
  const data = await request.formData()
  const file = data.get("file")

  const bytes = await file.arrayBuffer()

  const buffer = Buffer.from(bytes)

  const filePath = path.join(process.cwd(), "public/images", file.name)

  writeFile(filePath, buffer)

  console.log("file uploaded to", filePath)

  return new Response(
    JSON.stringify({
      message: "uploaded file",
    })
  )
}
