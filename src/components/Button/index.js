import "./style.scss";

function Button(props) {
  function handleClick() {
    console.log("estoy agregando una tarea");
    props.handleCallback();
  }
  return (
    <button onClick={handleClick} className="button">
      Add Task
    </button>
  );
}

export default Button;
