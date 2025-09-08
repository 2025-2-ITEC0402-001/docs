import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/docs/",

    title: "종합설계프로젝트2",
    description: "감성 텍스트 기반 AI 아트워크 및 멀티모달 콘텐츠 생성 (위치스)",
    themeConfig: {
        nav: [{ text: "회의록", link: "/meeting-log" }],

        sidebar: [
            {
                text: "회의록",
                link: "/meeting-log",
            },
            {
                text: "팀원 소개",
                link: "/team-introduction",
            },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/2025-2-ITEC0402-001" }],
    },
});
