import PropTypes from "prop-types";

function List(props) {
  const { items, category } = props;

  const listItems = items.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; {item.calories}
    </li>
  ));
  return (
    <>
      <h2>{category}</h2>
      <ul>{listItems}</ul>
    </>
  );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number.isRequired,
        })
    ).isRequired,       
};


export default List;
