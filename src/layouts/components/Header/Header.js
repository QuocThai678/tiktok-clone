import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import configs from '~/config/';
import Menu from '~/component/Popper/Menu';
import Search from '../Search';
import { Message, MoreIcon, Notification, UploadIcon } from '~/component/Icons';
import Button from '~/component/Button';
import style from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/component/Images';
import { MENU_ITEMS, USER_MENU } from '~/component/constants';
const cx = classNames.bind(style);

function Header({ isLogin, handleLogout }) {
    const handleMenuChange = (item) => {
        if (item.title === 'Đăng xuất') {
            handleLogout();
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={configs.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok"></img>
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {isLogin ? (
                        <>
                            <button className={cx('upload-btn')}>
                                <UploadIcon />
                                <span>Tải lên</span>
                            </button>

                            <Tippy content="Tin nhắn" placement="bottom">
                                <button className={cx('message-btn')}>
                                    <Message />
                                </button>
                            </Tippy>

                            <Tippy content="Hộp thư" placement="bottom">
                                <button className={cx('noti-btn')}>
                                    <Notification />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}

                    <Menu onChange={handleMenuChange} items={isLogin ? USER_MENU : MENU_ITEMS}>
                        {isLogin ? (
                            <Image className={cx('user-avatar')} src={images.avatar} alt="Lê Quốc Thái" />
                        ) : (
                            <MoreIcon className={cx('more-icon')} />
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
