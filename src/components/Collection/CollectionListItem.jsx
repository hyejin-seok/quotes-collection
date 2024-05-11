import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import CollectionContext from '../context/CollectionContext'

import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'

import { FiZoomIn } from 'react-icons/fi'
import { FiTrash } from 'react-icons/fi'

const CollectionListItem = () => {
  const { collection, onDelete } = useContext(CollectionContext)
  const navigate = useNavigate()

  return (
    <ListGroupItem className='collection-custom p-4' as='li'>
      {collection.map((quote) => (
        <div
          key={quote.id}
          className='d-flex align-items-center border-bottom quote-wrapper pb-3 mb-3'
        >
          <span className='col-6 quote-content'>
            {quote.content.length > 100
              ? quote.content.slice(0, 100) + '...'
              : quote.content}
          </span>
          <span className='col-3 quote-author p-2'>
            {quote.originator.name}
          </span>
          <Button
            className='button button-custom-collection col-1 p-2'
            onClick={() => {
              navigate(`/collections/${quote.id}`)
            }}
          >
            VIEW
            <FiZoomIn className='ms-1 fs-4' />
          </Button>
          <Button
            className='button button-custom-collection col-1 p-2'
            onClick={() => onDelete(quote.id)}
          >
            DEL
            <FiTrash className='ms-1 fs-5' />
          </Button>
        </div>
      ))}
    </ListGroupItem>
  )
}

export default CollectionListItem
