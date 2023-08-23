const App = () => {
  const header = "Yaroslav";
  const logoImg = "/logo512.png";
  return (
    <div className="App">
      <div className="Logo">
        <img src={logoImg} alt="Logo" />
      </div>
      <h1>{header}</h1>
    </div>
  );
};
export default App;
