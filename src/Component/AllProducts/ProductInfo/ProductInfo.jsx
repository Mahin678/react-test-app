import React from 'react';
import './ProductInfo.scss';

import { IoCloseOutline } from 'react-icons/io5';
const ProductInfo = () => {
	return (
		<div className="productInfo">
			<div className="productInfo--content">
				<div className="productInfo--content--filter">
					<h6>Filters</h6>
					<div
						style={{ width: '150px' }}
						className=" text-center productInfo--content--filter--stock"
					>
						<p>Out of Stock</p>
						<button className="close-btn">
							<IoCloseOutline />
						</button>
					</div>
					<div
						style={{ width: '110px' }}
						className=" pl-3 productInfo--content--filter--stock"
					>
						<p>Size: XL</p>
						<button className="close-btn">
							<IoCloseOutline />
						</button>
					</div>
					<button>Clear all</button>
				</div>
				<div className="productInfo--content--category">
					<h6>Category</h6>
				</div>
				<div>Fabric</div>
			</div>
		</div>
	);
};

export default ProductInfo;
