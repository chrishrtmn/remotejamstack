import type { AppProps } from "next/app";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Footer from "../components/footer";
import Header from "../components/header";
import Newsletter from "../components/newsletter";
import { AuthProvider } from "../libraries/firebase/auth";
import "../styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <ToastContainer
        hideProgressBar
        newestOnTop
        closeButton={false}
        transition={Slide}
        position="bottom-center"
        toastClassName="text-center rounded-md shadow-md"
      />
      <Header />
      <Component {...pageProps} />
      <Newsletter />
      <Footer />
    </AuthProvider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App;
