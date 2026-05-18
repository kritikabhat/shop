/**
 * API call should be in Shop page, and it passes data here.
 * Figure out key, id for each item
 * 
 * Same btn functionality as in Cart initially.
 * 
 * later: Can the Btns initialy be only Add, then change if amount > 0
 * 
 * @returns Card for each item on sale
 */

const handleClickItem = () => {
  // this is useless, delete it if it interferes with the Btn onclicks
}

const ItemCard = ({ obj }) => {
  return (
    <div className="itemCard" key={obj.id}>
      <div className="imgDiv" onClick={handleClickItem}>
        <img src={obj.image} alt={`Image of ${obj.title}`} />
      </div>
      <div className="itemName">{obj.title}</div>
    </div>
  )
}
export default ItemCard