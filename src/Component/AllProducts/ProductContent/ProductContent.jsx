import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../assets/8e-300x300.png';
import img2 from '../../../assets/4a-300x300.png';
import img3 from '../../../assets/1a-300x300.png';
import Product from '../../Utilities/Product/Product';
const data = [
	{
		img: img1,
		title: 'Multicolor Cotton longs leeve shirt for men',
		price: '7,850',
		off: '34%',
	},
	{
		img: img2,
		title: 'Multicolor Cotton longs leeve shirt for men',
		price: '7,850',
		off: '34%',
	},
	{
		img: img3,
		title: 'Multicolor Cotton longs leeve shirt for men',
		price: '7,850',
		off: '34%',
	},
	{
		img: img1,
		title: 'Multicolor Cotton longs leeve shirt for men',
		price: '7,850',
		off: '34%',
	},
	{
		img: img1,
		title: 'Multicolor Cotton longs leeve shirt for men',
		price: '7,850',
		off: '34%',
	},
];
const ProductContent = () => {
	return (
		<div>
			<Container>
				<Row>
					{data.map((info, i) => (
						<Col lg={3} className="p-0 pt-4" key={i}>
							<Product info={info} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default ProductContent;
