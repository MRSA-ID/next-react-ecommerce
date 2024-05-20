import Layout from "@common/components/layout";
import { Container, Grid } from "@material-ui/core";
import ProductCard from "@common/components/ProductCard";

const HomePage = ({ products }) => {
	const { list } = products;
	return (
		<Layout>
			<Container maxWidth="sm">
				<Grid
					container
					spacing={2}>
					{list.map((list) => {
						return (
							<Grid
								key={list.id}
								item
								xs={6}
								sm={6}>
								<ProductCard
									productID={list.id}
									img={list.img}
									title={list.name}
									promoLabel={list.promo}
									price={list.price}
									rating={list.rating}
									sold={list.sold}
								/>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</Layout>
	);
};

export async function getStaticProps() {
	const res = await fetch(
		`${
			process.env.NODE_ENV === "development"
				? "http://localhost:3000"
				: process.env.API_URI
		}/api/products`
	);
	const products = await res.json();

	return {
		props: {
			products,
		},
	};
}

export default HomePage;
