import { useEffect, useState, useContext } from "react";
import QuotesListItem from "./QuotesListItem";
import QuoteContext from "../context/QuoteContext";
import Logo from "../../assets/images/favicon.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const QuotesList = () => {
  const [quotes, setQuotes] = useState([]);
  const { addQuote } = useContext(QuoteContext);

  const fetchQuotes = async () => {
    const url = "https://quotes15.p.rapidapi.com/quotes/random/";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_QUOTE_API_KEY,
        "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setQuotes(result);
      addQuote(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <Container className="text-center">
      <Row className="mb-3">
        <h3>
          Inspire with our Quotes&nbsp;
          <img src={Logo} alt="our logo" />
        </h3>
      </Row>
      {quotes && quotes.id && quotes.originator && quotes.originator.name ? (
        <QuotesListItem
          key={quotes.id}
          quotes={quotes}
          fetchQuotes={fetchQuotes}
        />
      ) : (
        // Render loading state or placeholder
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default QuotesList;
