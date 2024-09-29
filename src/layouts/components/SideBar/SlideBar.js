import { useState, useEffect } from 'react';
import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';

import SuggestAccount from './SuggestAccount';
import { USER_NAV_SIDEBAR, NAV_SIDEBAR, INIT_PAGE, PER_PAGE } from '~/component/constants';
import Button from '~/component/Button';
import Footer from './Footer';
import * as userService from '~/services/userService';
const cx = classNames.bind(styles);

function SideBar({ isLogin }) {
    let NavSideBar = NAV_SIDEBAR;
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const data = await userService.getSuggested({ page, perPage: PER_PAGE });
                setSuggestedUser((pre) => [...pre, ...data]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchAPI();
    }, [page]);

    if (isLogin) {
        NavSideBar = USER_NAV_SIDEBAR;
    }

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {NavSideBar.map((user) => {
                    if (user.avt) {
                        return <MenuItem key={user.title} avt title={user.title} to={user.to} icon={user.icon} />;
                    } else if (user.wrap) {
                        return (
                            <MenuItem
                                key={user.title}
                                wrap
                                title={user.title}
                                to={user.to}
                                icon={user.icon}
                                iconActive={user.iconActive}
                            />
                        );
                    } else {
                        return (
                            <MenuItem
                                key={user.title}
                                title={user.title}
                                to={user.to}
                                icon={user.icon}
                                iconActive={user.iconActive}
                            />
                        );
                    }
                })}
            </Menu>

            {isLogin ? (
                <>
                    <SuggestAccount data={suggestedUser} />
                    <span onClick={() => setPage(page + 1)} className={cx('more')}>
                        Xem thêm
                    </span>
                </>
            ) : (
                <div className={cx('introduce')}>
                    <p>Đăng nhập để follow các tác giả, thích video và xem bình luận. </p>
                    <Button large outline>
                        Đăng nhập
                    </Button>
                </div>
            )}

            <Footer />
        </aside>
    );
}

export default SideBar;
