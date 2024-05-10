import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import QuoteContext from '../context/QuoteContext'
import CollectionContext from '../context/CollectionContext'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
            </Button>
            <Button
              className='button mx-2 mb-3'
              onClick={() => {
                navigate(`/quotes/${quotes.id}`)
                setShowAlert(false)
              }}
            >
              View Detail
            </Button>
            <Button
              className='button mx-2 mb-3'
              onClick={() => {
                addToCollection(quotes)
                setShowAlert(true)
              }}
            >
              Save
            </Button>
            <Button
              className='button mx-2 mb-3'
              onClick={() => {
                twitter()
                setShowAlert(false)
              }}
            >
              X(Tweet)
            </Button>
            {alertDismissible(showAlert)}
          </Card.Body>
        </Card>
      </Col>

      <div className='button-collection-div'>
        <Button
          className='button-move mx-3'
          onClick={() => {
            navigate(`/`)
            setShowAlert(false)
          }}
        >
          Go Home
        </Button>
        <Button
          className='button-move mx-3'
          onClick={() => {
            navigate(`/collections`)
            setShowAlert(false)
          }}
        >
          My Collection
        </Button>
      </div>
    </Row>
  )
}

export default QuotesListItem
