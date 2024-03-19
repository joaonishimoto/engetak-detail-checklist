import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-teal-950  font-semibold">
      <div className="block">
        <h1 className="mx-auto my-auto text-white text-3xl">
          ERROR 404
        </h1>
        <Link href={'/parts'} className="flex items-center justify-center mt-7 border-2 mx-12 py-1 text-teal-950 bg-white rounded-md">
          back
        </Link>
      </div>
    </div>
  )
}