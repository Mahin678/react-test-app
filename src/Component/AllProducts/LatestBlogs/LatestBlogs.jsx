import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import img1 from '../../../assets/Hair-Care.png';
import img2 from '../../../assets/26801830821918.png';
import img3 from '../../../assets/26824312324126.png';
import img4 from '../../../assets/Image 117.png';
import Blog from '../../Utilities/Blog/Blog';
import './LatestBlogs.scss';
const data = [
	{ img: img1, title: '', date: 'Oct 12, 2020', article: '25', type: 'news' },
	{ img: img2, title: '', date: 'Oct 12, 2020', article: '25', type: 'news' },
	{ img: img3, title: '', date: 'Oct 12, 2020', article: '25', type: 'news' },
	{
		img: img4,
		title: '',
		date: 'Oct 12, 2020',
		article: '25',
		type: 'Sports',
	},
];

const LatestBlogs = () => {
	return (
		<div className="latestBlog">
			<div className="latestBlog--content">
				<h5>LATEST BLOGS</h5>
				<p>
					This is a place devoted to giving you deeper insight into the
					news, trends, people and technology behind Bing.
				</p>
				<div className="latestBlog--content--slider">
					<Swiper
						spaceBetween={50}
						slidesPerView={4}
						navigation
						pagination={{ clickable: true }}
						onSlideChange={() => console.log('slide change')}
						onSwiper={(swiper) => console.log(swiper)}
					>
						{data.map((info, i) => (
							<SwiperSlide key={i}>
								<Blog info={info} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default LatestBlogs;
