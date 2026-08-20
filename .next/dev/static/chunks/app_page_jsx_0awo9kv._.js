(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NKDBoysHostelWebsite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Icon = ({ type, size = 22, className = "" })=>{
    const icons = {
        home: "⌂",
        map: "⌖",
        phone: "☎",
        wifi: "≋",
        food: "◉",
        shield: "✓",
        sparkle: "✦",
        bed: "▭",
        water: "◌",
        book: "▤",
        star: "★",
        check: "✓",
        chat: "✉",
        menu: "☰",
        close: "×",
        camera: "▣",
        parking: "▰",
        sun: "☼",
        mail: "✉",
        flame: "◆"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center justify-center font-black leading-none ${className}`,
        style: {
            width: size,
            height: size,
            fontSize: size * 0.85
        },
        "aria-hidden": "true",
        children: icons[type] || "•"
    }, void 0, false, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Icon;
const hostel = {
    name: "NKD Boys Hostel",
    tagline: "हजुरहरुको दोस्रो घर",
    location: "New Baneshwor, near Parliament Building Water Tank, Kathmandu",
    shortLocation: "Naya Baneshwor, Kathmandu",
    phone: "+977 984-8050046",
    inquiryEmail: "gautamrojina778@gmail.com",
    operating: "4+ years operating",
    googleMaps: "https://www.google.com/maps/place/NKD+Boys+Hostel/@27.6912963,85.3357402,91m/data=!3m1!1e3!4m6!3m5!1s0x39eb196427129baf:0x8b3318bc1a99b4e1!8m2!3d27.6912888!4d85.3358165!16s%2Fg%2F11vjtr5_wv",
    embedMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.3703660843752!2d85.33574015342397!3d27.691296265624985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196427129baf%3A0x8b3318bc1a99b4e1!2sNKD%20Boys%20Hostel!5e1!3m2!1sen!2snp!4v1778655496062!5m2!1sen!2snp"
};
const navItems = [
    "Home",
    "Facilities",
    "Rooms",
    "Gallery",
    "Reviews",
    "Inquiry"
];
const facilities = [
    [
        "wifi",
        "High-Speed 5G Internet",
        "Fast WiFi for online classes, coding, assignments, and the occasional 2 AM YouTube lecture."
    ],
    [
        "food",
        "Fresh Homely Meals",
        "We serve the same food we eat. Clean, regular, and hostel-life approved."
    ],
    [
        "water",
        "Hot & Cold Water",
        "Hot/cold water support plus jar drinking water arrangement."
    ],
    [
        "shield",
        "Family Environment",
        "Disciplined rules, safe living, and a home-like atmosphere."
    ],
    [
        "parking",
        "Decent Parking Space",
        "Convenient parking for residents and visitors in Baneshwor."
    ],
    [
        "sun",
        "Open From Every Side",
        "Better air, better light, and rooms that feel less boxed in."
    ],
    [
        "book",
        "Study Friendly",
        "Peaceful enough for exam season and practical for daily student life."
    ],
    [
        "bed",
        "Limited Seats",
        "Focused room mix instead of overcrowding. Better comfort, better management."
    ]
];
const rooms = [
    [
        "3-Bed Sharing Room",
        "3 rooms",
        "Starts from NPR 12,000/month",
        "Best balance between budget, comfort, and social hostel life.",
        [
            "3 dedicated rooms",
            "Food + facilities access",
            "Best value option",
            "Student friendly"
        ]
    ],
    [
        "2-Bed Sharing Room",
        "1 room only",
        "Ask current availability",
        "A quieter option for residents who prefer fewer roommates.",
        [
            "More privacy",
            "Study friendly",
            "Limited seat premium",
            "Calm setup"
        ]
    ],
    [
        "4-Bed Attached Washroom",
        "1 room only",
        "Value rate on inquiry",
        "Group-friendly room with attached washroom convenience.",
        [
            "Attached washroom",
            "Group stay",
            "Convenient access",
            "Limited availability"
        ]
    ],
    [
        "4-Bed Standard Room",
        "3 rooms",
        "Affordable monthly package",
        "Budget-friendly, practical, and made for long-stay students.",
        [
            "3 standard rooms",
            "Budget focused",
            "Meals package",
            "Good for long stay"
        ]
    ]
];
const gallery = [
    [
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1400&q=90",
        "Room Feel"
    ],
    [
        "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=1400&q=90",
        "Study Corner"
    ],
    [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=90",
        "Clean Living"
    ],
    [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=90",
        "Comfort Space"
    ],
    [
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=90",
        "Food & Kitchen"
    ],
    [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=90",
        "Homely Stay"
    ]
];
const reviews = [
    [
        "Resident Experience",
        "Food, WiFi, water, and rules are the four pillars of hostel life. NKD focuses exactly there."
    ],
    [
        "Student Friendly",
        "Located in Baneshwor with a practical environment for students, study, travel, and daily routine."
    ],
    [
        "Parent Confidence",
        "Family environment, disciplined rules, and limited rooms make the hostel easier to trust and manage."
    ]
];
function scrollToSection(id) {
    document.getElementById(id.toLowerCase())?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
function NKDBoysHostelWebsite() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const whatsappLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NKDBoysHostelWebsite.useMemo[whatsappLink]": ()=>{
            const cleanPhone = hostel.phone.replace(/[^0-9]/g, "");
            return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Namaste, I want to know about room availability at ${hostel.name}.`)}`;
        }
    }["NKDBoysHostelWebsite.useMemo[whatsappLink]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen overflow-hidden bg-[#f4efe6] font-sans text-[#18231e]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#f0d397_0%,transparent_30%),radial-gradient(circle_at_80%_20%,#b7d2c5_0%,transparent_28%),linear-gradient(135deg,#f7f1e7_0%,#eee2cf_45%,#edf5ef_100%)]"
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed -left-36 -top-28 -z-10 h-96 w-96 rounded-full bg-[#d9b56f]/40 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed -right-40 top-96 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#214d3e]/25 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fixed left-0 right-0 top-0 z-50 border-b border-white/40 bg-[#f4efe6]/75 backdrop-blur-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollToSection("home"),
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid h-12 w-12 place-items-center rounded-2xl bg-[#214d3e] text-white shadow-[0_18px_40px_rgba(33,77,62,0.28)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            type: "home",
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-black tracking-tight",
                                                children: "NKD Boys Hostel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-extrabold uppercase tracking-[0.18em] text-[#9a6d3a]",
                                                children: hostel.shortLocation
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden items-center gap-7 lg:flex",
                                children: [
                                    navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToSection(item),
                                            className: "text-sm font-black text-[#405148] transition hover:text-[#b98254]",
                                            children: item
                                        }, item, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/home",
                                        className: "text-sm font-black text-[#214d3e] hover:text-[#b98254] transition",
                                        children: "HEAN Network"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/admin",
                                        className: "text-sm font-black text-[#0EA5E9] hover:underline transition",
                                        children: "Admin Portal"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden items-center gap-3 lg:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `tel:${hostel.phone}`,
                                        className: "rounded-full border border-[#214d3e]/20 px-5 py-3 text-sm font-black text-[#214d3e] transition hover:bg-white",
                                        children: "Call Now"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: whatsappLink,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "rounded-full bg-[#214d3e] px-5 py-3 text-sm font-black text-white shadow-xl shadow-[#214d3e]/20 transition hover:-translate-y-0.5 hover:bg-[#183b30]",
                                        children: "WhatsApp"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "grid h-11 w-11 place-items-center rounded-2xl bg-white shadow lg:hidden",
                                onClick: ()=>setMenuOpen(!menuOpen),
                                children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    type: "close",
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 140,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    type: "menu",
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 140,
                                    columnNumber: 59
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-[#214d3e]/10 bg-[#f4efe6] px-5 py-4 lg:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3",
                            children: [
                                navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            scrollToSection(item);
                                            setMenuOpen(false);
                                        },
                                        className: "rounded-2xl bg-white px-4 py-3 text-left text-sm font-black shadow-sm",
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/home",
                                    className: "rounded-2xl bg-white px-4 py-3 text-left text-sm font-black shadow-sm text-[#214d3e]",
                                    children: "HEAN Network Website"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/admin",
                                    className: "rounded-2xl bg-[#0EA5E9] text-white px-4 py-3 text-left text-sm font-black shadow-sm",
                                    children: "HEAN Admin Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "home",
                className: "relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.7
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 inline-flex items-center gap-2 rounded-full border border-[#214d3e]/15 bg-white/70 px-4 py-2 text-sm font-black text-[#9a6d3a] shadow-sm backdrop-blur",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        type: "sparkle",
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    hostel.tagline,
                                    " · ",
                                    hostel.operating
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.06em] text-[#18231e] md:text-7xl lg:text-8xl",
                                children: "Hostel life, but make it clean, bright & actually livable."
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-7 max-w-2xl text-lg font-medium leading-8 text-[#52635a]",
                                children: [
                                    hostel.name,
                                    " is a boys hostel in ",
                                    hostel.location,
                                    ". Open from every side, family-environment focused, and made for students who need food, WiFi, water, peace, and a bed that does not feel like punishment."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 rounded-[2rem] border border-white/70 bg-white/65 p-5 shadow-[0_24px_70px_rgba(24,35,30,0.10)] backdrop-blur-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-black uppercase tracking-[0.25em] text-[#b98254]",
                                        children: "Hostel truth"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-2xl font-black text-[#214d3e]",
                                        children: "“We eat what we serve. No sad hostel daal-bhat drama.”"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-9 flex flex-col gap-4 sm:flex-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: whatsappLink,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "inline-flex items-center justify-center gap-2 rounded-full bg-[#214d3e] px-7 py-4 text-base font-black text-white shadow-[0_25px_60px_rgba(33,77,62,0.32)] transition hover:-translate-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                type: "chat",
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 186,
                                                columnNumber: 15
                                            }, this),
                                            " Check Availability"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection("inquiry"),
                                        className: "inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-black text-[#214d3e] shadow-xl shadow-black/5 transition hover:-translate-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                type: "mail",
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this),
                                            " Send Inquiry"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/hostel",
                                        className: "inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#214d3e] bg-transparent px-7 py-4 text-base font-black text-[#214d3e] transition hover:bg-[#214d3e] hover:text-white",
                                        children: "Dark Mode View"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4",
                                children: [
                                    [
                                        "Operating",
                                        "4+ Years"
                                    ],
                                    [
                                        "From",
                                        "NPR 12,000"
                                    ],
                                    [
                                        "Location",
                                        "Baneshwor"
                                    ],
                                    [
                                        "Room Mix",
                                        "8 Rooms"
                                    ]
                                ].map(([a, b])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-3xl border border-white/70 bg-white/65 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-black uppercase tracking-[0.18em] text-[#9a6d3a]",
                                                children: a
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-2xl font-black text-[#214d3e]",
                                                children: b
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, a, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            rotateY: -18,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            rotateY: 0,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "relative [perspective:1200px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -right-4 -top-8 z-10 rotate-6 rounded-[2rem] bg-[#b98254] px-6 py-4 text-white shadow-[0_25px_70px_rgba(185,130,84,0.35)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-black uppercase tracking-[0.2em]",
                                        children: "Limited seats"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-black",
                                        children: "Book before your friend does"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    y: [
                                        0,
                                        -10,
                                        0
                                    ],
                                    rotateX: [
                                        0,
                                        2,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                className: "relative rounded-[2.8rem] border border-white/80 bg-white/45 p-4 shadow-[0_40px_100px_rgba(24,35,30,0.22)] backdrop-blur-xl [transform-style:preserve-3d] lg:rotate-[-2deg]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1500&q=90",
                                        alt: "Modern hostel room preview",
                                        className: "h-[34rem] w-full rounded-[2.2rem] object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-8 left-8 right-8 rounded-[2rem] border border-white/40 bg-[#18231e]/78 p-5 text-white shadow-2xl backdrop-blur-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold text-[#e8d1a4]",
                                                children: "Room-first hostel design"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 217,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mt-1 text-2xl font-black",
                                                children: "3-bed, 2-bed & 4-bed options"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm leading-6 text-white/80",
                                                children: "Premium living space in the heart of Kathmandu."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "facilities",
                className: "mx-auto max-w-7xl px-5 py-24 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-black uppercase tracking-[0.25em] text-[#b98254]",
                                children: "Facilities"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-3 text-4xl font-black tracking-tight md:text-6xl",
                                children: "Good amenities. Less tension. More “ghar jasto”."
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-lg font-medium leading-8 text-[#52635a]",
                                children: "Built around what hostel residents actually ask about first: food, internet, water, cleanliness, parking, safety, and study environment."
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4",
                        children: facilities.map(([icon, title, text], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 24
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: index * 0.04
                                },
                                whileHover: {
                                    y: -10,
                                    rotateX: 5,
                                    rotateY: -5,
                                    scale: 1.02
                                },
                                className: "group rounded-[2rem] border border-white/75 bg-white/68 p-6 shadow-[0_22px_60px_rgba(24,35,30,0.08)] backdrop-blur transition [transform-style:preserve-3d]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#214d3e] text-white shadow-lg shadow-[#214d3e]/20 transition group-hover:bg-[#b98254]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            type: icon,
                                            size: 25
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-black",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm font-medium leading-7 text-[#52635a]",
                                        children: text
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, title, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "rooms",
                className: "relative bg-[#214d3e] px-5 py-24 text-white lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-3xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-black uppercase tracking-[0.25em] text-[#e8d1a4]",
                                            children: "Rooms & Rates"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mt-3 text-4xl font-black tracking-tight md:text-6xl",
                                            children: "Limited rooms, better managed stay."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-5 text-lg font-medium leading-8 text-white/75",
                                            children: "Pricing is starting/package guidance. Final rate can vary by seat availability, room type, and included services."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${hostel.phone}`,
                                    className: "rounded-full bg-white px-6 py-4 text-center font-black text-[#214d3e] shadow-xl transition hover:-translate-y-1",
                                    children: "Ask Final Rate"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 lg:grid-cols-4",
                            children: rooms.map(([title, badge, price, desc, points], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                    whileHover: {
                                        y: -12,
                                        rotateX: 5
                                    },
                                    className: "rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.16)] backdrop-blur [transform-style:preserve-3d]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-5 inline-flex rounded-full bg-[#e8d1a4] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#214d3e]",
                                            children: badge
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-5xl font-black text-[#e8d1a4]",
                                            children: [
                                                "0",
                                                index + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-4 text-2xl font-black",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-lg font-black text-white",
                                            children: price
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-sm font-medium leading-7 text-white/75",
                                            children: desc
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-7 grid gap-3",
                                            children: points.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 text-sm font-bold text-white/90",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            type: "check",
                                                            size: 18,
                                                            className: "text-[#e8d1a4]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 279,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        point
                                                    ]
                                                }, point, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 278,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, title, true, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 270,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 rounded-[2rem] border border-white/15 bg-white/10 p-6 text-sm font-medium leading-7 text-white/75 backdrop-blur",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-black text-[#e8d1a4]",
                                    children: "Rate note:"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this),
                                " Certified standards aligned with Hostel Association Nepal guidelines."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "gallery",
                className: "mx-auto max-w-7xl px-5 py-24 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-black uppercase tracking-[0.25em] text-[#b98254]",
                                children: "Gallery"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-3 text-4xl font-black tracking-tight md:text-6xl",
                                children: "Real photos, comfortable spaces."
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-lg font-medium leading-8 text-[#52635a]",
                                children: "Clean, ventilated rooms with adequate sunlight, study spaces, hygienic dining hall, and 24/7 security."
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4",
                        children: gallery.map(([src, label], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                whileHover: {
                                    scale: 1.035,
                                    rotate: index % 2 ? 1.2 : -1.2,
                                    y: -8
                                },
                                className: `relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(24,35,30,0.14)] ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: src,
                                        alt: label,
                                        className: "h-full min-h-72 w-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "absolute bottom-5 left-5 rounded-full bg-white/92 px-4 py-2 text-sm font-black text-[#214d3e]",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "reviews",
                className: "mx-auto max-w-7xl px-5 py-20 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[2.8rem] border border-white/80 bg-white/62 p-6 shadow-[0_30px_90px_rgba(24,35,30,0.10)] backdrop-blur md:p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-black uppercase tracking-[0.25em] text-[#b98254]",
                                        children: "Trust & Reviews"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-3 text-4xl font-black tracking-tight md:text-5xl",
                                        children: "A hostel parents can call and students can actually live in."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-5 lg:grid-cols-3",
                            children: reviews.map(([name, text])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        y: -8,
                                        rotateX: 4
                                    },
                                    className: "rounded-[2rem] bg-[#f4efe6] p-6 shadow-inner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 flex gap-1 text-[#b98254]",
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    type: "star",
                                                    size: 18
                                                }, i, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 328,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 326,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium leading-7 text-[#405148]",
                                            children: [
                                                "“",
                                                text,
                                                "”"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-5 font-black text-[#214d3e]",
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 332,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, name, true, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 316,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "inquiry",
                className: "px-5 py-24 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[2.8rem] bg-[#18231e] p-8 text-white shadow-[0_40px_100px_rgba(0,0,0,0.22)] md:p-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-black uppercase tracking-[0.25em] text-[#e8d1a4]",
                                    children: "Inquiry"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-3 text-4xl font-black tracking-tight md:text-5xl",
                                    children: "Want a room? Send inquiry before seats disappear."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-5 font-medium leading-8 text-white/70",
                                    children: "Submit your inquiry and our hostel manager will contact you promptly."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 grid gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `tel:${hostel.phone}`,
                                            className: "flex items-center gap-4 rounded-3xl bg-white/10 p-5 transition hover:bg-white/15",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    type: "phone",
                                                    size: 24,
                                                    className: "text-[#e8d1a4]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 349,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-white/60",
                                                            children: "Phone"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 351,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-black",
                                                            children: hostel.phone
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 352,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 350,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: hostel.googleMaps,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "flex items-center gap-4 rounded-3xl bg-white/10 p-5 transition hover:bg-white/15",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    type: "map",
                                                    size: 24,
                                                    className: "text-[#e8d1a4]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 356,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-white/60",
                                                            children: "Location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 358,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-black",
                                                            children: hostel.location
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 359,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 357,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 355,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 347,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            action: `https://formsubmit.co/${hostel.inquiryEmail}`,
                            method: "POST",
                            className: "rounded-[2.8rem] border border-white/80 bg-white/70 p-6 shadow-[0_30px_90px_rgba(24,35,30,0.12)] backdrop-blur md:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "hidden",
                                    name: "_subject",
                                    value: "New NKD Boys Hostel Inquiry"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "hidden",
                                    name: "_captcha",
                                    value: "false"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-5 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "grid gap-2 text-sm font-black text-[#214d3e]",
                                            children: [
                                                "Full Name",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    name: "name",
                                                    placeholder: "Your name",
                                                    className: "rounded-2xl border border-[#214d3e]/15 bg-white px-4 py-4 font-medium outline-none focus:border-[#b98254]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 370,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "grid gap-2 text-sm font-black text-[#214d3e]",
                                            children: [
                                                "Phone Number",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    name: "phone",
                                                    placeholder: "98XXXXXXXX",
                                                    className: "rounded-2xl border border-[#214d3e]/15 bg-white px-4 py-4 font-medium outline-none focus:border-[#b98254]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 374,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 372,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "grid gap-2 text-sm font-black text-[#214d3e]",
                                            children: [
                                                "Preferred Room",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "room",
                                                    className: "rounded-2xl border border-[#214d3e]/15 bg-white px-4 py-4 font-medium outline-none focus:border-[#b98254]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "3-Bed Sharing Room"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 379,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "2-Bed Sharing Room"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 380,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "4-Bed Attached Washroom"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 381,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "4-Bed Standard Room"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.jsx",
                                                            lineNumber: 382,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 378,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 376,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "grid gap-2 text-sm font-black text-[#214d3e]",
                                            children: [
                                                "Move-in Date",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "moveInDate",
                                                    type: "date",
                                                    className: "rounded-2xl border border-[#214d3e]/15 bg-white px-4 py-4 font-medium outline-none focus:border-[#b98254]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 387,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 385,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mt-5 grid gap-2 text-sm font-black text-[#214d3e]",
                                    children: [
                                        "Message",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "message",
                                            rows: 4,
                                            placeholder: "Tell us your preferred room, budget, and when you want to visit.",
                                            className: "rounded-2xl border border-[#214d3e]/15 bg-white px-4 py-4 font-medium outline-none focus:border-[#b98254]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 392,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mt-6 w-full rounded-full bg-[#214d3e] px-7 py-4 text-base font-black text-white shadow-[0_25px_60px_rgba(33,77,62,0.28)] transition hover:-translate-y-1 cursor-pointer",
                                    type: "submit",
                                    children: "Send Inquiry to Email"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-5 pb-24 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] border border-white/80 bg-white/70 p-4 shadow-[0_30px_90px_rgba(24,35,30,0.12)] backdrop-blur",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        title: "NKD Boys Hostel Google Map",
                        src: hostel.embedMap,
                        width: "600",
                        height: "450",
                        style: {
                            border: 0
                        },
                        allowFullScreen: "",
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade",
                        className: "h-[28rem] w-full rounded-[2.2rem]"
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 403,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 402,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 401,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-[#214d3e]/10 px-5 py-8 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm font-semibold text-[#52635a] md:flex-row md:items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " ",
                                hostel.name,
                                ". All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 409,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/home",
                                    className: "hover:text-[#214d3e]",
                                    children: "HEAN Home"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/admin",
                                    className: "hover:text-[#214d3e]",
                                    children: "Admin Panel"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/hostel",
                                    className: "hover:text-[#214d3e]",
                                    children: "Dark Mode"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 410,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 408,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 407,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(NKDBoysHostelWebsite, "OzbkO92iadC3Q1h9pKISAyfdMTk=");
_c1 = NKDBoysHostelWebsite;
var _c, _c1;
__turbopack_context__.k.register(_c, "Icon");
__turbopack_context__.k.register(_c1, "NKDBoysHostelWebsite");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_page_jsx_0awo9kv._.js.map