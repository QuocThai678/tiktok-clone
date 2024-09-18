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
import { CURRENT_USER, MENU_ITEMS, USER_MENU } from '~/component/constants';
const cx = classNames.bind(style);

function Header() {
    const handleMenuChange = (item) => {
        console.log(item);
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
                    {CURRENT_USER ? (
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

                    <Menu onChange={handleMenuChange} items={CURRENT_USER ? USER_MENU : MENU_ITEMS}>
                        {CURRENT_USER ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/6584be374a433a4c359ef31fd5f5a570.jpeg?lk3s=a5d48078&nonce=44848&refresh_token=a39435c4709c9984d8c9fae8546bbb79&x-expires=1725336000&x-signature=tZDu7tYBpTXuptR8FSiebNEwQVc%3D&shp=a5d48078&shcp=81f88b70"
                                alt="Lê Quốc Thái"
                                fallback="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/77f8ba2df92f7c1f6c6b955cb7fa761d.jpeg?lk3s=a5d48078&nonce=84558&refresh_token=2c12591b6b8dd7c205d414fc85ffa9d2&x-expires=1725379200&x-signature=IRgpnIFtmxruNADEpupwQWuTwcE%3D&shp=a5d48078&shcp=81f88b70"
                            />
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
