import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-10">
      <p>404 Not Found</p>
      <Link to="/">Click Me to go back to subscription page</Link>
    </div>
  )
}

export default NotFound