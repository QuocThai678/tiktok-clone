import PostList from './PostList';
import style from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Home() {
    return (
        <div className={cx('content')}>
            <PostList />
        </div>
    );
}

export default Home;
