export const Task = (props) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <h1 className="taskName">{props.taskName}</h1>
      {/* Cuando quiere poner una funcion con parametros a un evento tienes que pasarlo por una funcion anonima */}
      <div>
        <button onClick={() => props.completeTask(props.id)}>Complete</button>
        <button onClick={() => props.deleteTask(props.id)}>X</button>
      </div>
    </div>
  );
};
