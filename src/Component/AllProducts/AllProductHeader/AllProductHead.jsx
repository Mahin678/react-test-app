import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import './AllProductHead.scss';
import { IoSearchOutline } from 'react-icons/io5';
import SearchImg from '../../.././assets/loupe.png';
const AllProductHead = () => {
	return (
		<div className="AllProductHeadMain">
			<div className="AllProductHeadMain--wrapper">
				<div className="d-flex align-items-center">
					<p className="d-block m-0 mr-5">
						Showing 1 – 40 of 80,068 products
					</p>
					<div className="AllProductHeadMain--wrapper--refine d-flex align-items-center">
						<h6 className="m-0">Refine by</h6>{' '}
						<span className="shape"></span>
						<Form.Group
							controlId="exampleForm.ControlSelect1"
							className="mb-0 ml-2 mr-4 "
						>
							<Form.Control as="select" style={{ border: 'none' }}>
								<option>Price</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</Form.Control>
						</Form.Group>
					</div>
					<div className="AllProductHeadMain--wrapper--sortBy d-flex align-items-center">
						<h6 className="m-0">Sort by</h6>
						<span className="shape"></span>
						<Form.Group
							controlId="exampleForm.ControlSelect1"
							className="mb-0 ml-2 mr-3"
						>
							<Form.Control as="select" style={{ border: 'none' }}>
								<option>Best Sellers</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</Form.Control>
						</Form.Group>
					</div>
				</div>
				<div className="AllProductHeadMain--wrapper--searchBox">
					<InputGroup className="mb-0">
						<FormControl
							placeholder="Search"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
						<InputGroup.Prepend>
							<InputGroup.Text id="basic-addon1">
								<img src={SearchImg} alt="logo" />
							</InputGroup.Text>
						</InputGroup.Prepend>
					</InputGroup>
				</div>
			</div>
		</div>
	);
};

export default AllProductHead;
