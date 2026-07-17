import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test1')({
  loader() {
    return {
      test: "test"
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/test"!</div>
}
