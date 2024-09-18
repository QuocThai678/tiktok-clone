import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import style from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Checked, Report, Suitable } from '~/component/Icons';
import Images from '~/component/Images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Images className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <Checked />}
                </p>
                <span className={cx('username')}>{data.nickname}</span>
            </div>

            <Tippy
                placement="bottom-end"
                interactive
                offset={[8, 0]}
                render={(attrs) => (
                    <div className={cx('popup-container')} tabIndex="-1" {...attrs}>
                        <p className={cx('feedback')}>
                            <Report />
                            <span>Báo cáo</span>
                        </p>

                        <p className={cx('feedback')}>
                            <Suitable />
                            <span>Đánh dấu là không phù hợp</span>
                        </p>
                    </div>
                )}
            >
                <div className={cx('more-info')}>
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
            </Tippy>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
