import { useState } from 'react'
import CollectionContext from './CollectionContext'

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

import { FiXSquare } from 'react-icons/fi'

const CollectionContextProvider = ({ children }) => {
  const [collection, setCollection] = useState([])
  const [showAlert, setShowAlert] = useState(false)

  const addToCollection = (quote) => {
    if (!collection.some((q) => q.id === quote.id)) {
      setCollection([...collection, quote])
      setShowAlert(true)
    }
  }

  const onDelete = (quoteId) => {
    const updatedCollection = collection.filter((quote) => quote.id !== quoteId)
    setCollection(updatedCollection)
  }

  const alertDismissible = () => {
    return (
      <Alert className='alert-custom rounded-4' show={showAlert}>
        <Alert.Heading className='alert-custom-heading '>
          Successfully Added!
        </Alert.Heading>
        <p className='fs-6'>The quote has been saved in the collection.</p>
        <hr />
        <div className='d-flex justify-content-end'>
          <Button className='nav-button' onClick={() => setShowAlert(false)}>
            Close
            <FiXSquare className='ms-2 fs-4' />
          </Button>
        </div>
      </Alert>
    )
  }

  return (
    <CollectionContext.Provider
      value={{
        collection,
        addToCollection,
        alertDismissible,
        showAlert,
        setShowAlert,
        onDelete,
      }}
    >
      {children}
    </CollectionContext.Provider>
  )
}

export default CollectionContextProvider
