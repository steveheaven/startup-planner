import App from "next/app";
import GlobalStyles from "../src/globalStyles";
import Layout from "../src/components/Layout";
import { wrapper } from "../src/store";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalStyles />
			<Layout {...pageProps}>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};
// MyApp.getInitialProps = async (appContext) => {
// 	// calls page's `getInitialProps` and fills `appProps.pageProps`
// 	const appProps = await App.getInitialProps(appContext);

// 	return { ...appProps };
// };

export default wrapper.withRedux(MyApp);
