import { useEffect, useState, useContext } from 'react'
import QuotesListItem from './QuotesListItem'
import QuoteContext from '../context/QuoteContext'
import Logo from '../../assets/images/favicon.svg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { FiLoader } from 'react-icons/fi'

const QuotesList = () => {
  const [quotes, setQuotes] = useState([])
  const { addQuote } = useContext(QuoteContext)

  const fetchQuotes = async () => {
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/'
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_QUOTE_API_KEY,
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      },
    }
    try {
      const response = await fetch(url, options)
      const result = await response.json()
      setQuotes(result)
      addQuote(result)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchQuotes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className='text-center'>
      <Row className='mb-3'>
        <h2>
          Inspire with our Quotes&nbsp;
          <img src={Logo} alt='logo' className='logo' />
        </h2>
      </Row>
      {quotes && quotes.id && quotes.originator && quotes.originator.name ? (
        <QuotesListItem
          key={quotes.id}
          quotes={quotes}
          fetchQuotes={fetchQuotes}
        />
      ) : (
        // Render loading state or placeholder
        <p className='fs-4'>
          Loading...
          <FiLoader className='ms-2' style={{ fontSize: '28px' }} />
        </p>
      )}
    </Container>
  )
}

export default QuotesList
