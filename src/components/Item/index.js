import "./style.scss";

function Item(props) {
  function handleClick() {
    props.handleDelete(props.position);
  }
  return (
    <div className="itemWrapper">
      <li className="item">{props.text}</li>
      <button onClick={handleClick} className="deleteButton">
        x
      </button>
    </div>
  );
}

export default Item;
