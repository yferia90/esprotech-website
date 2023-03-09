import '../../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AppContextProvider } from '../contexts/app.context';
config.autoAddCss = false;

const  MyApp = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <Component {...pageProps}/>
    </AppContextProvider>
  )
}

export default MyApp
