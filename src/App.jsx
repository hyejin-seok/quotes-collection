import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Home from "./components/Home/Home";
import QuotesList from "./components/Quotes/QuotesList";
import QuoteDetail from "./components/Quotes/QuoteDetail";
import Collection from "./components/Collection/Collection";
import CollectionDetail from "./components/Collection/CollectionDetail";
import QuoteContextProvider from "./components/context/QuoteContextProvider";
import CollectionContextProvider from "./components/context/CollectionContextProvider";

import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <CollectionContextProvider>
        <QuoteContextProvider>
          <Container className="quote">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quotes" element={<Outlet />}>
                <Route index element={<QuotesList />} />
                <Route path=":quoteId" element={<QuoteDetail />} />
              </Route>
              <Route path="/collections" element={<Outlet />}>
                <Route index element={<Collection />} />
                <Route path=":quoteId" element={<CollectionDetail />} />
              </Route>
            </Routes>
          </Container>
        </QuoteContextProvider>
      </CollectionContextProvider>
    </BrowserRouter>
  );
};

export default App;
