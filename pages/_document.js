import Document, { Html, Head, Main, NextScript } from "next/document";
import Sidebar from "../components/sidebar";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" />
					<title>NEXT JS AMP EXAMPLE</title>
					<meta name="keywords" content="NEXT JS AMP EXAMPLE"></meta>
					<meta property="og:url" content="https://popmach.com"></meta>
					<meta property="og:type" content="website"></meta>
					<meta property="og:title" content="Popmach"></meta>
				</Head>
				<body>
					<Sidebar />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
