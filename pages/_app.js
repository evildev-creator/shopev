import '../public/assets/styles/bootstrap.min.css';
import '../public/assets/styles/fontawesome.min.css';
import '../public/assets/styles/animate.min.css';
import '../public/assets/styles/slick.css';
import '../public/assets/styles/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../public/assets/styles/style.css';
import '../public/assets/styles/responsive.css';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';
import '../public/assets/styles/404.css';

import Layout from '../components/_App/Layout';
import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from '../store/reducers/reducers';

const MyApp = ({ Component, pageProps }) => {
    const store = useStore(pageProps.initialReduxState)
    const persistor = persistStore(store, {}, function () {
      persistor.persist()
    })
    return (
        <Layout>
            <Provider store={store}>
            <PersistGate loading={<div className="loader"></div>} persistor={persistor}> 
                <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </Layout>
    );
}

export default MyApp