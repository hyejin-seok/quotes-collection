import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Logo from '../../assets/images/favicon.svg'

import { FiSearch } from 'react-icons/fi'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <h1 className='mb-5 text-center'>
          Quotes Collection&nbsp;
          <img src={Logo} alt='logo' className='logo' />
        </h1>
        <Button
          className='button mb-3 button-home-custom'
          size='lg'
          onClick={() => navigate(`/quotes`)}
        >
          Find Quotes
          <FiSearch className='ms-2 ' />
        </Button>
      </div>
    </>
  )
}

export default Home
