import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import style from './Footer.module.scss';

import Images from '~/component/Images';
import FooterList from './FooterList/FooterList';
import { FOOTER_INFO } from '~/component/constants';
const cx = classNames.bind(style);

function Footer() {
    return (
        <div className={cx('footer-container')}>
            <a
                target="_blank"
                className={cx('footer-banner')}
                href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v1&utm_source=tiktok_webapp_main"
                alt="creator-tiktok-effect"
                rel="noreferrer"
            >
                <Images
                    src={
                        'https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png'
                    }
                    alt={'create-tiktok-effect'}
                />

                <div className={cx('create-text')}>
                    <p>Tạo hiệu ứng Tiktok, nhận phần thưởng</p>
                </div>
            </a>

            <FooterList data={FOOTER_INFO} />

            <div className={cx('more-container')}>
                <Tippy
                    interactive
                    placement="top-start"
                    animation="true"
                    onMount={(instance) => {
                        const tooltipBox = instance.popper;
                        tooltipBox.classList.add('fade-in');
                        tooltipBox.classList.remove('fade-out');
                    }}
                    onHide={(instance) => {
                        const tooltipBox = instance.popper;
                        tooltipBox.classList.add('fade-out');
                        setTimeout(() => {
                            instance.unmount();
                            tooltipBox.classList.remove('fade-in');
                        }, 200);
                    }}
                    render={(attrs) => (
                        <div className={cx('more-link')} tabIndex="-1" {...attrs}>
                            <a
                                href="https://www.tiktok.com/legal/page/global/law-enforcement/vi"
                                target="_blank"
                                rel="noreferrer"
                            >
                                NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
                            </a>
                        </div>
                    )}
                >
                    <span>Thêm</span>
                </Tippy>
            </div>

            <span className={cx('coppy-right')}>© 2024 TikTok</span>
        </div>
    );
}

export default Footer;
