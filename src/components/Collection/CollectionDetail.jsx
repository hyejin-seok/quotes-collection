import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import QuoteContext from '../context/QuoteContext'
import CollectionContext from '../context/CollectionContext'
import Logo from '../../assets/images/favicon.svg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { FiSkipBack } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'

const CollectionDetail = () => {
  const { twitter } = useContext(QuoteContext)
  const { collection } = useContext(CollectionContext)
  const { quoteId } = useParams()
  const navigate = useNavigate()

  const selectedQuote = collection.find((item) => item.id === parseInt(quoteId))

  return (
    <Container>
      <Row>
        <Col>
          <h2 className='text-center mb-3'>
            Quote Detail <img src={Logo} alt='logo' className='logo' />
          </h2>
          <Card className='card-custom mb-4 rounded-4'>
            <Card.Header className='card-custom-header card-custom-header-detail py-3 rounded-4'>
              <strong>[Key Words]</strong> {selectedQuote.tags.join('. ')}
            </Card.Header>
            <Card.Body className='card-custom-body p-4'>
              <blockquote className='blockquote'>
                <p> {selectedQuote.content} </p>
                <footer className='blockquote-footer py-2'>
                  <cite title='Source Title'>
                    {selectedQuote.originator.name}
                  </cite>
                </footer>
              </blockquote>
              <Button
                className='button mx-3 mb-3 mt-2'
                onClick={() => {
                  navigate(-1)
                }}
              >
                Back
                <FiSkipBack className='ms-2' />
              </Button>
              <Button
                className='button mx-3 mb-3 mt-2'
                onClick={() => {
                  twitter()
                }}
              >
                Tweet
                <FiTwitter className='ms-2' style={{ fontSize: '18px' }} />
              </Button>
            </Card.Body>
            <Card.Footer className='card-custom-footer'>
              <strong>[About Originator]</strong>{' '}
              <Card.Link
                href={selectedQuote.originator.url}
                className='custom-link'
              >
                {selectedQuote.originator.url}
              </Card.Link>
            </Card.Footer>
            <Card.Footer className='card-custom-footer card-custom-footer-detail-end'>
              <strong>[Quote Source]</strong>{' '}
              <Card.Link href={selectedQuote.url} className='custom-link'>
                {selectedQuote.url}
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CollectionDetail
