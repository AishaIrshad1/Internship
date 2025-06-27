import useFetch from "./hooks/useFetch";

function AppFetch() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>useFetch Hook Example</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {data &&
          data.map((todo) => (
            <li key={todo.id}>
              {todo.title} {todo.completed ? "✅" : "❌"}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AppFetch;
