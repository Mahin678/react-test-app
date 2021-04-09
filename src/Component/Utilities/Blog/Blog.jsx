import React from 'react';
import './Blog.scss';
const Blog = ({ info }) => {
	const { img, date, type } = info;
	return (
		<div className="blog">
			<div className="blog--content">
				<img src={img} alt="img" />
				<button>{type}</button>
				<div className="blog--content--body">
					<div className="blog--content--footer align-self-end">
						<p className="mb-0">{date}</p>
						<p className="mb-0">25</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
