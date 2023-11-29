import "../styles/globals.css";

//INTRNAL IMPORT
import { BigNFTSilder, Footer, NavBar } from "../components/componentsindex";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <BigNFTSilder/>
    <Footer/>
    
  </div>
);

export default MyApp;