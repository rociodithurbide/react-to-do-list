import Item from "../Item";
import "./style.scss";

function List(props) {
  function onDelete(position) {
    //console.log("trying to delete something: ", position);
    props.handleDelete(position);
  }
  return (
    <ul>
      {props.tasks.map((task, key) => {
        return (
          <Item key={key} text={task} position={key} handleDelete={onDelete} />
        );
      })}
    </ul>
  );
}

export default List;
