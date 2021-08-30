
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
export function Home(props) {
  return (
    <div className="Header">
         <Header/>
         <Menu/>
         <Footer/>
    </div>
  );
}

export default Home;