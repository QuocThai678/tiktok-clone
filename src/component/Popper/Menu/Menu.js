import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
const cx = classNames.bind(style);
const defaultFn = () => {};

function Menu({ children, items = {}, onChange = defaultFn, hideOnClick = false }) {
    const [history, setHistory] = useState([items]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                    key={index}
                    data={item}
                />
            );
        });
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    const renderResult = (attrs) => (
        <div className={cx('menu-account')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-header')}>
                {history.length > 1 && <Header onBack={handleBack} title={current.title} />}
                <div className={cx('list-item')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    // Reset to first page
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            hideOnClick={hideOnClick}
            interactive
            delay={[0, 500]}
            placement="top-end"
            offset={[12, 12]}
            animation="true"
            onMount={(instance) => {
                const tooltipBox = instance.popper;
                tooltipBox.classList.add('fade-in');
                tooltipBox.classList.remove('fade-out');
            }}
            onHide={(instance) => {
                const tooltipBox = instance.popper;
                tooltipBox.classList.add('fade-out');
                setTimeout(() => {
                    instance.unmount();
                    tooltipBox.classList.remove('fade-in');
                    handleResetMenu();
                }, 200);
            }}
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};
export default Menu;
