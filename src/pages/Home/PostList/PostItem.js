import { useImperativeHandle, useRef } from 'react';
import { forwardRef } from 'react';
import style from './PostList.module.scss';
import classNames from 'classnames/bind';

import Image from '~/component/Images';
import { Heart, Comment, BookMark, Share, Plus, UnMuted, Muted, Play, Pause } from '~/component/Icons';

const cx = classNames.bind(style);

const PostItem = forwardRef(({ data, handleTogglePlay, handleToggleMuted, isPlay, isMuted }, ref) => {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },

        togglePlay() {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        },

        unmuted() {
            videoRef.current.muted = false;
        },

        toggleMuted() {
            videoRef.current.muted = !videoRef.current.muted;
        },
    }));

    return (
        <div className={cx('post-item')}>
            <div className={cx('video')}>
                <div className={cx('controls')}>
                    <div onClick={handleToggleMuted} className={cx('control-item')}>
                        {isMuted ? <UnMuted /> : <Muted />}
                    </div>

                    <div onClick={handleTogglePlay} className={cx('control-item')}>
                        {isPlay ? <Pause /> : <Play />}
                    </div>
                </div>
                <video muted loop ref={videoRef} src={data.file_url} />
                <div className={cx('info')}>
                    <h4>{data.user.nickname}</h4>
                    <p>{data.description}</p>
                </div>
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
});

export default PostItem;
