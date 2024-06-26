import Layout from "@common/components/layout";
import { Container } from "@material-ui/core";

import ProductDetailCard from "@mobile/components/ProductDetailCard";

const ProductDetail = ({ product }) => {
	const {
		img,
		name,
		price,
		rating,
		sold,
		description,
		quantity,
		condition,
		weight,
		promo,
	} = product;
	return (
		<Layout>
			<Container maxWidth="sm">
				<ProductDetailCard
					img={img}
					title={name}
					price={price}
					rating={rating}
					sold={sold}
					description={description}
					quantity={quantity}
					condition={condition}
					weight={weight}
					promo={promo}
				/>
			</Container>
		</Layout>
	);
};

export async function getStaticPaths() {
	const res = await fetch(
		`${
			process.env.NODE_ENV === "development"
				? "http://localhost:3000"
				: process.env.API_URI
		}/api/products`
	);
	const products = await res.json();

	const paths = products.list.map((prod) => `/product/${prod.id}`);

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await fetch(
		`${
			process.env.NODE_ENV === "development"
				? "http://localhost:3000"
				: process.env.API_URI
		}/api/product/${params.id}`
	);
	const product = await res.json();

	return {
		props: {
			product,
		},
	};
}

export default ProductDetail;
