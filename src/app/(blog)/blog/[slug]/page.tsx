
export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
  const {slug} = await params;
  return (
        <div className="text-5xl flex justify-center items-center w-screen">
          <h1>{slug}</h1>
        </div>

  )
}

