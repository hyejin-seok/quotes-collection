import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Logo from '../../assets/images/favicon.svg'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='d-flex flex-column align-items-center justify-content-center h-auto'>
        <h1 className='mb-5 text-center'>
          Quotes Collections&nbsp;
          <img src={Logo} alt='our logo' />
        </h1>
        <Button
          className='button mb-3 button-home-custom'
          size='lg'
          onClick={() => navigate(`/quotes`)}
        >
          Find Quotes
        </Button>
      </div>
    </>
  )
}

export default Home
