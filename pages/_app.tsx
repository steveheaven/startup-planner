import App from "next/app";
import GlobalStyles from "../src/globalStyles";
import Layout from "../src/components/Layout";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { wrapper, AppStore } from "../src/store";
import { NextComponentType, NextPageContext } from "next";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalStyles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default wrapper.withRedux(MyApp);
