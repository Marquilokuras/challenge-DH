import Nav from "./Nav";
import Menu from "./Menu";
import ContentWrap from "./Content-Wrap";

function App() {
  return (
    <>
      <div className="dashboard">
        <Nav />
        <Menu />
        <ContentWrap />
      </div>
    </>
  )
}

export default App;
