import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home
});

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
      <hr />
      <ul>
        <li>
          <Link className="text-sky-500 underline" to="/test1">Loader text as string</Link>
        </li>
        <li>
          <Link className="text-sky-500 underline" to="/test2">Loader text as function</Link>
        </li>
      </ul>
    </div>
  )
}
