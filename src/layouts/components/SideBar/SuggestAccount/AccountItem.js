import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import style from './SuggestAccount.module.scss';
import Image from '~/component/Images/';
import { Checked } from '~/component/Icons';
const cx = classNames.bind(style);

function AccountItem({ data }) {
    return (
        <Link to={data.to} className={cx('account-item')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />

            <div className={cx('info')}>
                <div className={cx('nickname')}>
                    <p>{data.nickname}</p>
                    {data.tick && <Checked />}
                </div>
                <p className={cx('name')}>{data.name}</p>
            </div>
        </Link>
    );
}

AccountItem.propTyppes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default AccountItem;
