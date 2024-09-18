import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style);

function MenuItem({ title, to, icon, iconActive, wrap, avt }) {
    return (
        <NavLink
            className={(nav) =>
                cx('menu-item', {
                    active: nav.isActive,
                })
            }
            to={to}
        >
            {avt ? (
                icon
            ) : (
                <>
                    <span
                        className={cx('icon', {
                            wrap,
                        })}
                    >
                        {icon}
                    </span>
                    <span
                        className={cx('active-icon', {
                            wrap,
                        })}
                    >
                        {iconActive}
                    </span>
                </>
            )}

            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
    icon: PropTypes.node.isRequired,
    iconActive: PropTypes.node,
    wrap: PropTypes.bool,
};

export default MenuItem;
