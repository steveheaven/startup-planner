import React, { useEffect } from "react";
import App from "next/app";
import GlobalStyles from "../src/globalStyles";
import Layout from "../src/components/Layout";
import { wrapper } from "../src/store";
import { useRouter } from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Head from "next/head";
import { StylesProvider } from "@material-ui/styles";

const MyApp = ({ Component, pageProps }) => {
	const router = useRouter();

	//Binding events
	useEffect(() => {
		let routeChangeStart = () => NProgress.start();
		let routeChangeComplete = () => NProgress.done();

		router.events.on("routeChangeStart", routeChangeStart);
		router.events.on("routeChangeComplete", routeChangeComplete);
		router.events.on("routeChangeError", routeChangeComplete);
		return () => {
			router.events.off("routeChangeStart", routeChangeStart);
			router.events.off("routeChangeComplete", routeChangeComplete);
			router.events.off("routeChangeError", routeChangeComplete);
		};
	}, []);

	return (
		<>
			<Head>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs    /nprogress/0.2.0/nprogress.min.css'
				/>
			</Head>
			<GlobalStyles />
			<Layout>
				<StylesProvider injectFirst>
					<Component {...pageProps} />
				</StylesProvider>
			</Layout>
		</>
	);
};
MyApp.getInitialProps = async (appContext) => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
};

export default wrapper.withRedux(MyApp);
