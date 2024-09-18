import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Search.module.scss';

import AccountItem from '../components/AccountItem';
import * as searchServices from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/component/Icons';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(style);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounceValue) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            try {
                setLoading(true);
                const result = await searchServices.search(debounceValue);
                setSearchResult(result);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchApi();

        setLoading(true);
    }, [debounceValue]);

    const handleClear = () => {
        inputRef.current.focus();
        setSearchResult([]);
        setSearchValue('');
    };

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        //Using a wrapper <div> tag around the reference element solves
        //this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                onClickOutside={handleHideResult}
                interactive
                offset={[0, 8]}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Tài khoản</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value.trimStart())}
                        placeholder="Tìm kiếm "
                        spellCheck={false}
                        onFocus={() => setShowResult(true)}
                    />
                    {searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <ClearIcon />
                        </button>
                    )}
                    {loading && <LoadingIcon className={cx('loading')} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
