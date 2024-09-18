import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Footer.module.scss';
const cx = classNames.bind(style);

function FooterItem({ data, active, onClick }) {
    const className = cx('info-item', {
        active,
    });

    return (
        <div onClick={onClick} className={className}>
            <h4>{data.title}</h4>
            {active && (
                <div className={cx('info-link')}>
                    {data.link.map((link) => (
                        <a key={link.title} target="_blank" href={link.href} rel="noreferrer">
                            {link.title}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

FooterItem.propTypes = {
    data: PropTypes.object.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default FooterItem;
