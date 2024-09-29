import Image from '../Images/';
import configs from '~/config/';
import {
    Creator,
    Coin,
    Setting,
    User,
    Language,
    FeedBack,
    DarkMode,
    Logout,
    HomeRegular,
    HomeActive,
    ExploreRegular,
    ExploreActive,
    FollowRegular,
    FollowActive,
    FriendRegular,
    FriendActive,
    LiveRegular,
    LiveActive,
} from '~/component/Icons';
import config from '~/config';
import images from '~/assets/images';
export const CURRENT_USER = true;
export const INIT_PAGE = 1;
export const PER_PAGE = 5;
export const MENU_ITEMS = {
    data: [
        {
            icon: Creator,
            title: 'Công cụ dành cho nhà sáng tạo',
        },
        {
            icon: Language,
            title: 'Tiếng Việt',
            children: {
                title: 'Ngôn ngữ',
                data: [
                    {
                        code: 'vi',
                        title: 'Tiếng Việt (Việt Nam)',
                    },

                    {
                        code: 'en',
                        title: 'English',
                    },
                ],
            },
        },

        {
            icon: FeedBack,
            title: 'Phản hồi và trợ giúp',
            to: configs.routes.feedback,
        },

        {
            icon: DarkMode,
            title: 'Chế độ tối',
        },
    ],
};

export const USER_MENU = {
    data: [
        {
            icon: User,
            title: 'Xem hồ sơ',
        },

        {
            icon: Coin,
            title: 'Nhận xu',
        },

        {
            icon: Setting,
            title: 'Cài đặt',
            to: '/settings',
        },

        ...MENU_ITEMS.data,

        {
            icon: Logout,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ],
};

export const NAV_SIDEBAR = [
    {
        title: 'Dành cho bạn',
        to: config.routes.home,
        icon: <HomeRegular />,
        iconActive: <HomeActive />,
    },

    {
        title: 'Khám phá',
        to: config.routes.explore,
        icon: <ExploreRegular />,
        iconActive: <ExploreActive />,
    },

    {
        title: 'Đang Follow',
        to: config.routes.following,
        icon: <FriendRegular />,
        iconActive: <FriendActive />,
    },

    {
        title: 'LIVE',
        to: config.routes.live,
        icon: <LiveRegular />,
        iconActive: <LiveActive />,
    },
];

export const USER_NAV_SIDEBAR = [
    {
        title: 'Dành cho bạn',
        to: config.routes.home,
        icon: <HomeRegular />,
        iconActive: <HomeActive />,
    },

    {
        title: 'Khám phá',
        to: config.routes.explore,
        icon: <ExploreRegular />,
        iconActive: <ExploreActive />,
    },

    {
        wrap: true,
        title: 'Đang Follow',
        to: config.routes.following,
        icon: <FollowRegular />,
        iconActive: <FollowActive />,
    },

    {
        title: 'Bạn bè',
        to: config.routes.friends,
        icon: <FriendRegular />,
        iconActive: <FriendActive />,
    },

    {
        title: 'LIVE',
        to: config.routes.live,
        icon: <LiveRegular />,
        iconActive: <LiveActive />,
    },

    {
        avt: true,
        title: 'Hồ sơ',
        to: '/@_quocthai__',
        icon: <Image src={images.avatar} alt="@_quocthai__" />,
    },
];

export const FOOTER_INFO = [
    {
        title: 'Công ty',
        link: [
            {
                title: 'Giới thiệu',
                href: 'https://www.tiktok.com/about?lang=vi-VN',
            },

            {
                title: 'Bảng tin',
                href: 'https://newsroom.tiktok.com/vi-vn/',
            },

            {
                title: 'Liên hệ',
                href: 'https://www.tiktok.com/about/contact?lang=vi-VN',
            },

            {
                title: 'Sự nghiệp',
                href: 'https://careers.tiktok.com/',
            },
        ],
    },

    {
        title: 'Chương trình',
        link: [
            {
                title: 'Tiktok for Good',
                href: 'https://www.tiktok.com/for-good/',
            },

            {
                title: 'Quảng cáo',
                href: 'https://www.tiktok.com/business/vi?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web&tt4b_lang_redirect=1&ab_version=experiment_1',
            },

            {
                title: 'TikTok LIVE Creator NewWorks',
                href: 'https://www.tiktok.com/live/creator-networks/vi?enter_from=tiktok_official',
            },

            {
                title: 'Developers',
                href: 'https://developers.tiktok.com/?refer=tiktok_web',
            },

            {
                title: 'Minh bạch',
                href: 'https://www.tiktok.com/transparency/en',
            },

            {
                title: 'Phần thưởng trên TikTok',
                href: 'https://www.tiktok.com/tiktok-rewards/eligibility/',
            },

            {
                title: 'TikTok Embeds',
                href: 'https://www.tiktok.com/embed',
            },
        ],
    },

    {
        title: 'Điều khoản và chính sách',
        link: [
            {
                title: 'Trợ giúp',
                href: 'https://support.tiktok.com/vi',
            },

            {
                title: 'An toàn',
                href: 'https://www.tiktok.com/safety/vi-vn',
            },

            {
                title: 'Điều khoản',
                href: 'https://www.tiktok.com/legal/page/row/terms-of-service/vi',
            },

            {
                title: 'Chính sách Quyền riêng tư',
                href: 'https://www.tiktok.com/legal/page/row/privacy-policy/vi',
            },

            {
                title: 'Accessibility',
                href: 'https://www.tiktok.com/accessibility/en-us/',
            },

            {
                title: 'Trung tâm quyền riêng tư',
                href: 'https://www.tiktok.com/privacy/overview/vi',
            },

            {
                title: 'Creator Academy',
                href: 'https://www.tiktok.com/creator-academy',
            },

            {
                title: 'Hướng dẫn cộng đồng',
                href: 'https://www.tiktok.com/community-guidelines/vi?lang=vi-VN',
            },
        ],
    },
];
