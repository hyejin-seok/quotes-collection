import { useState } from 'react'
import QuoteContext from './QuoteContext'

const QuoteContextProvider = ({ children }) => {
  const [quote, setQuote] = useState([])
  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.content} - ${quote.originator.name}`,
    )
  }

  const addQuote = (quote) => {
    setQuote(quote)
    // setQuote([...quote, quote]);
  }

  return (
    <QuoteContext.Provider value={{ quote, addQuote, twitter }}>
      {children}
    </QuoteContext.Provider>
  )
}

export default QuoteContextProvider
