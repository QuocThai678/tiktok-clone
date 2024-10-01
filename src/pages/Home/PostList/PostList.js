import { useCallback, useEffect, useRef, useState } from 'react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import * as videoService from '~/services/videoService';
import PostItem from './PostItem';
import style from './PostList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

let paged = [];

const randomPage = () => {
    const allPost = 43;

    if (paged.length >= allPost) {
        paged = [];
    }
    let randomPage;
    do {
        randomPage = Math.floor(Math.random() * allPost);
    } while (paged.includes(randomPage));

    paged.push(randomPage);

    return randomPage;
};

function PostList() {
    const videoRef = useRef([]);
    const [currenVideoIndex, setCurrentVideoIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(randomPage());
    const [isPlay, setIsPlay] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [videoForYou, setVideoForYou] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true);
                const videoList = await videoService.getListVideo('for-you', page);
                setVideoForYou((prev) => [...prev, ...videoList]);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, [page]);

    useEffect(() => {
        if (videoForYou.length > 0) {
            videoRef.current[0].play();
            setIsPlay(true);
        }
    }, [videoForYou.length]);

    useEffect(() => {
        if (videoForYou.length > 0 && !isMuted) {
            videoRef.current.forEach((video) => video.unmuted());
        }
    }, [isMuted, videoForYou.length]);

    useEffect(() => {
        videoRef.current.forEach((video, index) => {
            if (index === currenVideoIndex) {
                video.play();
                setIsPlay(true);
            } else {
                video.pause();
            }
        });
    }, [currenVideoIndex]);

    const loadMorePost = () => {
        if (videoForYou.length > 0) {
            console.log('loading...');
            setPage(randomPage());
        }
    };

    const handleChangeVideo = (swiper) => {
        setCurrentVideoIndex(swiper.activeIndex);
    };

    const handleTogglePlay = useCallback(() => {
        videoRef.current[currenVideoIndex].togglePlay();
        setIsPlay(!isPlay);
    }, [currenVideoIndex, isPlay]);

    const handleToggleMuted = useCallback(() => {
        videoRef.current.forEach((video) => video.toggleMuted());
        setIsMuted(!isMuted);
    }, [isMuted]);

    return (
        <Swiper
            onReachEnd={loadMorePost}
            onSlideChange={handleChangeVideo}
            direction="vertical"
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            keyboard={{ enabled: true }}
            className={cx('post-list')}
            modules={[Pagination, Mousewheel, Keyboard]}
        >
            {videoForYou.map((data, index) => (
                <SwiperSlide key={index} style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-end' }}>
                    <PostItem
                        handleTogglePlay={handleTogglePlay}
                        handleToggleMuted={handleToggleMuted}
                        isMuted={isMuted}
                        isPlay={isPlay}
                        ref={(el) => (videoRef.current[index] = el)}
                        data={data}
                    />
                </SwiperSlide>
            ))}

            {loading && (
                <div className={cx('loadingList')}>
                    <div />
                    <div />
                </div>
            )}
        </Swiper>
    );
}

export default PostList;
