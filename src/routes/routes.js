import configs from '~/config';
import { Fragment } from 'react';
import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Feedback from '~/pages/Feedback';
import Explore from '~/pages/Explore';
import Friends from '~/pages/Friends';
import Live from '~/pages/Live';

const publicRoutes = [
    { path: configs.routes.home, component: Home },
    { path: configs.routes.following, component: Following },
    { path: configs.routes.profile, component: Profile },
    { path: configs.routes.upload, component: Upload, layout: HeaderOnly },
    { path: configs.routes.search, component: Search, layout: Fragment },
    { path: configs.routes.feedback, component: Feedback, layout: HeaderOnly },
    { path: configs.routes.explore, component: Explore },
    { path: configs.routes.friends, component: Friends },
    { path: configs.routes.live, component: Live },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
