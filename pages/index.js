const HomePage = ({ products }) => {
	const { list } = products;
	return (
		<div>
			{list.map((list, i) => {
				return <p key={i}>{list.name}</p>;
			})}
		</div>
	);
};

export async function getStaticProps() {
	const res = await fetch("http://localhost:3000/api/products");
	const products = await res.json();

	return {
		props: {
			products,
		},
	};
}

export default HomePage;
