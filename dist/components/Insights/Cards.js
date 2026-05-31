"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const assets_1 = require("@/assets");
const request_1 = require("@/services/request");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const useUserData_1 = __importDefault(require("@/store/useUserData"));
const useInsightStore_1 = require("@/store/useInsightStore");
const react_i18next_1 = require("react-i18next");
const Cards = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { updateActiveCard } = (0, useInsightStore_1.useInsightStore)();
    const { user } = (0, useUserData_1.default)();
    const [cards, setCards] = (0, react_1.useState)([]);
    const [cardsLength, setCardsLength] = (0, react_1.useState)([]);
    const [dataIndex, setDataIndex] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/cards/my-cards`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then((response) => {
            const cardsData = response.data.map((card) => {
                try {
                    if (typeof card.styles === "string") {
                        card.styles = JSON.parse(card.styles);
                    }
                }
                catch (error) {
                    console.error("Error parsing styles:", error);
                }
                return card;
            });
            updateActiveCard(cardsData[0].card_url);
            setCards(cardsData);
            const cardUrl = cardsData.map((card) => ({
                card_url: card.card_url,
            }));
            setCardsLength(cardUrl);
        })
            .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [cardsLength && cardsLength.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "secondary-bg mb-4 rounded text-white p-3", children: [(0, jsx_runtime_1.jsxs)("p", { className: "text-2xl font-poppins", children: [t("welcome"), " ", user, " ", t("insightTrack1")] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm font-poppins", children: [t("insightTrack2"), " ", cardsLength.length, " ", t("insightTrack3")] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-3 mt-5 gap-4", children: [...Array(cardsLength.length)].map((_, index) => ((0, jsx_runtime_1.jsxs)("button", { className: `${index === dataIndex
                                ? "border-gradient text-white"
                                : "btn-bg inline shadow-none"}  text-sm p-2`, onClick: () => {
                                updateActiveCard(cardsLength[index].card_url);
                                setDataIndex(index);
                            }, children: [t("card"), " ", index + 1] }, index))) })] })), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-center sticky top-24 pt-10 secondary-bg lg:pb-10 rounded-2xl overflow-hidden", children: [cards.length > 0 && cards[dataIndex].card_layout === "default" && ((0, jsx_runtime_1.jsx)("div", { className: "lg:w-[60%] w-[92%]", children: (0, jsx_runtime_1.jsxs)("div", { className: `rounded-2xl overflow-hidden shadow-lg shadow-zinc-800 z-0 lg:mb-0 mb-14`, style: {
                                backgroundColor: cards[dataIndex].styles.cardBg.bg_color,
                            }, children: [(0, jsx_runtime_1.jsxs)("div", { className: `lg:h-24 h-32 relative flex justify-between z-0 ${cards[dataIndex].styles.coverBG.bg_color !== ""
                                        ? cards[dataIndex].styles.coverBG.bg_color ===
                                            "gradient-cover" &&
                                            `${cards[dataIndex].styles.coverBG.bg_color} z-0`
                                        : ""}`, style: {
                                        backgroundColor: cards[dataIndex].styles.coverBG.bg_color,
                                    }, children: [cards[dataIndex].styles.coverBG.bg_color === "" &&
                                            cards[dataIndex].covor_picture && ((0, jsx_runtime_1.jsx)("img", { src: cards[dataIndex].covor_picture, alt: "cover", className: "w-full object-cover\r\n        " })), (0, jsx_runtime_1.jsx)("div", { className: "absolute lg:top-10 top-16 left-2 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden z-0", children: (0, jsx_runtime_1.jsx)("img", { src: cards[dataIndex].main_picture
                                                    ? cards[dataIndex].main_picture
                                                    : assets_1.userPic, alt: "user" }) }), (0, jsx_runtime_1.jsx)("div", { className: "content-center", children: (0, jsx_runtime_1.jsxs)("p", { className: `absolute right-0 me-1 w-48 text-center overflow-hidden text-ellipsis text-nowrap ${cards[dataIndex].styles.name.font_style +
                                                    " " +
                                                    cards[dataIndex].styles.name.font_size} ${cards[dataIndex].covor_picture &&
                                                    "glass-effect text-shadow"}`, style: { color: cards[dataIndex].styles.name.font_color }, children: [(0, jsx_runtime_1.jsxs)("span", { className: ` ${cards[dataIndex].styles.pronoun.font_style +
                                                            " " +
                                                            cards[dataIndex].styles.pronoun.font_size}`, style: {
                                                            color: cards[dataIndex].styles.pronoun.font_color,
                                                        }, children: [cards[dataIndex].pronouns &&
                                                                "(" + cards[dataIndex].pronouns + ")", " "] }), cards[dataIndex].full_name && cards[dataIndex].full_name] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "px-5 mt-10 text-white", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [cards[dataIndex].company_logo && ((0, jsx_runtime_1.jsx)("img", { src: cards[dataIndex].company_logo, alt: "Cover", className: "absolute right-0 -top-6 w-14 h-14 rounded-full border-2 bg-white" })), (0, jsx_runtime_1.jsx)("p", { className: `${cards[dataIndex].styles.jobTitle.font_style +
                                                        " " +
                                                        cards[dataIndex].styles.jobTitle.font_size} mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase lg:mt-0 mt-4 ${!cards[dataIndex].job_title && "invisible"} `, style: {
                                                        color: cards[dataIndex].styles.jobTitle.font_color,
                                                    }, children: cards[dataIndex].job_title && cards[dataIndex].job_title }), (0, jsx_runtime_1.jsx)("p", { className: `${!cards[dataIndex].company_name && "invisible"} ${cards[dataIndex].styles.company.font_style +
                                                        " " +
                                                        cards[dataIndex].styles.company.font_size}`, style: {
                                                        color: cards[dataIndex].styles.company.font_color,
                                                    }, children: cards[dataIndex].company_name &&
                                                        "At " + cards[dataIndex].company_name }), (0, jsx_runtime_1.jsx)("p", { className: `mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase ${!cards[dataIndex].bio && "invisible"} ${cards[dataIndex].styles.bio.font_style +
                                                        " " +
                                                        cards[dataIndex].styles.bio.font_size}`, style: { color: cards[dataIndex].styles.bio.font_color }, children: cards[dataIndex].bio && cards[dataIndex].bio }), (0, jsx_runtime_1.jsxs)("p", { className: `${cards[dataIndex].styles.location.font_style +
                                                        " " +
                                                        cards[dataIndex].styles.location.font_size} my-2`, style: {
                                                        color: cards[dataIndex].styles.location.font_color,
                                                    }, children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-geo-alt-fill me-2", style: {
                                                                color: cards[dataIndex].styles.location.font_color,
                                                            } }), cards[dataIndex].location && cards[dataIndex].location] })] }), cards[dataIndex].styles.contacts.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: `lg:my-2 my-5 ${cards[dataIndex].styles.contacts.length > 0
                                                ? `grid ${cards[dataIndex].styles.contacts.length + 2 <= 3
                                                    ? "grid-cols-3"
                                                    : "grid-cols-5"}  gap-5 my-5`
                                                : "invisible"}`, children: cards[dataIndex].styles.contacts.map((c) => ((0, jsx_runtime_1.jsx)("p", { className: `${c.icon} text-3xl text-center rounded-lg py-2 shadow-inner`, style: {
                                                    color: c.color.replace("bg", "text"),
                                                } }, c.icon))) })), cards[dataIndex].styles.socialMedia.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: `lg:mb-0 mb-5 ${cards[dataIndex].styles.socialMedia.length > 0
                                                ? `grid ${cards[dataIndex].styles.socialMedia.length <= 3
                                                    ? "grid-cols-3"
                                                    : "grid-cols-4"}  gap-3`
                                                : "invisible"}`, children: cards[dataIndex].styles.socialMedia.map((media) => media.icon === "deezer" ? ((0, jsx_runtime_1.jsx)("div", { className: `flex rounded-md py-2 justify-center shadow-inner`, style: {
                                                    backgroundColor: media.color,
                                                }, children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.deezer, alt: "Deezer Logo", className: "w-8 h-8 me-0 pe-0" }) }, media.icon)) : media.icon === "trustpilot" ? ((0, jsx_runtime_1.jsx)("div", { className: `flex rounded-md py-2 justify-center shadow-inner`, style: {
                                                    backgroundColor: media.color,
                                                }, children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.trustpilot, alt: "Deezer Logo", className: "w-8 h-8 me-0 pe-0" }) })) : media.icon === "calendly" ? ((0, jsx_runtime_1.jsx)("div", { className: `flex rounded-md py-2 justify-center shadow-inner`, style: {
                                                    backgroundColor: media.color,
                                                }, children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.calendly, alt: "calendly Logo", className: "w-8 h-8 me-0 pe-0" }) }, media.icon)) : ((0, jsx_runtime_1.jsx)("p", { className: `${media.icon} text-white text-3xl text-center rounded-md py-2 shadow-inner`, style: { backgroundColor: media.color } }, media.icon))) })), (0, jsx_runtime_1.jsx)("button", { className: `w-full rounded-lg py-4 mb-8 mt-5 shadow-md font-poppins font-extrabold shadow-zinc-950`, style: {
                                                backgroundColor: cards[dataIndex].styles.button.bg_color,
                                                color: cards[dataIndex].styles.button.text_color,
                                            }, children: t("saveContact") })] })] }) })), cards.length > 0 && cards[dataIndex].card_layout === "center" && ((0, jsx_runtime_1.jsx)("div", { className: "lg:w-[60%] w-[92%]", children: (0, jsx_runtime_1.jsxs)("div", { className: `rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 lg:mb-0 mb-14`, style: {
                                backgroundColor: cards[dataIndex].styles.cardBg.bg_color,
                            }, children: [(0, jsx_runtime_1.jsxs)("div", { className: `lg:h-24 h-32 relative flex justify-between ${cards[dataIndex].styles.coverBG.bg_color !== ""
                                        ? cards[dataIndex].styles.coverBG.bg_color ===
                                            "gradient-cover" &&
                                            `${cards[dataIndex].styles.coverBG.bg_color} z-0`
                                        : ""}`, style: {
                                        backgroundColor: cards[dataIndex].styles.coverBG.bg_color,
                                    }, children: [cards[dataIndex].styles.coverBG.bg_color === "" &&
                                            cards[dataIndex].covor_picture && ((0, jsx_runtime_1.jsx)("img", { src: cards[dataIndex].covor_picture, alt: "cover", className: "w-full object-cover\r\n    " })), (0, jsx_runtime_1.jsx)("div", { className: "absolute lg:top-10 top-16 left-1/3 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden", children: (0, jsx_runtime_1.jsx)("img", { src: cards[dataIndex].main_picture
                                                    ? cards[dataIndex].main_picture
                                                    : assets_1.userPic, alt: "user" }) }), cards[dataIndex].company_logo && ((0, jsx_runtime_1.jsx)("img", { src: cards[dataIndex].company_logo, alt: "Cover", className: "absolute top-20 right-28 w-12 h-12 rounded-full border-2 bg-white" }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "px-5 mt-10 text-white", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("div", { className: "content-center", children: (0, jsx_runtime_1.jsxs)("p", { className: ` text-center overflow-hidden text-ellipsis text-nowrap ${cards[dataIndex].styles.name.font_style +
                                                            " " +
                                                            cards[dataIndex].styles.name.font_size} `, style: { color: cards[dataIndex].styles.name.font_color }, children: [(0, jsx_runtime_1.jsxs)("span", { className: ` ${cards[dataIndex].styles.pronoun.font_style +
                                                                    " " +
                                                                    cards[dataIndex].styles.pronoun.font_size}`, style: {
                                                                    color: cards[dataIndex].styles.pronoun.font_color,
                                                                }, children: [cards[dataIndex].pronouns &&
                                                                        "(" + cards[dataIndex].pronouns + ")", " "] }), cards[dataIndex].full_name && cards[dataIndex].full_name] }) }), (0, jsx_runtime_1.jsx)("p", { className: `${cards[dataIndex].styles.jobTitle.font_style +
                                                        " " +
                                                        cards[dataIndex].styles.jobTitle.font_size} mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-center ${!cards[dataIndex].job_title && "invisible"} `, style: {
                                                        color: cards[dataIndex].styles.jobTitle.font_color,
                                                    }, children: cards[dataIndex].job_title && cards[dataIndex].job_title }), (0, jsx_runtime_1.jsx)("p", { className: `${!cards[dataIndex].company_name && "invisible"} ${cards[dataIndex].styles.company.font_style +
                                                        " " +
                                                        cards[dataIndex].styles.company.font_size} text-center`, style: {
                                                        color: cards[dataIndex].styles.company.font_color,
                                                    }, children: cards[dataIndex].company_name &&
                                                        "At " + cards[dataIndex].company_name }), (0, jsx_runtime_1.jsx)("p", { className: `mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-center ${!cards[dataIndex].bio && "invisible"} ${cards[dataIndex].styles.bio.font_style +
                                                        " " +
                                                        cards[dataIndex].styles.bio.font_size}`, style: { color: cards[dataIndex].styles.bio.font_color }, children: cards[dataIndex].bio && cards[dataIndex].bio }), (0, jsx_runtime_1.jsxs)("p", { className: `${cards[dataIndex].styles.location.font_style +
                                                        " " +
                                                        cards[dataIndex].styles.location.font_size} my-2 text-center ${!location && "invisible"}`, style: {
                                                        color: cards[dataIndex].styles.location.font_color,
                                                    }, children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-geo-alt-fill me-2", style: {
                                                                color: cards[dataIndex].styles.location.font_color,
                                                            } }), cards[dataIndex].location && cards[dataIndex].location] })] }), cards[dataIndex].styles.contacts.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: `lg:my-2 my-5 ${cards[dataIndex].styles.contacts.length > 0
                                                ? `grid ${cards[dataIndex].styles.contacts.length + 2 <= 3
                                                    ? "grid-cols-3"
                                                    : "grid-cols-5"}  gap-5 my-5`
                                                : "invisible"}`, children: cards[dataIndex].styles.contacts.map((c) => ((0, jsx_runtime_1.jsx)("p", { className: `${c.icon} text-3xl text-center rounded-lg py-2 shadow-inner`, style: {
                                                    color: c.color.replace("bg", "text"),
                                                } }, c.icon))) })), cards[dataIndex].styles.socialMedia.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: `lg:mb-0 mb-5 ${cards[dataIndex].styles.socialMedia.length > 0
                                                ? `grid ${cards[dataIndex].styles.socialMedia.length <= 3
                                                    ? "grid-cols-3"
                                                    : "grid-cols-4"}  gap-3`
                                                : "invisible"}`, children: cards[dataIndex].styles.socialMedia.map((media) => media.icon === "deezer" ? ((0, jsx_runtime_1.jsx)("div", { className: `flex rounded-md py-2 justify-center shadow-inner`, style: {
                                                    backgroundColor: media.color,
                                                }, children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.deezer, alt: "Deezer Logo", className: "w-8 h-8 me-0 pe-0" }) })) : media.icon === "trustpilot" ? ((0, jsx_runtime_1.jsx)("div", { className: `flex rounded-md py-2 justify-center shadow-inner`, style: {
                                                    backgroundColor: media.color,
                                                }, children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.trustpilot, alt: "Deezer Logo", className: "w-8 h-8 me-0 pe-0" }) })) : media.icon === "calendly" ? ((0, jsx_runtime_1.jsx)("div", { className: `flex rounded-md py-2 justify-center shadow-inner`, style: {
                                                    backgroundColor: media.color,
                                                }, children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.calendly, alt: "calendly Logo", className: "w-8 h-8 me-0 pe-0" }) })) : ((0, jsx_runtime_1.jsx)("p", { className: `${media.icon} text-white text-3xl text-center rounded-md py-2 shadow-inner`, style: { backgroundColor: media.color } }, media.icon))) })), (0, jsx_runtime_1.jsx)("button", { className: `w-full rounded-lg py-4 mb-8 mt-5 shadow-md font-poppins font-extrabold shadow-zinc-950`, style: {
                                                backgroundColor: cards[dataIndex].styles.button.bg_color,
                                                color: cards[dataIndex].styles.button.text_color,
                                            }, children: t("saveContact") })] })] }) })), cards.length > 0 && cards[dataIndex].card_layout === "right" && ((0, jsx_runtime_1.jsx)("div", { className: "lg:w-[60%] w-[92%]", children: (0, jsx_runtime_1.jsxs)("div", { className: `rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 lg:mb-0 mb-10`, style: {
                                backgroundColor: cards[dataIndex].styles.cardBg.bg_color,
                            }, children: [(0, jsx_runtime_1.jsxs)("div", { className: `lg:h-24 h-32 relative flex justify-between ${cards[dataIndex].styles.coverBG.bg_color !== ""
                                        ? cards[dataIndex].styles.coverBG.bg_color ===
                                            "gradient-cover" &&
                                            cards[dataIndex].styles.coverBG.bg_color
                                        : ""}`, style: {
                                        backgroundColor: cards[dataIndex].styles.coverBG.bg_color,
                                    }, children: [cards[dataIndex].styles.coverBG.bg_color === "" &&
                                            cards[dataIndex].covor_picture && ((0, jsx_runtime_1.jsx)("img", { src: cards[dataIndex].covor_picture, alt: "cover", className: "w-full object-cover\r\n       " })), (0, jsx_runtime_1.jsx)("div", { className: "absolute lg:top-10 top-16 right-2 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden", children: (0, jsx_runtime_1.jsx)("img", { src: cards[dataIndex].main_picture
                                                    ? cards[dataIndex].main_picture
                                                    : assets_1.userPic, alt: "user", className: "" }) }), (0, jsx_runtime_1.jsx)("div", { className: "content-center", children: (0, jsx_runtime_1.jsxs)("p", { className: `absolute left-0 w-48 text-center overflow-hidden text-ellipsis text-nowrap ${cards[dataIndex].styles.name.font_style +
                                                    " " +
                                                    cards[dataIndex].styles.name.font_size} ${cards[dataIndex].covor_picture &&
                                                    "glass-effect text-shadow"} `, style: { color: cards[dataIndex].styles.name.font_color }, children: [(0, jsx_runtime_1.jsxs)("span", { className: ` ${cards[dataIndex].styles.pronoun.font_style +
                                                            " " +
                                                            cards[dataIndex].styles.pronoun.font_size}`, style: {
                                                            color: cards[dataIndex].styles.pronoun.font_color,
                                                        }, children: [cards[dataIndex].pronouns &&
                                                                "(" + cards[dataIndex].pronouns + ")", " "] }), cards[dataIndex].full_name && cards[dataIndex].full_name] }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "px-5 mt-10 text-white", children: (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [cards[dataIndex].company_logo && ((0, jsx_runtime_1.jsx)("img", { src: cards[dataIndex].company_logo, alt: "Cover", className: "absolute left-0 -top-6 w-14 h-14 rounded-full border-2 bg-white" })), (0, jsx_runtime_1.jsx)("p", { className: `${cards[dataIndex].styles.jobTitle.font_style +
                                                    " " +
                                                    cards[dataIndex].styles.jobTitle.font_size} mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-end lg:mt-0 mt-4 ${!cards[dataIndex].job_title && "invisible"} `, style: {
                                                    color: cards[dataIndex].styles.jobTitle.font_color,
                                                }, children: cards[dataIndex].job_title && cards[dataIndex].job_title }), (0, jsx_runtime_1.jsx)("p", { className: `${!cards[dataIndex].company_name && "invisible"} ${cards[dataIndex].styles.company.font_style +
                                                    " " +
                                                    cards[dataIndex].styles.company.font_size} text-end`, style: {
                                                    color: cards[dataIndex].styles.company.font_color,
                                                }, children: cards[dataIndex].company_name &&
                                                    "At " + cards[dataIndex].company_name }), (0, jsx_runtime_1.jsx)("p", { className: `mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-end ${!cards[dataIndex].bio && "invisible"} ${cards[dataIndex].styles.bio.font_style +
                                                    " " +
                                                    cards[dataIndex].styles.bio.font_size}`, style: { color: cards[dataIndex].styles.bio.font_color }, children: cards[dataIndex].bio && cards[dataIndex].bio }), (0, jsx_runtime_1.jsxs)("p", { className: `${cards[dataIndex].styles.location.font_style +
                                                    " " +
                                                    cards[dataIndex].styles.location.font_size} my-2 text-end ${!location && "invisible"}`, style: {
                                                    color: cards[dataIndex].styles.location.font_color,
                                                }, children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-geo-alt-fill me-2", style: {
                                                            color: cards[dataIndex].styles.location.font_color,
                                                        } }), cards[dataIndex].location && cards[dataIndex].location] })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "px-4", children: [cards[dataIndex].styles.contacts.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: `lg:my-2 my-5 ${cards[dataIndex].styles.contacts.length > 0
                                                ? `grid ${cards[dataIndex].styles.contacts.length + 2 <= 3
                                                    ? "grid-cols-3"
                                                    : "grid-cols-5"}  gap-5 my-5`
                                                : "invisible"}`, children: cards[dataIndex].styles.contacts.map((c) => ((0, jsx_runtime_1.jsx)("p", { className: `${c.icon} text-3xl text-center rounded-lg py-2 shadow-inner`, style: {
                                                    color: c.color.replace("bg", "text"),
                                                } }, c.icon))) })), cards[dataIndex].styles.socialMedia.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: `lg:mb-0 mb-5 ${cards[dataIndex].styles.socialMedia.length > 0
                                                ? `grid ${cards[dataIndex].styles.socialMedia.length <= 3
                                                    ? "grid-cols-3"
                                                    : "grid-cols-4"}  gap-3`
                                                : "invisible"}`, children: cards[dataIndex].styles.socialMedia.map((media) => media.icon === "deezer" ? ((0, jsx_runtime_1.jsx)("div", { className: `flex rounded-md py-2 justify-center shadow-inner`, style: {
                                                    backgroundColor: media.color,
                                                }, children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.deezer, alt: "Deezer Logo", className: "w-8 h-8 me-0 pe-0" }) })) : media.icon === "trustpilot" ? ((0, jsx_runtime_1.jsx)("div", { className: `flex rounded-md py-2 justify-center shadow-inner`, style: {
                                                    backgroundColor: media.color,
                                                }, children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.trustpilot, alt: "Deezer Logo", className: "w-8 h-8 me-0 pe-0" }) })) : media.icon === "calendly" ? ((0, jsx_runtime_1.jsx)("div", { className: `flex rounded-md py-2 justify-center shadow-inner`, style: {
                                                    backgroundColor: media.color,
                                                }, children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.calendly, alt: "calendly Logo", className: "w-8 h-8 me-0 pe-0" }) })) : ((0, jsx_runtime_1.jsx)("p", { className: `${media.icon} text-white text-3xl text-center rounded-md py-2 shadow-inner`, style: { backgroundColor: media.color } }, media.icon))) })), (0, jsx_runtime_1.jsx)("button", { className: `w-full rounded-lg py-4 mb-8 mt-5 shadow-md font-poppins font-extrabold shadow-zinc-950`, style: {
                                                backgroundColor: cards[dataIndex].styles.button.bg_color,
                                                color: cards[dataIndex].styles.button.text_color,
                                            }, children: t("saveContact") })] })] }) }))] })] }));
};
exports.default = Cards;
