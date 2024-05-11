import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import QuoteContext from '../context/QuoteContext'
import CollectionContext from '../context/CollectionContext'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { FiRefreshCcw } from 'react-icons/fi'
import { FiZoomIn } from 'react-icons/fi'
import { FiFolderPlus } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { FiHome } from 'react-icons/fi'
import { FiFolder } from 'react-icons/fi'

const QuotesListItem = ({ quotes, fetchQuotes }) => {
  const navigate = useNavigate()
  const { twitter } = useContext(QuoteContext)
  const { addToCollection, alertDismissible, showAlert, setShowAlert } =
    useContext(CollectionContext)

  return (
    <Row>
      <Col>
        <Card className='card-custom-header card-custom-header-quote'>
          <Card.Header className='p-2'>Quote</Card.Header>
          <Card.Body className='card-custom-body card-custom-body-quote p-4'>
            <blockquote className='blockquote mb-4'>
              <p> {quotes.content} </p>
              <footer className='blockquote-footer py-2'>
                <cite title='Source Title' className='cite-custom'>
                  {quotes.originator.name}
                </cite>
              </footer>
            </blockquote>
            <Button
              className='button mx-2 mb-3'
              onClick={() => {
                fetchQuotes()
                setShowAlert(false)
              }}
            >
              New Quote
              <FiRefreshCcw className='ms-2 fw-bold fs-6' />
            </Button>
            <Button
              className='button mx-2 mb-3'
              onClick={() => {
                navigate(`/quotes/${quotes.id}`)
                setShowAlert(false)
              }}
            >
              View Detail
              <FiZoomIn className='ms-2 fs-5' />
            </Button>
            <Button
              className='button mx-2 mb-3'
              onClick={() => {
                addToCollection(quotes)
                setShowAlert(true)
              }}
            >
              Save
              <FiFolderPlus className='ms-2 fs-5' />
            </Button>
            <Button
              className='button mx-2 mb-3'
              onClick={() => {
                twitter()
                setShowAlert(false)
              }}
            >
              Tweet
              <FiTwitter className='ms-2 fs-5' />
            </Button>
            {alertDismissible(showAlert)}
          </Card.Body>
        </Card>
      </Col>

      <div className='button-collection-div'>
        <Button
          className='nav-button mx-3'
          onClick={() => {
            navigate(`/`)
            setShowAlert(false)
          }}
        >
          Home
          <FiHome className='ms-2 fs-5' />
        </Button>
        <Button
          className='nav-button mx-3'
          onClick={() => {
            navigate(`/collections`)
            setShowAlert(false)
          }}
        >
          Collection
          <FiFolder className='ms-2 fs-5' />
        </Button>
      </div>
    </Row>
  )
}

export default QuotesListItem
