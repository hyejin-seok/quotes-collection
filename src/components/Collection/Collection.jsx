import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import CollectionContext from '../context/CollectionContext'
import CollectionList from './CollectionList'
import Logo from '../../assets/images/favicon.svg'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { FiSkipBack } from 'react-icons/fi'

const Collection = () => {
  const { collection } = useContext(CollectionContext)
  const quoteCount = collection.length
  const navigate = useNavigate()

  return (
    <>
      <Outlet />
      <Row>
        <Col className='rounded-4 d-flex flex-column align-items-center justify-content-center'>
          <h2>
            My Quotes Collection <img src={Logo} alt='logo' className='logo' />
          </h2>
          <h3 className='mb-4'>
            Total:&nbsp; <strong> {quoteCount} </strong> quotes
          </h3>
          {quoteCount > 0 && (
            <div className='collection-box'>
              <CollectionList />
            </div>
          )}
          <Button className='nav-button mt-4' onClick={() => navigate(-1)}>
            Back
            <FiSkipBack className='ms-1 fs-6' />
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default Collection
