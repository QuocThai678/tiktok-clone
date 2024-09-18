import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    className,
    primary = false,
    outline = false,
    large = false,
    small = false,
    rounded = false,
    disabled = false,
    LeftIcon,
    RightIcon,
    children,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        ...passProps,
    };

    //Remove event when button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        large,
        small,
        disabled,
        rounded,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {LeftIcon && <LeftIcon className={cx('icon')} />}
            <span className={cx('title')}>{children}</span>
            {RightIcon && <RightIcon className={cx('icon')} />}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    LeftIcon: PropTypes.elementType,
    RightIcon: PropTypes.elementType,
    children: PropTypes.node.isRequired,
};

export default Button;
