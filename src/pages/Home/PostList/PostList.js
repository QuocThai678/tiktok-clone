import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Mousewheel } from 'swiper/modules';

import * as videoService from '~/services/videoService';
import PostItem from './PostItem';
import style from './PostList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function PostList() {
    const videoRef = useRef([]);
    const [videoForYou, setVideoForYou] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const videoList = await videoService.getListVideo('for-you', 1);
                setVideoForYou(videoList);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    const handlePlayVideo = (swiper) => {
        if (videoRef.length > 0) {
            videoRef.current[swiper.activeIndex].play();
        }
    };

    const handleChangeVideo = (swiper) => {
        videoRef.current.forEach((video, index) => {
            if (index === swiper.activeIndex) {
                video.play();
            } else {
                video.pause();
            }
        });
    };

    return (
        <Swiper
            onSwiper={handlePlayVideo}
            onSlideChange={handleChangeVideo}
            direction="vertical"
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            className={cx('post-list')}
            modules={[Pagination, Mousewheel]}
        >
            {videoForYou.map((data, index) => (
                <SwiperSlide key={index} style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-end' }}>
                    <PostItem index={index} ref={videoRef} data={data} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default PostList;
