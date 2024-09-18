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
export const CURRENT_USER = true;
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

export const SUGGEST_ACCOUNT = [
    {
        userId: 1,
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/7d0f962983109c71d0908c9dab732f5a~c5_100x100.jpeg?lk3s=a5d48078&nonce=24441&refresh_token=decfc6594dff0cccac078003124b3b2b&x-expires=1726041600&x-signature=XKPjjaBzb9XzpTdRNF0DMs7bRbo%3D&shp=a5d48078&shcp=81f88b70',
        nickname: 'yeonbin273',
        name: 'Choi Soobin xinh thế 🍰',
        to: '/@yeonbin273',
        tick: true,
    },

    {
        userId: 2,
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1832325abc4a6cb979d4d4354fc9d408.jpeg?lk3s=a5d48078&nonce=23821&refresh_token=098ba0e05f3c73989ad413e33efed082&x-expires=1726041600&x-signature=Ik1WbwuosHtHdYYVXpn%2FaYqf7%2BE%3D&shp=a5d48078&shcp=81f88b70',
        nickname: 'chinnchinn179',
        name: 'Tuyết Trinh',
        to: '/@chinnchinn179',
    },

    {
        userId: 3,
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7362402064179134496~c5_100x100.jpeg?lk3s=a5d48078&nonce=34082&refresh_token=655b92f785e67bec85ccd11140726aa0&x-expires=1726041600&x-signature=I0M46%2FsBAMKwvc55JDUzo%2F%2ButWI%3D&shp=a5d48078&shcp=81f88b70',
        nickname: 'vncatmv',
        name: 'Vietnamese Cat Music Video',
        to: '/@vncatmv',
    },

    {
        userId: 4,
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/77f8ba2df92f7c1f6c6b955cb7fa761d.jpeg?lk3s=a5d48078&nonce=9147&refresh_token=b4d66fff4ea8761bdfde3a76795cdbf5&x-expires=1726041600&x-signature=tgSZRJQIWJLthj6CeIMHg4WxoRs%3D&shp=a5d48078&shcp=81f88b70',
        nickname: '_hongnhihihi',
        name: 'Nhi Lê',
        to: '/@_hongnhihihi',
        tick: true,
    },

    {
        userId: 5,
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8793c1e0777b341c02c046f628ea3071.jpeg?lk3s=a5d48078&nonce=92964&refresh_token=3a8fc353ccbc6ed58a166ba9e4495e17&x-expires=1726041600&x-signature=XJLY1Lb0ODbwPPaoapAjA%2B%2BSyVo%3D&shp=a5d48078&shcp=81f88b70',
        nickname: 'meyyyyneh',
        name: 'cột sống bất ổn',
        to: '/@meyyyyneh',
    },

    {
        userId: 6,
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b89c59df5e8ad76ced68e6e5d40e1215.jpeg?lk3s=a5d48078&nonce=77793&refresh_token=e9f1e0c5ad8961c663e15eeace7da9fb&x-expires=1726059600&x-signature=rX5cv4BSLP4yZA%2BX33uDq7YNkOA%3D&shp=a5d48078&shcp=81f88b70',
        nickname: 'odaycocampxinh',
        name: 'Ở Đây Có Camp Xinh 🏕️',
        to: '/@odaycocampxinh',
    },

    {
        userId: 7,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7339a34c9b93365cbc7e50531fbe49ee~c5_100x100.jpeg?lk3s=a5d48078&nonce=11672&refresh_token=587157089ad975cf46c81f5f503d1d43&x-expires=1726059600&x-signature=yJf2WGftfrURLLEpKiOaw%2FVN8Y0%3D&shp=a5d48078&shcp=81f88b70',
        nickname: 'twojewscomedy',
        name: 'twojewscomedy',
        to: '/@twojewscomedy',
    },

    {
        userId: 8,
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7331241373636493345~c5_100x100.jpeg?lk3s=a5d48078&nonce=65012&refresh_token=7cd208efafe430ae88397dc2ff5a0097&x-expires=1726059600&x-signature=uKXxDcQdsFNrN%2BU61xAFAOCVa3Y%3D&shp=a5d48078&shcp=81f88b70',
        nickname: 'jarcce',
        name: 'Jarcce',
        to: '/@jarcce',
        tick: true,
    },

    {
        userId: 9,
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8a38001d4769f37d0959f1ad0b0270cf.jpeg?lk3s=a5d48078&nonce=63059&refresh_token=0338d0e979ae7590990d0f70788719d7&x-expires=1726081200&x-signature=0JUyYlWpHBOv8Jem%2FXpv7Acj3as%3D&shp=a5d48078&shcp=81f88b70',
        nickname: 'bithole.lt',
        name: 'Bích Thơ Lê',
        to: '/@bithole.lt',
    },

    {
        userId: 10,
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d52d05c42b810fec0f57a90ba7bf4fce.jpeg?lk3s=a5d48078&nonce=38247&refresh_token=ca64215622019267579972f6a9bec0a3&x-expires=1726081200&x-signature=W%2FulfIyyWXXHVZF65A7b3FuTpFE%3D&shp=a5d48078&shcp=81f88b70',
        nickname: 'hiaaa1031',
        name: 'Eira🌱',
        to: '/@hiaaa1031',
    },
];

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
        icon: (
            <Image
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/6584be374a433a4c359ef31fd5f5a570.jpeg?lk3s=a5d48078&nonce=73144&refresh_token=3851a6ec2ff68637eb30b9b38c8b5156&x-expires=1725980400&x-signature=aIOMI5LzddBWQLTR2zKQRKROMB8%3D&shp=a5d48078&shcp=81f88b70"
                alt="@_quocthai__"
            />
        ),
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
