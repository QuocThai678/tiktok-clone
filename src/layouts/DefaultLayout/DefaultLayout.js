import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import { CURRENT_USER } from '~/component/constants';
import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/SideBar';
import { useState } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [isLogin, setIsLogin] = useState(CURRENT_USER);

    const handleLogout = () => {
        setIsLogin(false);
    };

    return (
        <div className={cx('wrapper')}>
            <Header handleLogout={handleLogout} isLogin={isLogin} />
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <SideBar isLogin={isLogin} />
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
