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
    const [volumeValue, setVolumeValue] = useState(0);
    const [preVolume, setPreVolume] = useState(
        localStorage.getItem('preVolume') === null ? 100 : Number(localStorage.getItem('preVolume')),
    );

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
        if (videoForYou.length > 0 && videoForYou.length < 16) {
            const navigationType = performance.getEntriesByType('navigation')[0].type;
            if (navigationType === 'navigate') {
                setPreVolume(100);
                localStorage.setItem('preVolume', 100);
            }

            videoRef.current.forEach((video) => video.muted());
            videoRef.current[currenVideoIndex].play();
            setIsPlay(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoForYou.length]);

    useEffect(() => {
        if (videoForYou.length > 0 && !isMuted) {
            videoRef.current.forEach((video) => video.unmuted());
        }
    }, [isMuted, videoForYou.length]);

    useEffect(() => {
        videoRef.current.forEach((video, index) => {
            if (index === currenVideoIndex) {
                video.replay();
                setIsPlay(true);
            } else {
                video.pause();
            }
        });
    }, [currenVideoIndex]);

    const loadMorePost = () => {
        if (videoForYou.length > 0) {
            setPage(randomPage());
        }
    };

    const handleChangeVideo = (swiper) => {
        setCurrentVideoIndex(swiper.activeIndex);
    };

    const hanleChangeVolume = (e) => {
        const numValue = Number(e.target.value);
        setVolumeValue(numValue);

        localStorage.setItem('preVolume', numValue);
        videoRef.current.forEach((video) => {
            video.changeVolume(numValue);
        });
        if (numValue === 0) {
            setIsMuted(true);

            setPreVolume(0);
            localStorage.setItem('preVolume', 0);
            videoRef.current.forEach((video) => video.muted());
        } else {
            if (isMuted) {
                setIsMuted(false);
            }
        }
    };

    const handleTogglePlay = useCallback(() => {
        videoRef.current[currenVideoIndex].togglePlay();
        setIsPlay(!isPlay);
    }, [currenVideoIndex, isPlay]);

    const handleToggleMuted = useCallback(() => {
        videoRef.current.forEach((video) => video.toggleMuted());
        setIsMuted(!isMuted);

        setVolumeValue(() => {
            if (!isMuted) {
                setPreVolume(volumeValue);

                localStorage.setItem('preVolume', volumeValue);

                videoRef.current.forEach((video) => video.changeVolume(0));

                return 0;
            } else {
                videoRef.current.forEach((video) => video.changeVolume(preVolume));

                return preVolume;
            }
        });
    }, [isMuted, preVolume, volumeValue]);

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
                        hanleChangeVolume={hanleChangeVolume}
                        handleTogglePlay={handleTogglePlay}
                        handleToggleMuted={handleToggleMuted}
                        volumeValue={volumeValue}
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
