import { TailSpin } from "react-loader-spinner";
function Info({ title, data, isLast = false, isLoading }) {
  const containerStyle = {
    background: "white",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={containerStyle} className={`${isLast ? "last-info" : "info"}`}>
      <h2>{title}</h2>
      {isLoading ? (
        <div style={{ width: "100%" }}>
          <TailSpin
            visible={true}
            height="40"
            width="40"
            color="#5264c5"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <span>{data}</span>
      )}
    </div>
  );
}

export default Info;
