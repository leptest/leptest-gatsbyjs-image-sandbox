import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export const ProductPageTemplate = ({
	title,
	goodImage,
	badImage,
}) => {
	return (
		<div className="container-fluid">
			<article className="">
				<Helmet title={`Product | ${title}`} />

				<header>
					<h1 className="">{title}</h1>
				</header>

				<p>{goodImage}</p>
				{/* <img src={goodImage} alt="description" /> */}

				{/* <p>{badImage}</p> */}
				{/* <img
					src={post.frontmatter.image.childImageSharp.responsiveSizes.base64}
					width="100%"
					data-src={post.frontmatter.image.childImageSharp.responsiveSizes.src}
					data-srcset={post.frontmatter.image.childImageSharp.responsiveSizes.srcSet}
					data-sizes={post.frontmatter.image.childImageSharp.responsiveSizes.sizes}
					className="lazyload"
					alt={post.frontmatter.title}
				/> */}

				<Img resolutions={badImage.childImageSharp.resolutions} />

			</article>
		</div>
	);
};

ProductPageTemplate.propTypes = {
	title: PropTypes.string,
};

const ProductPage = ({ data }) => {
	const post = data.markdownRemark;
	console.log('post: ', post);

	return (
		<ProductPageTemplate
			title={post.frontmatter.title}
			goodImage={post.frontmatter.goodImage}
			badImage={post.frontmatter.badImage}
		/>
	);
};
ProductPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default ProductPage;

export const pageQuery = graphql`
	query ProductPageByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				title
				goodImage
				# badImage
				badImage {
					childImageSharp {
						resolutions(width: 50, height: 50) {
							...GatsbyImageSharpResolutions_noBase64
						}
						# sizes(maxWidth: 630) {
						# 	...GatsbyImageSharpSizes
						# }
					}
				}
			}
		}
	}
`;
