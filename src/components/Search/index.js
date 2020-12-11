import "./style.scss";

function Search(props) {
  function handleChange(e) {
    const { value } = e.target;
    props.handleCallback(value);
  }
  function handleKeyDown(e) {
    const { keyCode } = e;
    props.handleKeyDown(keyCode);
  }
  return (
    <input
      type="text"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={props.value}
      placeholder="Write a task"
      className="input"
    />
  );
}

export default Search;
