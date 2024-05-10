import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import QuoteContext from '../context/QuoteContext'
import CollectionContext from '../context/CollectionContext'
import Logo from '../../assets/images/favicon.svg'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const QuoteDetail = () => {
  const { quote, twitter } = useContext(QuoteContext)
  const { addToCollection, alertDismissible, showAlert, setShowAlert } =
    useContext(CollectionContext)
  const navigate = useNavigate()
  const keyWords = quote.tags.join(', ')

  return (
    <Row>
      <Col>
        <h3 className='text-center mb-3'>
          Quote Detail <img src={Logo} alt='our logo' />
        </h3>
        <Card className='card-custom mb-4 rounded-4'>
          <Card.Header className='card-custom-header card-custom-header-detail py-3 rounded-4'>
            <strong>[Key Words]</strong> {keyWords}
          </Card.Header>
          <Card.Body className='card-custom-body p-4'>
            <blockquote className='blockquote'>
              <p> {quote.content} </p>
              <footer className='blockquote-footer py-2'>
                <cite title='Source Title'>{quote.originator.name}</cite>
              </footer>
            </blockquote>
            <Button
              className='button mx-2 mb-2 mt-2'
              onClick={() => {
                navigate(-1)
                setShowAlert(false)
              }}
            >
              Go Back
            </Button>
            <Button
              className='button mx-2 mb-2 mt-2'
              onClick={() => {
                addToCollection(quote)
                setShowAlert(true)
              }}
            >
              Save
            </Button>
            <Button
              className='button mx-2 mb-2 mt-2'
              onClick={() => {
                twitter()
                setShowAlert(false)
              }}
            >
              X(Tweet)
            </Button>
            {alertDismissible(showAlert)}
          </Card.Body>
          <Card.Footer className='card-custom-footer'>
            <strong>[About Originator]</strong>{' '}
            <Card.Link href={quote.originator.url} className='custom-link'>
              {quote.originator.url}
            </Card.Link>
          </Card.Footer>
          <Card.Footer className='card-custom-footer card-custom-footer-detail-end'>
            <strong>[Quote Source]</strong>{' '}
            <Card.Link href={quote.url} className='custom-link'>
              {quote.url}
            </Card.Link>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  )
}

export default QuoteDetail
