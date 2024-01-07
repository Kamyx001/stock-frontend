import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='absolute z-50'>
      <Link to="/">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Logo</h1>
      </Link>
    </div>
  )
}

export default Logo