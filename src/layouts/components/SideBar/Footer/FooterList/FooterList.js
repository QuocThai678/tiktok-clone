import { useState } from 'react';
import PropTypes from 'prop-types';
import FooterItem from './FooterItem';
import classNames from 'classnames/bind';
import style from './Footer.module.scss';

const cx = classNames.bind(style);
function FooterList({ data }) {
    const [active, setActive] = useState(null);
    const handleActive = (index) => {
        setActive((pre) => (pre === index ? null : index));
    };
    return (
        <div className={cx('info-list')}>
            {data.map((info, index) => (
                <FooterItem
                    active={index === active}
                    onClick={() => handleActive(index)}
                    key={info.title}
                    data={info}
                />
            ))}
        </div>
    );
}

FooterList.propTypes = {
    data: PropTypes.array.isRequired,
};

export default FooterList;
