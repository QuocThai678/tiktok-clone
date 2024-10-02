import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useImperativeHandle, useRef } from 'react';
import { forwardRef } from 'react';
import style from './PostList.module.scss';
import classNames from 'classnames/bind';

import Image from '~/component/Images';
import { Heart, Comment, BookMark, Share, Plus, UnMuted, Muted, Play, Pause } from '~/component/Icons';

const cx = classNames.bind(style);

const PostItem = forwardRef(
    ({ data, handleTogglePlay, handleToggleMuted, hanleChangeVolume, isPlay, isMuted, volumeValue }, ref) => {
        const videoRef = useRef();
        const [isLoading, setIsLoading] = useState(false);
        const [progress, setProgress] = useState(0);
        useEffect(() => {
            const currentVideo = videoRef.current;

            const handleWaiting = () => setIsLoading(true);
            const handleCanPlay = () => {
                setIsLoading(false);
            };
            const handleTimeUpdate = () => {
                setProgress(Math.ceil((currentVideo.currentTime / currentVideo.duration) * 100));
            };

            currentVideo.addEventListener('waiting', handleWaiting);
            currentVideo.addEventListener('stalled', handleWaiting);
            currentVideo.addEventListener('canplay', handleCanPlay);
            currentVideo.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                currentVideo.removeEventListener('waiting', handleWaiting);
                currentVideo.removeEventListener('canplay', handleCanPlay);
                currentVideo.removeEventListener('stalled', handleWaiting);
                currentVideo.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }, []);

        const handleSeek = (e) => {
            const seekTime = (e.target.value / 100) * videoRef.current.duration;
            videoRef.current.currentTime = seekTime;
            setProgress(Math.ceil(e.target.value));
        };

        useImperativeHandle(ref, () => ({
            play() {
                videoRef.current.play();
            },
            pause() {
                videoRef.current.pause();
            },
            replay() {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            },
            togglePlay() {
                if (videoRef.current.paused) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            },

            muted() {
                videoRef.current.muted = true;
            },
            unmuted() {
                videoRef.current.muted = false;
            },
            toggleMuted() {
                videoRef.current.muted = !videoRef.current.muted;
            },
            changeVolume(value) {
                videoRef.current.volume = value / 100;
            },
        }));

        return (
            <div className={cx('post-item')}>
                <div className={cx('video')}>
                    <div className={cx('controls')}>
                        <div className={cx('control-item-volume')}>
                            {isMuted ? <UnMuted onClick={handleToggleMuted} /> : <Muted onClick={handleToggleMuted} />}
                            <div className={cx('volume')}>
                                <div className={cx('volume-wrap')}>
                                    <input
                                        onInput={hanleChangeVolume}
                                        value={volumeValue}
                                        type="range"
                                        min="0"
                                        max="100"
                                        aria-label="Seek through volume"
                                    />
                                    <div className={cx('range-volume')} style={{ width: `${volumeValue}%` }} />
                                    <div className={cx('volume-container')} />
                                </div>
                            </div>
                        </div>

                        <div onClick={handleTogglePlay} className={cx('control-item-play')}>
                            {isPlay ? <Pause /> : <Play />}
                        </div>
                    </div>

                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onInput={handleSeek}
                        className={cx('seek-bar')}
                        aria-label="Seek through video"
                    />
                    <div className={cx('range')} style={{ width: `${progress}%` }} />
                    <div className={cx('range-container')} />
                    <video muted loop ref={videoRef} src={data.file_url} />
                    <div className={cx('info')}>
                        <h4>{data.user.nickname}</h4>
                        <p>{data.description}</p>
                    </div>

                    {isLoading && (
                        <div className={cx('loadingItem')}>
                            <div />
                            <div />
                        </div>
                    )}
                </div>

                <div className={cx('actions')}>
                    <div className={cx('avt')}>
                        <Image src={data.user.avatar} alt={data.user.nickname} />
                        <span className={cx('quick-follow')}>
                            <Plus />
                        </span>
                    </div>

                    <div className={cx('action-item')}>
                        <div className={cx('icon')}>
                            <Heart />
                        </div>
                        <span>{data.likes_count}</span>
                    </div>

                    <div className={cx('action-item')}>
                        <div className={cx('icon')}>
                            <Comment />
                        </div>
                        <span>{data.comments_count}</span>
                    </div>

                    <div className={cx('action-item')}>
                        <div className={cx('icon')}>
                            <BookMark />
                        </div>
                        <span>{data.views_count}</span>
                    </div>

                    <div className={cx('action-item')}>
                        <div className={cx('icon')}>
                            <Share />
                        </div>
                        <span>{data.shares_count}</span>
                    </div>
                </div>
            </div>
        );
    },
);

PostItem.propTypes = {
    data: PropTypes.object.isRequired,
    handleTogglePlay: PropTypes.func.isRequired,
    handleToggleMuted: PropTypes.func.isRequired,
    isPlay: PropTypes.bool.isRequired,
    isMuted: PropTypes.bool.isRequired,
};

export default memo(PostItem);
