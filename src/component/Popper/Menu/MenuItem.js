import PropTypes from 'prop-types';
import style from './Menu.module.scss';
import classNames from 'classnames/bind';

import Button from '~/component/Button';

const cx = classNames.bind(style);

function MenuItem({ data, onClick }) {
    const classes = cx('btn-item', {
        separate: data.separate,
    });
    return (
        <Button className={cx(classes)} onClick={onClick} LeftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
