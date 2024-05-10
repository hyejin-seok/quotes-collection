import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import CollectionContext from '../context/CollectionContext'
import CollectionList from './CollectionList'
import Logo from '../../assets/images/favicon.svg'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Collection = () => {
  const { collection } = useContext(CollectionContext)
  const quoteCount = collection.length
  const navigate = useNavigate()

  return (
    <>
      <Outlet />
      <Row>
        <Col className='p-1 rounded-4 text-center '>
          <h3>
            My Quotes Collection <img src={Logo} alt='our logo' />
          </h3>
          <h4>
            Total:&nbsp; <strong> {quoteCount} </strong> quotes
          </h4>
          {quoteCount > 0 && (
            <div className='collection-box'>
              <CollectionList />
            </div>
          )}
          <Button className='button-move mt-4' onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default Collection
