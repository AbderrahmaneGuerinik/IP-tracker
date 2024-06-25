function Search({ query, onChangeQuery, onSubmit, error, input }) {
  const containerStyle = {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  };
  return (
    <form style={containerStyle} onSubmit={(e) => onSubmit(e)}>
      <input
        className={`${error ? "error" : ""}`}
        type="text"
        placeholder={`${
          error
            ? "Enter a valid ip or domain or verify your connection"
            : "Search for any IP address"
        }`}
        style={{ flexShrink: 2 }}
        value={query}
        ref={input}
        onChange={(e) => onChangeQuery(e)}
      />
      <button className="greater"> &gt; </button>
    </form>
  );
}

export default Search;
