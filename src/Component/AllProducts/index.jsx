import { Tab } from 'bootstrap';
import React from 'react';
import { Col, Container, NavLink, Row, Tabs } from 'react-bootstrap';
import AllProductHead from './AllProductHeader/AllProductHead';
import ProductContent from './ProductContent/ProductContent';
import ProductInfo from './ProductInfo/ProductInfo';
import './AllProducts.scss';
import LatestBlogs from './LatestBlogs/LatestBlogs';
import Social from './Social/Social';
import Footer from '../Utilities/Footer/Footer';
const index = () => {
	return (
		<>
			<div className="container top-header">
				<div className="top-header--main">
					<NavLink to="/">Homepage</NavLink>
					<NavLink to="/">All products</NavLink>
				</div>
				<AllProductHead />
				<div className="">
					<Container>
						<Row>
							<Col lg={3} className="pl-0 pr-3 mt-4">
								<ProductInfo />
							</Col>
							<Col lg={9} className="px-0">
								<ProductContent />
							</Col>
						</Row>
					</Container>
				</div>
				<LatestBlogs />
			</div>
			<hr />
			<Social />
			<Footer />
		</>
	);
};

export default index;
