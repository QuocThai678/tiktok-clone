import classNames from 'classnames/bind';
import style from './SuggestAccount.module.scss';
import AccountItem from './AccountItem';
const cx = classNames.bind(style);

function SuggestAccounts({ data }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>Đề xuất cho bạn</p>

            {data.map((user) => (
                <AccountItem key={user.id} data={user} />
            ))}
        </div>
    );
}

export default SuggestAccounts;
