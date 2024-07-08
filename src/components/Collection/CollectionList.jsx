import ListGroup from 'react-bootstrap/ListGroup'
import CollectionListItem from './CollectionListItem'

const CollectionList = () => {
  return (
    <ListGroup variant='flush' className='rounded-4' as='ul'>
      <CollectionListItem />
    </ListGroup>
  )
}

export default CollectionList
