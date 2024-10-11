import './global.css'
import RouteListener from './RouteListener'

export const metadata = {
  title: 'NextGram',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
}

export default function RootLayout(props: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html>
      <body>
        {/* <RouteListener /> */}
        {props.children}
        {props.modal}
      </body>
    </html>
  )
}
