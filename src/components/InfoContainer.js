function InfoContainer({ ip, location, timeZone, isp, isLoading, children }) {
  const style = {
    display: "flex",
    alignItems: "center",
    background: "white",
    borderRadius: "15px",
    position: "absolute",
    top: "100%",
    zIndex: "4",
  };
  return (
    <div style={style} className="info-container">
      {children}
    </div>
  );
}

export default InfoContainer;
