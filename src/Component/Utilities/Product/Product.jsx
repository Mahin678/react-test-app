import React from 'react';
import './Product.scss';
const Product = ({ info }) => {
	const { img, title, off, price } = info;
	return (
		<div className="product">
			<div className="product--content">
				<img src={img} alt="img" />
				<h6>{title}</h6>
				<h5>BDT. {price}</h5>
				<div className="product--content--footer">
					<h6 className="off">BDT. {price}</h6>
					<h6>{off} Off</h6>
				</div>
			</div>
		</div>
	);
};

export default Product;
