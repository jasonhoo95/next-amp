import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import Post from "../components/post";
import categories from "../data/categories.json";

const Index = ({ posts }) => {
	return (
		<Layout>
			<div className="post-list">
				<Post post={posts} />
			</div>
		</Layout>
	);
};

Index.getInitialProps = async () => {
	// fetch list of posts
	const res = await fetch(`https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=China`);
	const posts = await res.json();
	// assign a random category

	return { posts };
};

export const config = { amp: true };

export default Index;
