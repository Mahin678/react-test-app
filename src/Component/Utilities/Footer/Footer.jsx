import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
	return (
		<div className="mt-5">
			<div>
				<Container>
					<Row>
						<Col lg={3} className="p-0 pt-4">
							graphics content
						</Col>
						<Col lg={5} className="p-0 pt-4">
							<div>
								<h6>SUBSCRIBE</h6>
								<h6>Get the latest news from zDrop</h6>
								<input
									type="text"
									Placeholder="Subscribe"
									className="form-control w-75"
									style={{
										borderTop: 'none',
										borderLeft: 'none',
										borderRight: 'none',
									}}
								/>
							</div>
						</Col>
						<Col lg={4} className="p-0 pt-4">
							<div>
								<h6>CONTACT US</h6>
								<p>
									<span className="d-block font-weight-bold">
										Hotline
									</span>
									+8801929459195 (10am-10pm/Sat-Thur)
								</p>
								<p>
									<span className="d-block font-weight-bold">
										Whole Sales :
									</span>
									01929459195 (10am-12pm)
								</p>
								<p>
									<span className="d-block font-weight-bold">
										Email :
									</span>
									support@example.com
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Footer;
