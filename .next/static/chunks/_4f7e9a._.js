(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_4f7e9a._.js", {

"[project]/components/slider/Card.module.css [app-client] (css module)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "btnn": "Card-module__dr5V-W__btnn",
  "card": "Card-module__dr5V-W__card",
});

})()),
"[project]/components/slider/Card.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/components/slider/Card.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spring$2f$dist$2f$react$2d$spring$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-spring/dist/react-spring.modern.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$web$2f$dist$2f$react$2d$spring_web$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@react-spring/web/dist/react-spring_web.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
function Card({ imagen, link, bonus }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [show, setShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const props3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSpring"])({
        borderRadius: 2,
        transform: show ? "scale(1.03)" : "scale(1)",
        boxShadow: show ? "0 20px 25px rgb(0 0 0 / 25%)" : "0 2px 10px rgb(0 0 0 / 8%)"
    });
    const [newUrl, setNewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof window !== "undefined") {
            const savedUrl = localStorage.getItem("savedUrl");
            setNewUrl(savedUrl);
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$web$2f$dist$2f$react$2d$spring_web$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["animated"].div, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
        style: props3,
        onMouseEnter: ()=>setShown(true),
        onMouseLeave: ()=>setShown(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "target-top-brand",
                href: `${link}/${newUrl}&creative_id=XXL_TOP_Brand`,
                target: "_blank",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    width: 300,
                    height: 150,
                    loading: "lazy",
                    src: imagen,
                    alt: bonus,
                    className: "target-top-brand"
                }, void 0, false, {
                    fileName: "[project]/components/slider/Card.jsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/slider/Card.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tobbb",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "review-bonus bb",
                    children: bonus
                }, void 0, false, {
                    fileName: "[project]/components/slider/Card.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/slider/Card.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnn,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "btn btn-primary target-top-brand",
                    href: `${link}/${newUrl}&creative_id=XXL_TOP_Brand`,
                    target: "_blank",
                    children: t("Play Now")
                }, void 0, false, {
                    fileName: "[project]/components/slider/Card.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/slider/Card.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/slider/Card.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Card, "ZioqibdJdz7HJPEdVJ9IFoP91d8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSpring"]
    ];
});
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_refresh__.register(_c, "Card");

})()),
"[project]/components/Banners_tailwind/TopBrands/pickup.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Pickup
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/shuffle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
function Pickup({ newUrl }) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const categoryBrands = {
        key1: "PremiumChoice",
        key2: "1"
    };
    const { data, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        "brands",
        language
    ], ()=>getBrands(language), {
        initialData: brands
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (data) {
            const filteredData = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            console.log("FILTER", filteredData);
            setBrands(filteredData);
            setLoading(false);
        }
    }, [
        data,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    const shuffledBrands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(brands);
    console.log("FRST", brands);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-end jins w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "thrdjin",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: "h5",
                        children: t("Premium Choice of the Day")
                    }, void 0, false, {
                        fileName: "[project]/components/Banners_tailwind/TopBrands/pickup.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    brands.length > 0 && brands.slice(0, 1).map((rowData, index)=>// <p className="p">{t("Click below to claim your magical reward!")}</p>
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "img-wrap",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `${rowData.GoBig}/${newUrl}&creative_id=Premium_Choice`,
                                        target: "_blank",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: `/brands/${rowData.CasinoBrand}.png`,
                                            alt: rowData.CasinoBrand,
                                            width: 150,
                                            height: 75,
                                            loading: "lazy",
                                            className: "target-top-new-releases"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Banners_tailwind/TopBrands/pickup.jsx",
                                            lineNumber: 48,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Banners_tailwind/TopBrands/pickup.jsx",
                                        lineNumber: 44,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/TopBrands/pickup.jsx",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "p",
                                    children: rowData.OurOfferContent
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/TopBrands/pickup.jsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "btnscale btn btn-new",
                                    href: `${rowData.GoBig}/${newUrl}&creative_id=Premium_Choice`,
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: t("Play Now")
                                    }, void 0, false, {
                                        fileName: "[project]/components/Banners_tailwind/TopBrands/pickup.jsx",
                                        lineNumber: 65,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/TopBrands/pickup.jsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Banners_tailwind/TopBrands/pickup.jsx",
                            lineNumber: 42,
                            columnNumber: 15
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Banners_tailwind/TopBrands/pickup.jsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Banners_tailwind/TopBrands/pickup.jsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Pickup, "XNIHWmJXYr5UGpxM63stUd/wVy0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    ];
});
_c = Pickup;
var _c;
__turbopack_refresh__.register(_c, "Pickup");

})()),
"[project]/components/Banners_tailwind/TopBrands/index.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>TopBrands
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/shuffle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/slider/Card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Banners_tailwind$2f$TopBrands$2f$pickup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Banners_tailwind/TopBrands/pickup.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function TopBrands() {
    _s();
    const [newUrl, setNewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentBrandIndex, setCurrentBrandIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fade, setFade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // State to manage fade effect
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: true
                }
            }
        ]
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Обновляем URL, удаляем параметры и устанавливаем source на основе localStorage
        const currentUrl = window.location.href;
        const indexOfQuestionMark = currentUrl.indexOf("?");
        const newUrl2 = indexOfQuestionMark !== -1 ? currentUrl.substring(0, indexOfQuestionMark) : currentUrl;
        window.history.replaceState({}, document.title, newUrl2);
        // Работа с URL и localStorage для определения source
        const urlObj = new URL(currentUrl);
        const searchParams = new URLSearchParams(urlObj.search);
        searchParams.delete("brand");
        const currentKeyword = searchParams.get("keyword");
        const partners = [
            "partner1039",
            "partner1043",
            "partner1044",
            "CLD_VIP",
            "partner1045_b1"
        ];
        function setPartnerSource(keyword) {
            const partner = partners.find((p)=>keyword.includes(p));
            if (partner) {
                localStorage.setItem("source", partner);
                setSource(partner);
                searchParams.set("source", partner);
            } else {
                setSource("0");
                // Получаем текущий источник и проверяем, не является ли он одним из допустимых партнеров
                const sourceFound = localStorage.getItem("source");
                if (!partners.includes(sourceFound)) {
                    localStorage.setItem("source", "0");
                    searchParams.set("source", "0");
                }
            }
        }
        if (currentKeyword) {
            setPartnerSource(currentKeyword);
        }
        const ad_campaign = localStorage.getItem("ad_campaign_id");
        const savedUrl = localStorage.getItem("savedUrl");
        if (savedUrl) {
            setNewUrl(savedUrl);
        }
    }, [
        language
    ]);
    const categoryBrands = {
        key1: "Segment2",
        key2: "Premium"
    };
    const { data, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        "brands",
        language
    ], ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrands"])(language), {
        initialData: brands
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (data) {
            const filteredData = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            setBrands(filteredData);
            setLoading(false);
        }
    }, [
        data,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    const shuffledBrands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(brands);
    const cards2 = shuffledBrands.slice(0, 6).map((brand)=>({
            key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                imagen: `/brands/${brand.CasinoBrand}.png`,
                link: brand.GoBig,
                bonus: brand.OurOfferContent
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setFade(false); // Start fade-out
            setTimeout(()=>{
                setCurrentBrandIndex((prevIndex)=>(prevIndex + 1) % brands.length);
                setFade(true); // Start fade-in
            }, 500); // Duration of fade-out effect
        }, 5000000); // Change brand every 5 seconds
        return ()=>clearInterval(interval);
    }, [
        brands.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "topbr-tw mb-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main__container",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                    lineNumber: 149,
                    columnNumber: 13
                }, this) : cards2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start md:flex-row lg:space-y-0 mob1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "slider-left w-full md:w-2/3 mb-10 md:mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                ...settings,
                                children: brands.length > 0 && brands.map((rowData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "background-slider overflow-hidden bg-indigo-600 py-5 rounded-xl h-full flex flex-col justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "basis-3/3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `${rowData.GoBig}/${newUrl}&creative_id=Top_Brand`,
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: `/brands/${rowData.CasinoBrand}.png`,
                                                                alt: rowData.CasinoBrand,
                                                                width: 150,
                                                                height: 75,
                                                                loading: "lazy",
                                                                className: "target-top-new-releases"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                                                                lineNumber: 168,
                                                                columnNumber: 35
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                                                            lineNumber: 164,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: rowData.CasinoBrand
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                                                            lineNumber: 177,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "p",
                                                            children: rowData.OurOfferContent
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                                                            lineNumber: 178,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex sm:mt-4 allbtn",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "btnscale",
                                                                href: `${rowData.GoBig}/${newUrl}&creative_id=Top_Brand`,
                                                                target: "_blank",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "btn btn-new",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: t("Play Now")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                                                                        lineNumber: 186,
                                                                        columnNumber: 39
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                                                                    lineNumber: 185,
                                                                    columnNumber: 37
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                                                                lineNumber: 180,
                                                                columnNumber: 35
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                                                            lineNumber: 179,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 31
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                                                lineNumber: 162,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                                            lineNumber: 161,
                                            columnNumber: 27
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                                        lineNumber: 157,
                                        columnNumber: 25
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                                lineNumber: 154,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                            lineNumber: 153,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Banners_tailwind$2f$TopBrands$2f$pickup$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            newUrl: newUrl
                        }, void 0, false, {
                            fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                            lineNumber: 198,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                    lineNumber: 152,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
                lineNumber: 147,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Banners_tailwind/TopBrands/index.jsx",
            lineNumber: 146,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(TopBrands, "7NlQrI7+kc6XNmUu9h2jnyHuQxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    ];
});
_c = TopBrands;
var _c;
__turbopack_refresh__.register(_c, "TopBrands");

})()),
"[project]/public/newimages/minibanner.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/minibanner.f2eb3af0.png");
})()),
"[project]/public/newimages/minibanner.png.mjs { IMAGE => \"[project]/public/newimages/minibanner.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$newimages$2f$minibanner$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/newimages/minibanner.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$newimages$2f$minibanner$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 309,
    height: 309,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAUEBgArHToBTy5yAl4yfwRjM4MEVjF2Ai4ePwEFBAcAAC0ePQFxO6QFdDmsFHU4rSF1OK0hdDmtFW47oAUqHjkBAFAxcwJyO64ZVCqYjlYjlbtYJZe7YiqamnY5qiFPMG8CAF8xfgRzPK8qWjCe0V4qnf9iLaH/ajGk3ng7rzNQL4sEAF0wegR1PbEqZzys0W42q/9yOa7/ejyw3Xw9sjNSMIsEAEwudgJ5P68eekawrH4/stqEQ7LajkW0uoI9syhUMXICACkfPwFsOp8Gez2yIHw/sTF+QLIxfz+yInE7pAcrHjsBAAUEBgAqHjkBVDFzAl41kARcN48EUzJzAiwdPgEEAwYAoQRUCDXN1PEAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};

})()),
"[project]/components/Banners_tailwind/Brands_carousel/index.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Brands_carousel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function Brands_carousel({ target, creative, categoryBrands }) {
    _s();
    const [newUrl, setNewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentBrandIndex, setCurrentBrandIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fade, setFade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // State to manage fade effect
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            }
        ]
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Обновляем URL, удаляем параметры и устанавливаем source на основе localStorage
        const currentUrl = window.location.href;
        const indexOfQuestionMark = currentUrl.indexOf("?");
        const newUrl2 = indexOfQuestionMark !== -1 ? currentUrl.substring(0, indexOfQuestionMark) : currentUrl;
        window.history.replaceState({}, document.title, newUrl2);
        // Работа с URL и localStorage для определения source
        const urlObj = new URL(currentUrl);
        const searchParams = new URLSearchParams(urlObj.search);
        searchParams.delete("brand");
        const currentKeyword = searchParams.get("keyword");
        const partners = [
            "partner1039",
            "partner1043",
            "partner1044",
            "CLD_VIP",
            "partner1045_b1"
        ];
        function setPartnerSource(keyword) {
            const partner = partners.find((p)=>keyword.includes(p));
            if (partner) {
                localStorage.setItem("source", partner);
                setSource(partner);
                searchParams.set("source", partner);
            } else {
                setSource("0");
                // Получаем текущий источник и проверяем, не является ли он одним из допустимых партнеров
                const sourceFound = localStorage.getItem("source");
                if (!partners.includes(sourceFound)) {
                    localStorage.setItem("source", "0");
                    searchParams.set("source", "0");
                }
            }
        }
        if (currentKeyword) {
            setPartnerSource(currentKeyword);
        }
        const ad_campaign = localStorage.getItem("ad_campaign_id");
        const savedUrl = localStorage.getItem("savedUrl");
        if (savedUrl) {
            setNewUrl(savedUrl);
        }
    }, [
        language
    ]);
    // const categoryBrands = { key1: "Segment2", key2: "Sandbox" };
    const { data, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        "brands",
        language
    ], ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrands"])(language), {
        initialData: brands
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (data) {
            const filteredData = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            setBrands(filteredData);
            setLoading(false);
        }
    }, [
        data,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setFade(false); // Start fade-out
            setTimeout(()=>{
                setCurrentBrandIndex((prevIndex)=>(prevIndex + 1) % brands.length);
                setFade(true); // Start fade-in
            }, 500); // Duration of fade-out effect
        }, 5000000); // Change brand every 5 seconds
        return ()=>clearInterval(interval);
    }, [
        brands.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sm:mt-10 sm:mb-10 mt-5 mb-5 mob-mt10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main__container",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/Banners_tailwind/Brands_carousel/index.jsx",
                    lineNumber: 142,
                    columnNumber: 25
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full brand_carousel rounded-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            ...settings,
                            children: brands.length > 0 && brands.map((rowData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden rounded-xl flex flex-col justify-between",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto max-w-7xl flex flex-col ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto max-w-2xl lg:mx-0 flex flex-row card-sl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "mt-3",
                                                        href: `${rowData.GoBig}/${newUrl}&creative_id=${creative}`,
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: `/brands/${rowData.CasinoBrand}.png`,
                                                            alt: rowData.CasinoBrand,
                                                            width: 300,
                                                            height: 100,
                                                            loading: "lazy",
                                                            className: `${target}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Banners_tailwind/Brands_carousel/index.jsx",
                                                            lineNumber: 162,
                                                            columnNumber: 65
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Brands_carousel/index.jsx",
                                                        lineNumber: 156,
                                                        columnNumber: 61
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "relative btn-play btn-blick overflow-hidden",
                                                        href: `${rowData.GoBig}/${newUrl}&creative_id=${creative}`,
                                                        target: "_blank",
                                                        children: t("Play Now")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Brands_carousel/index.jsx",
                                                        lineNumber: 171,
                                                        columnNumber: 61
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Banners_tailwind/Brands_carousel/index.jsx",
                                                lineNumber: 155,
                                                columnNumber: 57
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Banners_tailwind/Brands_carousel/index.jsx",
                                            lineNumber: 154,
                                            columnNumber: 53
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Banners_tailwind/Brands_carousel/index.jsx",
                                        lineNumber: 153,
                                        columnNumber: 49
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/components/Banners_tailwind/Brands_carousel/index.jsx",
                                    lineNumber: 149,
                                    columnNumber: 45
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Banners_tailwind/Brands_carousel/index.jsx",
                            lineNumber: 146,
                            columnNumber: 33
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Banners_tailwind/Brands_carousel/index.jsx",
                        lineNumber: 145,
                        columnNumber: 29
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Banners_tailwind/Brands_carousel/index.jsx",
                    lineNumber: 144,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/Brands_carousel/index.jsx",
                lineNumber: 140,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Banners_tailwind/Brands_carousel/index.jsx",
            lineNumber: 139,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_s(Brands_carousel, "7NlQrI7+kc6XNmUu9h2jnyHuQxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    ];
});
_c = Brands_carousel;
var _c;
__turbopack_refresh__.register(_c, "Brands_carousel");

})()),
"[project]/components/Banners_tailwind/Banner_small/index.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Banner_small
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$newimages$2f$minibanner$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$newimages$2f$minibanner$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/public/newimages/minibanner.png.mjs { IMAGE => "[project]/public/newimages/minibanner.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Banners_tailwind$2f$Brands_carousel$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Banners_tailwind/Brands_carousel/index.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
function Banner_small() {
    _s();
    const categoryBrands = {
        key1: "Segment2",
        key2: "Sandbox"
    };
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const hash = window.location.hash;
        if (hash) {
            const id = hash.substring(1); // Убираем первый символ "#" из строки
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "real-block",
                    className: "main__container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center px-2 py-2.5 sm:px-3.5 rounded-md mt-10 flex-col sm:flex-row new-brands",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold tracking-tight text-white random-title",
                                children: [
                                    t("TOP NEW"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t("releases")
                                    }, void 0, false, {
                                        fileName: "[project]/components/Banners_tailwind/Banner_small/index.jsx",
                                        lineNumber: 32,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Banners_tailwind/Banner_small/index.jsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Banners_tailwind/Banner_small/index.jsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Banners_tailwind/Banner_small/index.jsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Banners_tailwind/Banner_small/index.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/Banner_small/index.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Banners_tailwind$2f$Brands_carousel$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                categoryBrands: categoryBrands,
                creative: "Top_New_Releases"
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/Banner_small/index.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Banner_small, "yIHkV3cUFHCxFeD16vLIxDL2JDQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Banner_small;
var _c;
__turbopack_refresh__.register(_c, "Banner_small");

})()),
"[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Brands_double_carousel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/shuffle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/slider/Card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function Brands_double_carousel() {
    _s();
    const [newUrl, setNewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentBrandIndex, setCurrentBrandIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fade, setFade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // State to manage fade effect
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Обновляем URL, удаляем параметры и устанавливаем source на основе localStorage
        const currentUrl = window.location.href;
        const indexOfQuestionMark = currentUrl.indexOf("?");
        const newUrl2 = indexOfQuestionMark !== -1 ? currentUrl.substring(0, indexOfQuestionMark) : currentUrl;
        window.history.replaceState({}, document.title, newUrl2);
        // Работа с URL и localStorage для определения source
        const urlObj = new URL(currentUrl);
        const searchParams = new URLSearchParams(urlObj.search);
        searchParams.delete("brand");
        const currentKeyword = searchParams.get("keyword");
        const partners = [
            "partner1039",
            "partner1043",
            "partner1044",
            "CLD_VIP",
            "partner1045_b1"
        ];
        function setPartnerSource(keyword) {
            const partner = partners.find((p)=>keyword.includes(p));
            if (partner) {
                localStorage.setItem("source", partner);
                setSource(partner);
                searchParams.set("source", partner);
            } else {
                setSource("0");
                // Получаем текущий источник и проверяем, не является ли он одним из допустимых партнеров
                const sourceFound = localStorage.getItem("source");
                if (!partners.includes(sourceFound)) {
                    localStorage.setItem("source", "0");
                    searchParams.set("source", "0");
                }
            }
        }
        if (currentKeyword) {
            setPartnerSource(currentKeyword);
        }
        const ad_campaign = localStorage.getItem("ad_campaign_id");
        const savedUrl = localStorage.getItem("savedUrl");
        if (savedUrl) {
            setNewUrl(savedUrl);
        }
    }, [
        language
    ]);
    const categoryBrands = {
        key1: "High_hybrid",
        key2: "1"
    };
    const { data, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        "brands",
        language
    ], ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrands"])(language), {
        initialData: brands
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (data) {
            const filteredData1 = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            // Фильтрация по второму столбцу (добавьте нужные ключи)
            const filteredData2 = data.filter((rowData)=>rowData["Networks"] === "1");
            // Объединение данных из двух фильтраций
            const combinedData = [
                ...filteredData1,
                ...filteredData2
            ];
            setBrands((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(combinedData));
            setLoading(false);
        }
    }, [
        data,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setFade(false); // Start fade-out
            setTimeout(()=>{
                setCurrentBrandIndex((prevIndex)=>(prevIndex + 1) % brands.length);
                setFade(true); // Start fade-in
            }, 500); // Duration of fade-out effect
        }, 5000000); // Change brand every 5 seconds
        return ()=>clearInterval(interval);
    }, [
        brands.length
    ]);
    const firstCut = brands.length / 2 / 2;
    const secondCut = brands.length / 2;
    const thirdCut = firstCut + secondCut;
    const end = brands.length - 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
            lineNumber: 120,
            columnNumber: 9
        }, this) : brands.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brands_rows pt-10 sm:pb-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main__container relative mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "background-slider2 absolute",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "1250",
                            height: "559",
                            viewBox: "0 0 1250 559",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    filter: "url(#filter0_d_9_692)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M1225 480C1225 507.614 1202.61 530 1175 530L75 530C47.3857 530 25 507.614 25 480L25 223.395C25 195.781 47.3857 173.395 75 173.395L700.918 173.395C728.533 173.395 750.918 151.009 750.918 123.395L750.918 70.9999C750.918 43.3857 773.304 20.9999 800.918 20.9999L1175 20.9999C1202.61 20.9999 1225 43.3857 1225 70.9999L1225 480Z",
                                        fill: "url(#paint0_linear_9_692)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                        lineNumber: 134,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                    lineNumber: 133,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                            id: "filter0_d_9_692",
                                            x: "0",
                                            y: "0",
                                            width: "1250",
                                            height: "559",
                                            filterUnits: "userSpaceOnUse",
                                            "color-interpolation-filters": "sRGB",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                                    "flood-opacity": "0",
                                                    result: "BackgroundImageFix"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                    lineNumber: 149,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                    in: "SourceAlpha",
                                                    type: "matrix",
                                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                    result: "hardAlpha"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                    lineNumber: 150,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                                                    dy: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                    lineNumber: 156,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                    stdDeviation: "12.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                    lineNumber: 157,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                                    in2: "hardAlpha",
                                                    operator: "out"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                    lineNumber: 158,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                                    type: "matrix",
                                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                    lineNumber: 159,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                                    mode: "normal",
                                                    in2: "BackgroundImageFix",
                                                    result: "effect1_dropShadow_9_692"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                                    mode: "normal",
                                                    in: "SourceGraphic",
                                                    in2: "effect1_dropShadow_9_692",
                                                    result: "shape"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                    lineNumber: 168,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                            lineNumber: 140,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "paint0_linear_9_692",
                                            x1: "1196.25",
                                            y1: "148.25",
                                            x2: "326.892",
                                            y2: "672.869",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    "stop-color": "#9D4EB3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                    lineNumber: 183,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0.367467",
                                                    "stop-color": "#6C37B1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                    lineNumber: 184,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "1",
                                                    "stop-color": "#310877"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                    lineNumber: 185,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                            lineNumber: 175,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                    lineNumber: 139,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                            lineNumber: 126,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                        lineNumber: 125,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row lg:space-y-0 lg:items-stretch justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-1/2 mr-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto max-w-2xl pb-5 pt-5 sm:pb-5 lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mt-4",
                                                children: [
                                                    t("Best Payout"),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            " ",
                                                            t("Casinos")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                        lineNumber: 195,
                                                        columnNumber: 43
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                lineNumber: 194,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: t("Best payout casinos")
                                            }, void 0, false, {
                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                lineNumber: 197,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-4 text-gray-500",
                                                children: t("Enjoy high returns, fast withdrawals, and unbeatable odds. Ready to win big? Dive in now!")
                                            }, void 0, false, {
                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                lineNumber: 198,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                        lineNumber: 193,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                    lineNumber: 192,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                lineNumber: 191,
                                columnNumber: 17
                            }, this),
                            brands.length > 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " md:w-1/2 ml-2",
                                children: brands.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "background overflow-hidden rounded-xl h-full flex justify-end items-end mt-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "items-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "items marquee",
                                                        children: brands.slice(0, firstCut).map((rowData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "item",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "",
                                                                    href: `${rowData.GoBig}/${newUrl}&creative_id=Best_Payout`,
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: `/brands/${rowData.CasinoBrand}.png`,
                                                                        alt: rowData.CasinoBrand,
                                                                        width: 300,
                                                                        height: 100,
                                                                        loading: "lazy",
                                                                        className: "target-top-new-releases"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                        lineNumber: 218,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                lineNumber: 212,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                        lineNumber: 210,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "aria-hidden": "true",
                                                        class: "items marquee",
                                                        children: brands.slice(0, firstCut).map((rowData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "item",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "",
                                                                    href: `${rowData.GoBig}/${newUrl}&creative_id=Best_Payout`,
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: `/brands/${rowData.CasinoBrand}.png`,
                                                                        alt: rowData.CasinoBrand,
                                                                        width: 300,
                                                                        height: 100,
                                                                        loading: "lazy",
                                                                        className: "target-top-new-releases"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                        lineNumber: 238,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                lineNumber: 232,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                        lineNumber: 230,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                lineNumber: 209,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                class: "items-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        class: "items marquee reverce",
                                                        children: brands.slice(firstCut, secondCut).map((rowData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "item",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "",
                                                                    href: `${rowData.GoBig}/${newUrl}&creative_id=Best_Payout`,
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: `/brands/${rowData.CasinoBrand}.png`,
                                                                        alt: rowData.CasinoBrand,
                                                                        width: 300,
                                                                        height: 100,
                                                                        loading: "lazy",
                                                                        className: "target-top-new-releases"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                        lineNumber: 260,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                lineNumber: 254,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                        lineNumber: 252,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "aria-hidden": "true",
                                                        class: "items marquee reverce",
                                                        children: brands.slice(firstCut, secondCut).map((rowData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "item",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "",
                                                                    href: `${rowData.GoBig}/${newUrl}&creative_id=Best_Payout`,
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: `/brands/${rowData.CasinoBrand}.png`,
                                                                        alt: rowData.CasinoBrand,
                                                                        width: 300,
                                                                        height: 100,
                                                                        loading: "lazy",
                                                                        className: "target-top-new-releases"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                lineNumber: 274,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                        lineNumber: 272,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                lineNumber: 251,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "items-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "items marquee",
                                                        children: brands.slice(secondCut, thirdCut).map((rowData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "item",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "",
                                                                    href: `${rowData.GoBig}/${newUrl}&creative_id=Best_Payout`,
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: `/brands/${rowData.CasinoBrand}.png`,
                                                                        alt: rowData.CasinoBrand,
                                                                        width: 300,
                                                                        height: 100,
                                                                        loading: "lazy",
                                                                        className: "target-top-new-releases"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                        lineNumber: 302,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                    lineNumber: 297,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                lineNumber: 296,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                        lineNumber: 294,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "aria-hidden": "true",
                                                        class: "items marquee",
                                                        children: brands.slice(secondCut, thirdCut).map((rowData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "item",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "",
                                                                    href: `${rowData.GoBig}/${newUrl}&creative_id=Best_Payout`,
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: `/brands/${rowData.CasinoBrand}.png`,
                                                                        alt: rowData.CasinoBrand,
                                                                        width: 300,
                                                                        height: 100,
                                                                        loading: "lazy",
                                                                        className: "target-top-new-releases"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                        lineNumber: 322,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                lineNumber: 316,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                        lineNumber: 314,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                lineNumber: 293,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                class: "items-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        class: "items marquee reverce",
                                                        children: brands.slice(thirdCut, end).map((rowData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "item",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "",
                                                                    href: `${rowData.GoBig}/${newUrl}&creative_id=Best_Payout`,
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: `/brands/${rowData.CasinoBrand}.png`,
                                                                        alt: rowData.CasinoBrand,
                                                                        width: 300,
                                                                        height: 100,
                                                                        loading: "lazy",
                                                                        className: "target-top-new-releases"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                        lineNumber: 344,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                    lineNumber: 339,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                lineNumber: 338,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                        lineNumber: 336,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "aria-hidden": "true",
                                                        class: "items marquee reverce",
                                                        children: brands.slice(thirdCut, end).map((rowData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "item",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "",
                                                                    href: `${rowData.GoBig}/${newUrl}&creative_id=Best_Payout`,
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: `/brands/${rowData.CasinoBrand}.png`,
                                                                        alt: rowData.CasinoBrand,
                                                                        width: 300,
                                                                        height: 100,
                                                                        loading: "lazy",
                                                                        className: "target-top-new-releases"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                        lineNumber: 364,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                    lineNumber: 359,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                lineNumber: 358,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                        lineNumber: 356,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                lineNumber: 335,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                        lineNumber: 208,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                    lineNumber: 207,
                                    columnNumber: 23
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                lineNumber: 205,
                                columnNumber: 19
                            }, this),
                            brands.length <= 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " md:w-1/2 ml-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "background overflow-hidden rounded-xl h-full flex justify-end items-end sm:mt-20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "wrap h-full flex items-end justify-center flex-col",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "items-wrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-4 z-30 ",
                                                children: brands.slice(0, 9).map((rowData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "item2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            className: "",
                                                            href: `${rowData.GoBig}/${newUrl}&creative_id=Best_Payout`,
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: `/brands/${rowData.CasinoBrand}.png`,
                                                                alt: rowData.CasinoBrand,
                                                                width: 300,
                                                                height: 100,
                                                                loading: "lazy",
                                                                className: "target-top-new-releases"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                                lineNumber: 396,
                                                                columnNumber: 35
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                            lineNumber: 391,
                                                            columnNumber: 33
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                        lineNumber: 390,
                                                        columnNumber: 31
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                                lineNumber: 388,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                            lineNumber: 387,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                        lineNumber: 386,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                    lineNumber: 385,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                                lineNumber: 384,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                        lineNumber: 190,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
                lineNumber: 124,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Banners_tailwind/Brands_double_carousel/index.jsx",
            lineNumber: 123,
            columnNumber: 11
        }, this)
    }, void 0, false);
}
_s(Brands_double_carousel, "7NlQrI7+kc6XNmUu9h2jnyHuQxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    ];
});
_c = Brands_double_carousel;
var _c;
__turbopack_refresh__.register(_c, "Brands_double_carousel");

})()),
"[project]/public/newimages/bannerRandom.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/bannerRandom.612fd271.png");
})()),
"[project]/public/newimages/bannerRandom.png.mjs { IMAGE => \"[project]/public/newimages/bannerRandom.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$newimages$2f$bannerRandom$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/newimages/bannerRandom.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$newimages$2f$bannerRandom$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 405,
    height: 405,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AM2ctvXWlKT/r5Kz/3hkhf+Oc2j/aFFe/ysRSP85JFD1AIAskP98PoD/b1F8/8e9wP/l1MP/nX99/2ROev92ZYf/AJRWgv9zSXD/e2Ze/83BsP/i1sn/rJml/4Nwlv93ZIr/AKyGm/91VW//oIBX/6mYeP+6qo7/rpyb/3hcj/9hSXj/AI1kqv+jgZX/vJM8/7OQZP/Br5P/rpuE/31gd/9FK1z/AI5no/+5nKz/4b9v/6+QXP/AqYv/1a6c/8KNS/9eQ1H/AMu8z//bz9j/+O7X/9LEpv+4o33/v55t/9m0cv+2p6T/AIhzmvWhkK7/6+Xn//Pt5v/38OH/7+LH/+rg1P/Kxcv10M6webnIs5EAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};

})()),
"[project]/components/Banners_tailwind/Random_block/index.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Random_block
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$newimages$2f$bannerRandom$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$newimages$2f$bannerRandom$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/public/newimages/bannerRandom.png.mjs { IMAGE => "[project]/public/newimages/bannerRandom.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
function Random_block() {
    _s();
    const [newUrl, setNewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [redirectUrl, setRedirectUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let url = "";
        switch(source){
            case "partner1039":
                url = "https://link.reg2dep.business/topbonus_rnd39";
                break;
            case "partner1043":
                url = "https://link.reg2dep.business/topbonus_rnd43";
                break;
            case "partner1044":
                url = "https://link.reg2dep.business/topbonus_rnd44";
                break;
            case "CLD_VIP":
            case "partner1045_b1":
                url = "https://link.reg2dep.business/topbonus_rndcld";
                break;
            default:
                url = "https://link.reg2dep.business/topbonus_rnd";
        }
        setRedirectUrl(url);
        const savedUrl = localStorage.getItem("savedUrl");
        if (savedUrl) {
            setNewUrl(savedUrl);
        }
    }, [
        source
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const hash = window.location.hash;
        if (hash && elementRef.current) {
            const scrollToElement = ()=>{
                const id = hash.substring(1);
                const element = document.getElementById(id);
                if (element) {
                    // Позиция элемента
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    // Плавный скролл
                    window.scrollTo({
                        top: elementPosition,
                        behavior: "smooth"
                    });
                }
            };
            // Увеличенная задержка для более плавного рендеринга
            setTimeout(()=>{
                scrollToElement();
            }, 500); // Попробуйте разные значения, например 500ms
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: elementRef,
            id: "try-your-luck",
            className: "",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main__container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative py-16 ptpt",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-7xl lg:bg-transparent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:grid lg:grid-cols-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16 abs-banner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$newimages$2f$bannerRandom$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$newimages$2f$bannerRandom$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                        alt: "banner",
                                        width: 405,
                                        height: 405,
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Banners_tailwind/Random_block/index.jsx",
                                        lineNumber: 78,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Random_block/index.jsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative bg-random lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-bold tracking-tight text-white random-title",
                                                id: "join-heading",
                                                children: [
                                                    t("TRY YOUR"),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t("luck!")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Random_block/index.jsx",
                                                        lineNumber: 90,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Banners_tailwind/Random_block/index.jsx",
                                                lineNumber: 89,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-white",
                                                children: t("Feeling lucky? Click to unlock a cool, exclusive bonus—only available right now. Don't miss your chance!")
                                            }, void 0, false, {
                                                fileName: "[project]/components/Banners_tailwind/Random_block/index.jsx",
                                                lineNumber: 92,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `${redirectUrl}/${newUrl}&creative_id=Try_Your_Luck`,
                                                target: "_blank",
                                                className: "flex mlml",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "btn btn-new",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: t("Try Your Luck!")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Random_block/index.jsx",
                                                        lineNumber: 102,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Random_block/index.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Banners_tailwind/Random_block/index.jsx",
                                                lineNumber: 96,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Banners_tailwind/Random_block/index.jsx",
                                        lineNumber: 88,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Random_block/index.jsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Banners_tailwind/Random_block/index.jsx",
                            lineNumber: 76,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Banners_tailwind/Random_block/index.jsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Banners_tailwind/Random_block/index.jsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/Random_block/index.jsx",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Banners_tailwind/Random_block/index.jsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Random_block, "aCBegh0VVX0sDvU04SzT2IR9p0s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Random_block;
var _c;
__turbopack_refresh__.register(_c, "Random_block");

})()),
"[project]/components/Banners_tailwind/Jackpot_banner/calc.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
const Counter = ()=>{
    _s();
    const startAmount = 250000;
    const maxAmount = 375000;
    const fixedStartTime = Date.UTC(2024, 7, 4, 0, 0, 0);
    // Состояние для отслеживания, рендерится ли компонент на клиенте
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Функция для генерации случайного числа от 5 до 25
    const getRandomIncrement = ()=>Math.floor(Math.random() * 21) + 5;
    // Функция для вычисления текущей суммы
    const calculateInitialAmount = ()=>{
        const now = Date.now();
        const differenceInMs = now - fixedStartTime;
        const differenceInSeconds = Math.floor(differenceInMs / 1000);
        let currentAmount = startAmount;
        // Генерация случайных приростов для каждой секунды
        for(let i = 0; i < differenceInSeconds; i++){
            currentAmount += getRandomIncrement();
            if (currentAmount >= maxAmount) {
                currentAmount = startAmount;
            }
        }
        return currentAmount;
    };
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(startAmount);
    const [displayAmount, setDisplayAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(startAmount);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Устанавливаем флаг для подтверждения, что мы на клиенте
        setIsClient(true);
        // Начинаем с вычисленного значения только на клиенте
        setAmount(calculateInitialAmount());
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const intervalId = setInterval(()=>{
            setAmount((prevAmount)=>{
                let newAmount = prevAmount + getRandomIncrement();
                if (newAmount >= maxAmount) {
                    newAmount = startAmount;
                }
                return newAmount;
            });
        }, 2000);
        return ()=>clearInterval(intervalId);
    }, [
        isClient
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isClient) {
            const animationInterval = setInterval(()=>{
                setDisplayAmount((prevDisplayAmount)=>{
                    const step = (amount - prevDisplayAmount) / 10;
                    let newDisplayAmount = prevDisplayAmount + step;
                    if (step > 0 && newDisplayAmount >= amount || step < 0 && newDisplayAmount <= amount) {
                        newDisplayAmount = amount;
                        clearInterval(animationInterval);
                    }
                    return newDisplayAmount;
                });
            }, 50);
            return ()=>clearInterval(animationInterval);
        }
    }, [
        amount,
        isClient
    ]);
    // Ожидаем рендеринг только на клиенте
    if (!isClient) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            children: [
                "$",
                Math.floor(displayAmount).toLocaleString()
            ]
        }, void 0, true, {
            fileName: "[project]/components/Banners_tailwind/Jackpot_banner/calc.jsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Banners_tailwind/Jackpot_banner/calc.jsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
};
_s(Counter, "96/qrkEP8dtNxFVf298ZCV9aYXs=");
_c = Counter;
const __TURBOPACK__default__export__ = Counter;
var _c;
__turbopack_refresh__.register(_c, "Counter");

})()),
"[project]/components/Banners_tailwind/Jackpot_banner/index.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Jackpot_banner
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Banners_tailwind$2f$Brands_carousel$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Banners_tailwind/Brands_carousel/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Banners_tailwind$2f$Jackpot_banner$2f$calc$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Banners_tailwind/Jackpot_banner/calc.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
function Jackpot_banner() {
    _s();
    const [currentValue, setCurrentValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const targetValue = 2924899349;
    const duration = 3000;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const startTime = performance.now();
        const updateCounter = (time)=>{
            const elapsedTime = time - startTime;
            if (elapsedTime < duration) {
                setCurrentValue(Math.floor(targetValue * (elapsedTime / duration)));
                requestAnimationFrame(updateCounter);
            } else {
                setCurrentValue(targetValue);
            }
        };
        requestAnimationFrame(updateCounter);
    }, [
        targetValue,
        duration
    ]);
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const target = "target-fw-jackpot";
    const creative = "Jackpot";
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const categoryBrands = {
        key1: "High_hybrid",
        key2: "1"
    };
    const { data, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        "brands",
        language
    ], ()=>getBrands(language), {
        initialData: brands
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (data) {
            // Фильтрация по первому столбцу
            const filteredData1 = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            // Фильтрация по второму столбцу (добавьте нужные ключи)
            const filteredData2 = data.filter((rowData)=>rowData["Networks"] === "1");
            // Объединение данных из двух фильтраций
            const combinedData = [
                ...filteredData1,
                ...filteredData2
            ];
            setBrands(combinedData);
        }
    }, [
        data,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main__container !mt-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center gap-x-6 banner-jack px-6 py-2.5 sm:px-3.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl sm:text-xl leading-6 text-white uppercase",
                                children: [
                                    t("HIT THE"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t("JACKPOT!")
                                    }, void 0, false, {
                                        fileName: "[project]/components/Banners_tailwind/Jackpot_banner/index.jsx",
                                        lineNumber: 71,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Banners_tailwind/Jackpot_banner/index.jsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Banners_tailwind$2f$Jackpot_banner$2f$calc$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Jackpot_banner/index.jsx",
                                    lineNumber: 74,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Banners_tailwind/Jackpot_banner/index.jsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Banners_tailwind/Jackpot_banner/index.jsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Banners_tailwind/Jackpot_banner/index.jsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/Jackpot_banner/index.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Banners_tailwind$2f$Brands_carousel$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                creative: creative,
                target: target,
                categoryBrands: categoryBrands
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/Jackpot_banner/index.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Jackpot_banner, "ZmXC9zJrtuJxoVqWfYYQgFuHJmg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    ];
});
_c = Jackpot_banner;
var _c;
__turbopack_refresh__.register(_c, "Jackpot_banner");

})()),
"[project]/components/getBrands/getBrands.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getBrands": ()=>getBrands
});
const getBrands = async (categoryBrands, lng)=>{
    const apiAll = "https://bonusnumber1.com/api/brandsNew/read.php";
    const api1039 = "https://bonusnumber1.com/api/brandsNew2/read.php";
    const api1043 = "https://bonusnumber1.com/api/brandsNew3/read.php";
    const api1044 = "https://bonusnumber1.com/api/brandsNew4/read.php";
    const apiCLD_VIP = "https://bonusnumber1.com/api/brandsNew5/read.php";
    const availableLanguages = [
        {
            code: "au",
            label: "Australia",
            flag: "🇦🇺"
        },
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "de",
            label: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "ie",
            label: "Ireland",
            flag: "🇮🇪"
        },
        {
            code: "nz",
            label: "New Zealand",
            flag: "🇳🇿"
        },
        {
            code: "no",
            label: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "fi",
            label: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "at",
            label: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "ch",
            label: "Switzerland",
            flag: "🇨🇭"
        },
        {
            code: "dk",
            label: "Denmark",
            flag: "🇩🇰"
        },
        {
            code: "fr",
            label: "France",
            flag: "🇫🇷"
        },
        {
            code: "it",
            label: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "pl",
            label: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "se",
            label: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "cz",
            label: "Czech",
            flag: "🇨🇿"
        },
        {
            code: "sk",
            label: "Slovakia",
            flag: "🇸🇰"
        },
        {
            code: "be",
            label: "Belgium",
            flag: "🇧🇪"
        },
        {
            code: "gr",
            label: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "nl",
            label: "Netherlands",
            flag: "🇳🇱"
        },
        {
            code: "hu",
            label: "Hungary",
            flag: "🇭🇺"
        },
        {
            code: "bg",
            label: "Bulgaria",
            flag: "🇧🇬"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    const availableLanguages1039 = [
        {
            code: "au",
            label: "Australia",
            flag: "🇦🇺"
        },
        {
            code: "at",
            label: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "be",
            label: "Belgium",
            flag: "🇧🇪"
        },
        {
            code: "bg",
            label: "Bulgaria",
            flag: "🇧🇬"
        },
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "cz",
            label: "Czech",
            flag: "🇨🇿"
        },
        {
            code: "dk",
            label: "Denmark",
            flag: "🇩🇰"
        },
        {
            code: "fi",
            label: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "fr",
            label: "France",
            flag: "🇫🇷"
        },
        {
            code: "de",
            label: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "gr",
            label: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "hu",
            label: "Hungary",
            flag: "🇭🇺"
        },
        {
            code: "ie",
            label: "Ireland",
            flag: "🇮🇪"
        },
        {
            code: "it",
            label: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "nl",
            label: "Netherlands",
            flag: "🇳🇱"
        },
        {
            code: "nz",
            label: "New Zealand",
            flag: "🇳🇿"
        },
        {
            code: "no",
            label: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "pl",
            label: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "pt",
            label: "Portugal",
            flag: "🇵🇹"
        },
        {
            code: "sk",
            label: "Slovakia",
            flag: "🇸🇰"
        },
        {
            code: "es",
            label: "Spain",
            flag: "🇪🇸"
        },
        {
            code: "se",
            label: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "ch",
            label: "Switzerland",
            flag: "🇨🇭"
        },
        {
            code: "tr",
            label: "Turkey",
            flag: "🇹🇷"
        },
        {
            code: "gb",
            label: "United Kingdom",
            flag: "🇬🇧"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    const availableLanguages1043 = [
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "us",
            label: "United States",
            flag: "🇺🇸"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    const availableLanguages1044 = [
        {
            code: "au",
            label: "Australia",
            flag: "🇦🇺"
        },
        {
            code: "at",
            label: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "be",
            label: "Belgium",
            flag: "🇧🇪"
        },
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "ch",
            label: "Switzerland",
            flag: "🇨🇭"
        },
        {
            code: "nl",
            label: "Netherlands",
            flag: "🇳🇱"
        },
        {
            code: "de",
            label: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "gr",
            label: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "cz",
            label: "The Czech Republic",
            flag: "🇨🇿"
        },
        {
            code: "fi",
            label: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "gb",
            label: "Great Britain",
            flag: "🇬🇧"
        },
        {
            code: "ie",
            label: "Ireland",
            flag: "🇮🇪"
        },
        {
            code: "it",
            label: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "nz",
            label: "New Zealand",
            flag: "🇳🇿"
        },
        {
            code: "no",
            label: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "pl",
            label: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "za",
            label: "South Africa",
            flag: "🇿🇦"
        },
        {
            code: "se",
            label: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "us",
            label: "USA",
            flag: "🇺🇸"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    const availableLanguagesCLD_VIP = [
        {
            code: "au",
            label: "Australia",
            flag: "🇦🇺"
        },
        {
            code: "at",
            label: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "be",
            label: "Belgium",
            flag: "🇧🇪"
        },
        {
            code: "ca",
            label: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "ch",
            label: "Switzerland",
            flag: "🇨🇭"
        },
        {
            code: "cz",
            label: "The Czech Republic",
            flag: "🇨🇿"
        },
        {
            code: "de",
            label: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "dk",
            label: "Denmark",
            flag: "🇩🇰"
        },
        {
            code: "fi",
            label: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "fr",
            label: "France",
            flag: "🇫🇷"
        },
        {
            code: "gr",
            label: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "hu",
            label: "Hungary",
            flag: "🇭🇺"
        },
        {
            code: "ie",
            label: "Ireland",
            flag: "🇮🇪"
        },
        {
            code: "it",
            label: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "no",
            label: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "nz",
            label: "New Zealand",
            flag: "🇳🇿"
        },
        {
            code: "pl",
            label: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "se",
            label: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "sk",
            label: "Slovakia",
            flag: "🇸🇰"
        },
        {
            code: "all",
            label: "World",
            flag: "🌍"
        }
    ];
    const partners = {
        partner1039: {
            url: api1039,
            languages: availableLanguages1039
        },
        partner1043: {
            url: api1043,
            languages: availableLanguages1043
        },
        partner1044: {
            url: api1044,
            languages: availableLanguages1044
        },
        CLD_VIP: {
            url: apiCLD_VIP,
            languages: availableLanguagesCLD_VIP
        },
        partner1045_b1: {
            url: apiCLD_VIP,
            languages: availableLanguagesCLD_VIP
        },
        default: {
            url: apiAll,
            languages: availableLanguages
        }
    };
    const source = localStorage.getItem("source") || "default";
    const { url, languages } = partners[source];
    // Проверяем, поддерживается ли переданный язык
    let supportedLanguage = languages.find((language)=>language.code.toUpperCase() === lng.toUpperCase());
    // Если язык не поддерживается, используем "all"
    if (!supportedLanguage) {
        supportedLanguage = {
            code: "all"
        };
    }
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error("Failed to fetch data:", res.status);
            return [];
        }
        const responseData = await res.json();
        const filteredData = responseData.brandsNew.filter((rowData)=>(rowData.GEO === supportedLanguage.code.toUpperCase() || supportedLanguage.code === "ALL") && rowData["CurrentStatus"] === "Ongoing" && ![
                "Mirax (FS)",
                "Katsubet (FS)",
                "7Bit (FS)"
            ].includes(rowData["CasinoBrand"]) && rowData[categoryBrands.key1] === categoryBrands.key2);
        return filteredData;
    } catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
};

})()),
"[project]/components/Brands_home/UserBrands.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$getUser$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getUser/getUser.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const LazySlider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c = ()=>__turbopack_require__("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript, async loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "components/Brands_home/UserBrands.tsx -> " + "react-slick"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Download..."
        }, void 0, false, {
            fileName: "[project]/components/Brands_home/UserBrands.tsx",
            lineNumber: 6,
            columnNumber: 18
        }, this)
});
_c1 = LazySlider;
;
;
;
;
;
;
;
;
;
;
const BRAND_CATEGORIES = {
    key1: "CurrentStatus",
    key2: "Ongoing"
};
const BRAND_CATEGORIES2 = {
    key1: "FirstPriority",
    key2: "1"
};
const UserBrands = ()=>{
    _s();
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [otherBrands, setOtherBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isShow, setIsShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [savedUrl, setSavedUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryBrand, setCountryBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ALL");
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const loadLocalStorageData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setUserId(localStorage.getItem("user_id") || "");
        setSavedUrl(localStorage.getItem("savedUrl") || "");
        setCountryBrand(localStorage.getItem("country_brands") || "ALL");
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadLocalStorageData();
        const handleStorageChange = (e)=>{
            if (e.key === "user_id" || e.key === "savedUrl" || e.key === "country_brands") {
                loadLocalStorageData();
            }
        };
        window.addEventListener("storage", handleStorageChange);
        return ()=>{
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [
        loadLocalStorageData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userId) {
            fetchBrands();
        }
    }, [
        userId,
        language
    ]);
    const fetchBrands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!userId) {
            console.error("No user ID found, unable to fetch brands.");
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getUser$2f$getUser$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserData"])(userId);
            if (!data) {
                console.error("Received null data from getUserData");
                setIsLoading(false);
                return;
            }
            const userLeads = JSON.parse(data.leads || "[]");
            const userSales = JSON.parse(data.sales || "[]");
            const leadsIds = userLeads.map((lead)=>lead.campaignId);
            const salesIds = userSales.map((sale)=>sale.campaignId);
            const brandsData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrands"])(BRAND_CATEGORIES, language);
            const brandsData2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrands"])(BRAND_CATEGORIES2, language);
            const leadsOnlyBrands = brandsData.filter((brand)=>leadsIds.includes(brand.KeitaroGoBigID));
            setBrands(leadsOnlyBrands);
            console.log("ALLLL", brandsData, leadsOnlyBrands);
            setOtherBrands(brandsData.filter((brand)=>!leadsIds.includes(brand.KeitaroGoBigID)));
        } catch (error) {
            console.error("Error loading brands:", error);
        } finally{
            setIsLoading(false);
        }
    }, [
        language,
        userId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMobile(window.innerWidth < 768);
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    if (!userId) {
        return null;
    }
    const chunkBrands = (brands, chunkSize)=>{
        const chunks = [];
        for(let i = 0; i < brands.length; i += chunkSize){
            chunks.push(brands.slice(i, i + chunkSize));
        }
        return chunks;
    };
    const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 2000,
        arrows: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "main__container",
        children: brands.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col mt-10 mob-mt10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full brand_carousel rounded-md",
                children: [
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Brands_home/UserBrands.tsx",
                        lineNumber: 202,
                        columnNumber: 27
                    }, this),
                    brands.length > 5 && !isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...settings,
                        children: brands.map((chunk, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden rounded-xl flex flex-col justify-between card-rel",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto max-w-7xl flex flex-col ",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto max-w-2xl lg:mx-0 flex flex-row card-sl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "mt-3",
                                                    href: `${chunk.GoBig}/&creative_id=USER_REGISTRATION`,
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: `/brands/${chunk.CasinoBrand}.png`,
                                                        alt: chunk.CasinoBrand,
                                                        width: 300,
                                                        height: 100,
                                                        loading: "lazy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "relative btn-play btn-blick overflow-hidden",
                                                    href: `${chunk.GoBig}/&creative_id=USER_REGISTRATION`,
                                                    target: "_blank",
                                                    children: "Play Now"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                            lineNumber: 212,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                        lineNumber: 211,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                    lineNumber: 210,
                                    columnNumber: 21
                                }, this)
                            }, index, false, {
                                fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                lineNumber: 206,
                                columnNumber: 19
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/UserBrands.tsx",
                        lineNumber: 204,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: isMobile && brands.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            ...settings,
                            children: brands.map((chunk, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden rounded-xl flex flex-col justify-between card-rel",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto max-w-7xl flex flex-col ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto max-w-2xl lg:mx-0 flex flex-row card-sl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "mt-3",
                                                        href: `${chunk.GoBig}/&creative_id=USER_REGISTRATION`,
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: `/brands/${chunk.CasinoBrand}.png`,
                                                            alt: chunk.CasinoBrand,
                                                            width: 300,
                                                            height: 100,
                                                            loading: "lazy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 30
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "relative btn-play btn-blick overflow-hidden",
                                                        href: `${chunk.GoBig}/&creative_id=USER_REGISTRATION`,
                                                        target: "_blank",
                                                        children: "Play Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                                lineNumber: 250,
                                                columnNumber: 26
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                            lineNumber: 249,
                                            columnNumber: 24
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                        lineNumber: 248,
                                        columnNumber: 22
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                    lineNumber: 244,
                                    columnNumber: 22
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Brands_home/UserBrands.tsx",
                            lineNumber: 242,
                            columnNumber: 19
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap",
                            children: brands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden rounded-xl flex flex-col justify-between card-not-slider",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto max-w-7xl flex flex-col ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto max-w-2xl lg:mx-0 flex flex-row card-sl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "mt-3",
                                                        href: `${brand.GoBig}/&creative_id=USER_REGISTRATION`,
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: `/brands/${brand.CasinoBrand}.png`,
                                                            alt: brand.CasinoBrand,
                                                            width: 300,
                                                            height: 100,
                                                            loading: "lazy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 33
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "relative btn-play btn-blick overflow-hidden",
                                                        href: `${brand.GoBig}/&creative_id=REGISTRATION`,
                                                        target: "_blank",
                                                        children: "Play Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                                lineNumber: 286,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                            lineNumber: 285,
                                            columnNumber: 27
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                        lineNumber: 284,
                                        columnNumber: 25
                                    }, this)
                                }, brand.CasinoBrand, false, {
                                    fileName: "[project]/components/Brands_home/UserBrands.tsx",
                                    lineNumber: 280,
                                    columnNumber: 23
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Brands_home/UserBrands.tsx",
                            lineNumber: 278,
                            columnNumber: 19
                        }, this)
                    }, void 0, false)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Brands_home/UserBrands.tsx",
                lineNumber: 201,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Brands_home/UserBrands.tsx",
            lineNumber: 200,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
            fileName: "[project]/components/Brands_home/UserBrands.tsx",
            lineNumber: 319,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Brands_home/UserBrands.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
};
_s(UserBrands, "shkK1VrR1m3lYB/8YoH7GDRRGsc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c2 = UserBrands;
const __TURBOPACK__default__export__ = UserBrands;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "LazySlider$dynamic");
__turbopack_refresh__.register(_c1, "LazySlider");
__turbopack_refresh__.register(_c2, "UserBrands");

})()),
"[project]/components/Banners_tailwind/Next_event_banner/index.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Next_event_banner
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_home$2f$UserBrands$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Brands_home/UserBrands.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function Next_event_banner() {
    _s();
    const categoryBrands = {
        key1: "Segment2",
        key2: "Sandbox"
    };
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main__container !mt-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center gap-x-6 banner-event px-6 py-2.5 sm:px-3.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl sm:text-xl leading-6 text-white uppercase",
                                children: t("Uncover the latest casinos")
                            }, void 0, false, {
                                fileName: "[project]/components/Banners_tailwind/Next_event_banner/index.jsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "banner-event-p",
                                children: [
                                    t("and be among the"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t("first to play!")
                                    }, void 0, false, {
                                        fileName: "[project]/components/Banners_tailwind/Next_event_banner/index.jsx",
                                        lineNumber: 20,
                                        columnNumber: 67
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Banners_tailwind/Next_event_banner/index.jsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Banners_tailwind/Next_event_banner/index.jsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Banners_tailwind/Next_event_banner/index.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/Next_event_banner/index.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_home$2f$UserBrands$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/Next_event_banner/index.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Next_event_banner, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Next_event_banner;
var _c;
__turbopack_refresh__.register(_c, "Next_event_banner");

})()),
"[project]/public/newimages/facmob.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/facmob.a8495e34.png");
})()),
"[project]/public/newimages/facmob.png.mjs { IMAGE => \"[project]/public/newimages/facmob.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$newimages$2f$facmob$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/newimages/facmob.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$newimages$2f$facmob$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 451,
    height: 360,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/AGw3dxiMS4o9iEWOQIJCf4SCQ4CEej2JNmo4djRQKVoOAIhFgnKXZ1rje0dW1mM0QPJlN0PyZ0dkzXVeYuF6Qn9yAHZAZ6eLalH/YkM3/V5CO/1aQDr+YklF/ZyAav93QWSwAHk9dotpPzT8YTZD7IJgYPR9XF30cUlV7H1bT/1+RHmSAIRFh3JgOzf1az1W1HBKVOZtSFLmcUVd1WdHQ/WDRIZ0AHw+iiKHR4KAkUqbTo1KkGiMSo9okEucToZHgoB6P4ki3mNWiZ5UcW8AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 6
};

})()),
"[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Banner_small
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$newimages$2f$facmob$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$newimages$2f$facmob$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/public/newimages/facmob.png.mjs { IMAGE => "[project]/public/newimages/facmob.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function Banner_small() {
    _s();
    const [newUrl, setNewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [redirectUrl, setRedirectUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let url = "";
        switch(source){
            case "partner1039":
                url = "https://link.reg2dep.business/topbonus_rnd39";
                break;
            case "partner1043":
                url = "https://link.reg2dep.business/topbonus_rnd43";
                break;
            case "partner1044":
                url = "https://link.reg2dep.business/topbonus_rnd44";
                break;
            case "CLD_VIP":
                url = "https://link.reg2dep.business/topbonus_rndcld";
                break;
            case "partner1045_b1":
                url = "https://link.reg2dep.business/topbonus_rndcld";
                break;
            default:
                url = "https://link.reg2dep.business/topbonus_rnd";
        }
        setRedirectUrl(url);
        const savedUrl = localStorage.getItem("savedUrl");
        if (savedUrl) {
            setNewUrl(savedUrl);
        }
    }, [
        source
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "emojis",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main__container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center face-mob",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg leading-6 ",
                            children: [
                                t("What is your choise"),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t("for today?")
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx",
                                    lineNumber: 54,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mob-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$newimages$2f$facmob$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$newimages$2f$facmob$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$newimages$2f$facmob$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$newimages$2f$facmob$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                width: 400,
                                height: 150
                            }, void 0, false, {
                                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-start btns-ch",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-20 w-20 btn-choose",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `${redirectUrl}/${newUrl}&creative_id=Choice_Of_The_Day`,
                                        target: "_blank",
                                        children: t("Choose")
                                    }, void 0, false, {
                                        fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-20 w-20 btn-choose",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `${redirectUrl}/${newUrl}&creative_id=Choice_Of_The_Day`,
                                        target: "_blank",
                                        children: t("Choose")
                                    }, void 0, false, {
                                        fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-20 w-20 btn-choose",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `${redirectUrl}/${newUrl}&creative_id=Choice_Of_The_Day`,
                                        target: "_blank",
                                        children: t("Choose")
                                    }, void 0, false, {
                                        fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Emoji_picker/index.jsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Banner_small, "/wEz7sHdsdFNW57b57LAMm6yOrY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Banner_small;
var _c;
__turbopack_refresh__.register(_c, "Banner_small");

})()),
"[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Popular_offers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/shuffle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/slider/Card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function Popular_offers() {
    _s();
    const [newUrl, setNewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentBrandIndex, setCurrentBrandIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fade, setFade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // State to manage fade effect
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Обновляем URL, удаляем параметры и устанавливаем source на основе localStorage
        const currentUrl = window.location.href;
        const indexOfQuestionMark = currentUrl.indexOf("?");
        const newUrl2 = indexOfQuestionMark !== -1 ? currentUrl.substring(0, indexOfQuestionMark) : currentUrl;
        window.history.replaceState({}, document.title, newUrl2);
        // Работа с URL и localStorage для определения source
        const urlObj = new URL(currentUrl);
        const searchParams = new URLSearchParams(urlObj.search);
        searchParams.delete("brand");
        const currentKeyword = searchParams.get("keyword");
        const partners = [
            "partner1039",
            "partner1043",
            "partner1044",
            "CLD_VIP",
            "partner1045_b1"
        ];
        function setPartnerSource(keyword) {
            const partner = partners.find((p)=>keyword.includes(p));
            if (partner) {
                localStorage.setItem("source", partner);
                setSource(partner);
                searchParams.set("source", partner);
            } else {
                setSource("0");
                // Получаем текущий источник и проверяем, не является ли он одним из допустимых партнеров
                const sourceFound = localStorage.getItem("source");
                if (!partners.includes(sourceFound)) {
                    localStorage.setItem("source", "0");
                    searchParams.set("source", "0");
                }
            }
        }
        if (currentKeyword) {
            setPartnerSource(currentKeyword);
        }
        const ad_campaign = localStorage.getItem("ad_campaign_id");
        const savedUrl = localStorage.getItem("savedUrl");
        if (savedUrl) {
            setNewUrl(savedUrl);
        }
    }, [
        language
    ]);
    const categoryBrands = {
        key1: "Hottest",
        key2: "1"
    };
    const { data, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        "brands",
        language
    ], ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrands"])(language), {
        initialData: brands
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (data) {
            const filteredData = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            setBrands(filteredData);
            setLoading(false);
        }
    }, [
        data,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    const shuffledBrands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(brands);
    const cards2 = shuffledBrands.slice(0, 6).map((brand)=>({
            key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                imagen: `/brands/${brand.CasinoBrand}.png`,
                link: brand.GoBig,
                bonus: brand.OurOfferContent
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setFade(false); // Start fade-out
            setTimeout(()=>{
                setCurrentBrandIndex((prevIndex)=>(prevIndex + 1) % brands.length);
                setFade(true); // Start fade-in
            }, 500); // Duration of fade-out effect
        }, 5000000); // Change brand every 5 seconds
        return ()=>clearInterval(interval);
    }, [
        brands.length
    ]);
    const projects = [
        {
            name: "Graph API",
            initials: "GA",
            href: "#",
            members: 16,
            bgColor: "bg-pink-600"
        },
        {
            name: "Component Design",
            initials: "CD",
            href: "#",
            members: 12,
            bgColor: "bg-purple-600"
        },
        {
            name: "Templates",
            initials: "T",
            href: "#",
            members: 16,
            bgColor: "bg-yellow-500"
        },
        {
            name: "React Components",
            initials: "RC",
            href: "#",
            members: 8,
            bgColor: "bg-green-500"
        }
    ];
    const number = brands.length > 5 ? 5 : brands.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fivehot",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main__container",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                    lineNumber: 161,
                    columnNumber: 13
                }, this) : brands.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fivehot-banner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: [
                                        number,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "span-orange",
                                            children: t("HOTTEST")
                                        }, void 0, false, {
                                            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                            lineNumber: 167,
                                            columnNumber: 30
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t("casinos")
                                        }, void 0, false, {
                                            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                            lineNumber: 167,
                                            columnNumber: 82
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                    lineNumber: 166,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "!text-xl mt-5",
                                    children: t("Discover the hottest casino brands trending right now!")
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                    lineNumber: 169,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                            lineNumber: 165,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            role: "list",
                            className: "grid grid-cols-1 gap-5 sm:gap-6 ul-list",
                            children: brands.slice(0, 5).map((rowData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "",
                                    href: `${rowData.GoBig}/${newUrl}&creative_id=Hottest`,
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "col-span-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "li-img",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: `/brands/${rowData.CasinoBrand}.png`,
                                                    alt: rowData.CasinoBrand,
                                                    width: 58,
                                                    height: 58,
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                                    lineNumber: 188,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                                lineNumber: 187,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center flex-col w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 px-4 text-sm h-full w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `${rowData.GoBig}/${newUrl}&creative_id=Hottest`,
                                                                className: "font-medium",
                                                                children: rowData.CasinoBrand
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                                                lineNumber: 198,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "!m-0",
                                                                children: [
                                                                    " ",
                                                                    rowData.OurOfferContent
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                                                lineNumber: 204,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                                        lineNumber: 197,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 pr-2 flex justify-end w-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            type: "button",
                                                            className: "inline-flex h-8 items-center justify-center rounded-full bg-transparent lucky-btn text-white px-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                                                            children: t("Play Now")
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                                            lineNumber: 210,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                                        lineNumber: 209,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                                lineNumber: 196,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                        lineNumber: 183,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                    lineNumber: 178,
                                    columnNumber: 21
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                            lineNumber: 173,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                    lineNumber: 164,
                    columnNumber: 15
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fivehot-banner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: [
                                    "5 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "span-orange",
                                        children: t("HOTTEST")
                                    }, void 0, false, {
                                        fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                        lineNumber: 227,
                                        columnNumber: 23
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t("casinos")
                                    }, void 0, false, {
                                        fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                        lineNumber: 227,
                                        columnNumber: 75
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                lineNumber: 226,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "!text-xl mt-5",
                                children: t("Get ready for the hottest brands, arriving soon!")
                            }, void 0, false, {
                                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                                lineNumber: 229,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                        lineNumber: 225,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                    lineNumber: 224,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
                lineNumber: 159,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Hottest_titles/index.jsx",
            lineNumber: 158,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Popular_offers, "7NlQrI7+kc6XNmUu9h2jnyHuQxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    ];
});
_c = Popular_offers;
var _c;
__turbopack_refresh__.register(_c, "Popular_offers");

})()),
"[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Popular_offers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/shuffle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/slider/Card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function Popular_offers() {
    _s();
    const [newUrl, setNewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentBrandIndex, setCurrentBrandIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fade, setFade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // State to manage fade effect
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Обновляем URL, удаляем параметры и устанавливаем source на основе localStorage
        const currentUrl = window.location.href;
        const indexOfQuestionMark = currentUrl.indexOf("?");
        const newUrl2 = indexOfQuestionMark !== -1 ? currentUrl.substring(0, indexOfQuestionMark) : currentUrl;
        window.history.replaceState({}, document.title, newUrl2);
        // Работа с URL и localStorage для определения source
        const urlObj = new URL(currentUrl);
        const searchParams = new URLSearchParams(urlObj.search);
        searchParams.delete("brand");
        const currentKeyword = searchParams.get("keyword");
        const partners = [
            "partner1039",
            "partner1043",
            "partner1044",
            "CLD_VIP",
            "partner1045_b1"
        ];
        function setPartnerSource(keyword) {
            const partner = partners.find((p)=>keyword.includes(p));
            if (partner) {
                localStorage.setItem("source", partner);
                setSource(partner);
                searchParams.set("source", partner);
            } else {
                setSource("0");
                // Получаем текущий источник и проверяем, не является ли он одним из допустимых партнеров
                const sourceFound = localStorage.getItem("source");
                if (!partners.includes(sourceFound)) {
                    localStorage.setItem("source", "0");
                    searchParams.set("source", "0");
                }
            }
        }
        if (currentKeyword) {
            setPartnerSource(currentKeyword);
        }
        const ad_campaign = localStorage.getItem("ad_campaign_id");
        const savedUrl = localStorage.getItem("savedUrl");
        if (savedUrl) {
            setNewUrl(savedUrl);
        }
    }, [
        language
    ]);
    const categoryBrands = {
        key1: "Trendsetting",
        key2: "1"
    };
    const { data, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        "brands",
        language
    ], ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrands"])(language), {
        initialData: brands
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (data) {
            const filteredData = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            setBrands(filteredData);
            setLoading(false);
        }
    }, [
        data,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    const shuffledBrands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(brands);
    const cards2 = shuffledBrands.slice(0, 6).map((brand)=>({
            key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slider$2f$Card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                imagen: `/brands/${brand.CasinoBrand}.png`,
                link: brand.GoBig,
                bonus: brand.OurOfferContent
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                lineNumber: 123,
                columnNumber: 13
            }, this)
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setFade(false); // Start fade-out
            setTimeout(()=>{
                setCurrentBrandIndex((prevIndex)=>(prevIndex + 1) % brands.length);
                setFade(true); // Start fade-in
            }, 500); // Duration of fade-out effect
        }, 5000000); // Change brand every 5 seconds
        return ()=>clearInterval(interval);
    }, [
        brands.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-10 popular-offers",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main__container",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                    lineNumber: 149,
                    columnNumber: 25
                }, this) : cards2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold tracking-tight text-white random-title",
                            children: [
                                t("POPULAR"),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t("offers")
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                    lineNumber: 156,
                                    columnNumber: 52
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                            lineNumber: 153,
                            columnNumber: 33
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 hidden md:inline",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cards-thr",
                                children: brands.slice(0, 6).map((rowData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-thr",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative flex align-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `${rowData.GoBig}/${newUrl}&creative_id=Popular_Offers`,
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: `/brands/${rowData.CasinoBrand}.png`,
                                                                alt: rowData.CasinoBrand,
                                                                width: 190,
                                                                height: 130,
                                                                loading: "lazy",
                                                                className: " w-full object-contain object-center"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                                lineNumber: 168,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                            lineNumber: 164,
                                                            columnNumber: 57
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                        lineNumber: 163,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative mt-4 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold text-gray-900",
                                                                children: rowData.CasinoBrand
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                                lineNumber: 179,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-sm text-gray-500 h-10",
                                                                children: rowData.OurOfferContent
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                                lineNumber: 180,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                        lineNumber: 178,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                lineNumber: 162,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "btn-crd",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `${rowData.GoBig}/${newUrl}&creative_id=Popular_Offers`,
                                                    target: "_blank",
                                                    className: "relative flex items-center justify-center px-8 py-2 text-lg font-medium rounded-full text-white btn-blick overflow-hidden",
                                                    children: t("Play Now")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                    lineNumber: 185,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                lineNumber: 184,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, "Popular_offers" + index, true, {
                                        fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                        lineNumber: 161,
                                        columnNumber: 45
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                lineNumber: 159,
                                columnNumber: 37
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                            lineNumber: 158,
                            columnNumber: 33
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden w-full mob-sl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cards-th",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    ...settings,
                                    children: brands.map((rowData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-hidden card-thr",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pm10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "imgp",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                target: "_blank",
                                                                href: `${rowData.GoBig}/${newUrl}&creative_id=Popular_Offers`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: `/brands/${rowData.CasinoBrand}.png`,
                                                                    alt: rowData.CasinoBrand,
                                                                    width: 100,
                                                                    height: 100,
                                                                    loading: "lazy",
                                                                    className: "w-full object-contain object-center"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 65
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                                lineNumber: 206,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                            lineNumber: 205,
                                                            columnNumber: 57
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-gray-900",
                                                                    children: rowData.CasinoBrand
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-sm ",
                                                                    children: rowData.OurOfferContent
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                            lineNumber: 220,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                    lineNumber: 204,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `${rowData.GoBig}/${newUrl}&creative_id=Popular_Offers`,
                                                        className: " flex items-center justify-center text-white btn-crd",
                                                        children: t("Play Now")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                        lineNumber: 226,
                                                        columnNumber: 57
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                                    lineNumber: 225,
                                                    columnNumber: 53
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                            lineNumber: 203,
                                            columnNumber: 49
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                    lineNumber: 201,
                                    columnNumber: 41
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                                lineNumber: 200,
                                columnNumber: 37
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                            lineNumber: 199,
                            columnNumber: 33
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                    lineNumber: 152,
                    columnNumber: 29
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
                lineNumber: 147,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Banners_tailwind/Three_part_gallery/Popular_offers/index.jsx",
            lineNumber: 145,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_s(Popular_offers, "7NlQrI7+kc6XNmUu9h2jnyHuQxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    ];
});
_c = Popular_offers;
var _c;
__turbopack_refresh__.register(_c, "Popular_offers");

})()),
"[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Banner_small
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Banners_tailwind$2f$Brands_carousel$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Banners_tailwind/Brands_carousel/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function Banner_small() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const categoryBrands = {
        key1: "FirstPriority",
        key2: "1"
    };
    const target = "target-fw-brands-main-page";
    const creative = "FW_Brands_Main_Page";
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const hash = window.location.hash;
        if (hash && elementRef.current) {
            const scrollToElement = ()=>{
                const id = hash.substring(1);
                const element = document.getElementById(id);
                if (element) {
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    const scrollAttempt = ()=>{
                        const currentScrollY = window.scrollY;
                        window.scrollTo({
                            top: elementPosition,
                            behavior: "smooth"
                        });
                        // Проверяем, достигнуто ли нужное положение
                        requestAnimationFrame(()=>{
                            if (Math.abs(currentScrollY - elementPosition) > 1) {
                                // Если не достигнуто, повторяем попытку
                                scrollAttempt();
                            }
                        });
                    };
                    scrollAttempt();
                }
            };
            // Задержка для рендеринга других компонентов
            setTimeout(()=>{
                scrollToElement();
            }, 1500); // Увеличьте значение задержки, если требуется больше времени для рендеринга
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementRef,
                id: "fortune-wheel",
                className: "mt-10 mtt mmt-mob",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "main__container bg-main",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "background overflow-hidden background-roulete rounded-xl h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-7xl px-6 lg:px-8 flex flex-col",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto max-w-2xl lg:mx-0 flex flex-row",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mt-10 uppercase",
                                                children: [
                                                    t("Fortune wheel"),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t("brands")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                                                        lineNumber: 62,
                                                        columnNumber: 42
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "text-lg leading-8 text-gray-300 font-normal",
                                                children: [
                                                    t("Pick a brand below, make first deposit and"),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t("win real cash")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                                                        lineNumber: 65,
                                                        columnNumber: 71
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex mt-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/fortune/?creative_id=FORTUNE_WHEEL`,
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "btn btn-new",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: t("Spin the Roulette")
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                                                            lineNumber: 70,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                                                        lineNumber: 69,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                                                    lineNumber: 68,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center mt-2 p",
                            children: t("To qualify for withdrawals, ensure your first deposit is at least €25 or the equivalent in other currencies and was made after requesting a withdrawal.")
                        }, void 0, false, {
                            fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Banners_tailwind$2f$Brands_carousel$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                creative: creative,
                target: target,
                categoryBrands: categoryBrands
            }, void 0, false, {
                fileName: "[project]/components/Banners_tailwind/Fortune_wheel_banner/index.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Banner_small, "mSHjycIBs8LL8GKo37vLJNm3Ctc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Banner_small;
var _c;
__turbopack_refresh__.register(_c, "Banner_small");

})()),
"[project]/components/Brands_home/Navigate.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
const useNavigateBrands = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return [
        {
            currentTab: 1,
            currentCategories: 25,
            currentText: "All_Brands",
            segment: "CurrentStatus",
            value: "Ongoing",
            target: "target-all-brands",
            currentText2: t("All Brands"),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "21",
                height: "21",
                viewBox: "0 0 21 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M3.5 5.5C3.5 4.94772 3.94772 4.5 4.5 4.5H16.5C17.0523 4.5 17.5 4.94772 17.5 5.5C17.5 6.05228 17.0523 6.5 16.5 6.5H4.5C3.94772 6.5 3.5 6.05228 3.5 5.5Z",
                        fill: "#FF8F1F"
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/Navigate.jsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M3.5 10.5C3.5 9.94772 3.94772 9.5 4.5 9.5H16.5C17.0523 9.5 17.5 9.94772 17.5 10.5C17.5 11.0523 17.0523 11.5 16.5 11.5H4.5C3.94772 11.5 3.5 11.0523 3.5 10.5Z",
                        fill: "#FF8F1F"
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/Navigate.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M3.5 15.5C3.5 14.9477 3.94772 14.5 4.5 14.5H16.5C17.0523 14.5 17.5 14.9477 17.5 15.5C17.5 16.0523 17.0523 16.5 16.5 16.5H4.5C3.94772 16.5 3.5 16.0523 3.5 15.5Z",
                        fill: "#FF8F1F"
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/Navigate.jsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Brands_home/Navigate.jsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        },
        {
            currentTab: 5,
            currentCategories: 187,
            currentText: "New_Brands",
            segment: "Segment2",
            value: "Sandbox",
            target: "target-new-arrivals",
            currentText2: t("New Brands"),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "21",
                height: "20",
                viewBox: "0 0 21 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M2.52329 4.99891C5.53155 4.95809 8.27246 3.81033 10.3572 1.94446C12.4419 3.81033 15.1828 4.95809 18.1911 4.99891C18.3003 5.64968 18.3572 6.31821 18.3572 7.00003C18.3572 12.2249 15.0179 16.6698 10.3572 18.3172C5.69641 16.6698 2.35718 12.2249 2.35718 7.00003C2.35718 6.31821 2.41404 5.64968 2.52329 4.99891ZM14.0643 8.70711C14.4548 8.31658 14.4548 7.68342 14.0643 7.29289C13.6738 6.90237 13.0406 6.90237 12.6501 7.29289L9.35718 10.5858L8.06428 9.29289C7.67376 8.90237 7.0406 8.90237 6.65007 9.29289C6.25955 9.68342 6.25955 10.3166 6.65007 10.7071L8.65007 12.7071C9.0406 13.0976 9.67376 13.0976 10.0643 12.7071L14.0643 8.70711Z",
                    fill: "#FF8F1F"
                }, void 0, false, {
                    fileName: "[project]/components/Brands_home/Navigate.jsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Brands_home/Navigate.jsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        },
        {
            currentTab: 2,
            currentCategories: 26,
            currentText: "Top_Rated_Casinos",
            segment: "Segment2",
            value: "Premium",
            target: "target-recommended-brands",
            currentText2: t("Top-Rated Casinos"),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "21",
                height: "20",
                viewBox: "0 0 21 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M12.4711 2.03351C12.7483 2.10713 12.9806 2.29624 13.1089 2.55279C13.5924 3.51991 13.9533 4.10688 14.3164 4.5828C14.6839 5.06453 15.0727 5.45889 15.6641 6.05028C17.0307 7.41692 17.7144 9.21013 17.7144 11C17.7144 12.7899 17.0307 14.5831 15.6641 15.9498C12.9304 18.6834 8.49828 18.6834 5.76461 15.9498C4.39797 14.5831 3.71436 12.7899 3.71436 11C3.71435 9.21013 4.39797 7.41692 5.76461 6.05028C6.05061 5.76428 6.48072 5.67872 6.8544 5.83351C7.22807 5.98829 7.47172 6.35292 7.47172 6.75739C7.47171 7.8772 7.54164 8.73046 7.86917 9.41104C8.04926 9.78527 8.33021 10.1512 8.8144 10.4776C8.93004 9.41687 9.14187 8.12448 9.42811 6.89778C9.65346 5.93195 9.93375 4.96773 10.2674 4.16366C10.4342 3.76148 10.6229 3.37854 10.8372 3.04791C11.0458 2.72608 11.3138 2.39858 11.6597 2.16795C11.8984 2.00885 12.1939 1.95988 12.4711 2.03351ZM12.8357 15.1213C11.6641 16.2929 9.76461 16.2929 8.59303 15.1213C8.00725 14.5355 7.71436 13.7678 7.71436 13C7.71436 13 8.59303 13.5 10.2144 13.5C10.2144 12.5 10.7144 9.5 11.4644 9C11.9644 10 12.2499 10.2929 12.8357 10.8787C13.4215 11.4645 13.7144 12.2322 13.7144 13C13.7144 13.7678 13.4215 14.5355 12.8357 15.1213Z",
                    fill: "#FF8F1F"
                }, void 0, false, {
                    fileName: "[project]/components/Brands_home/Navigate.jsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Brands_home/Navigate.jsx",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        },
        {
            currentTab: 3,
            currentCategories: 24,
            currentText: "Fast_Payout",
            segment: "QuickSignUp",
            value: "1",
            target: "target-quick-sign-up-brands",
            currentText2: t("Fast Payout Casinos"),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "21",
                height: "20",
                viewBox: "0 0 21 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M11.515 1.04627C11.9313 1.17749 12.2144 1.56354 12.2144 2.00001V7.00001L16.2144 7.00001C16.5872 7.00001 16.9291 7.20747 17.1013 7.5382C17.2735 7.86893 17.2474 8.268 17.0336 8.57347L10.0336 18.5735C9.78329 18.931 9.33 19.085 8.91372 18.9537C8.49744 18.8225 8.21436 18.4365 8.21436 18L8.21436 13H4.21436C3.84148 13 3.49958 12.7926 3.32738 12.4618C3.15518 12.1311 3.1813 11.732 3.39513 11.4265L10.3951 1.42655C10.6454 1.06898 11.0987 0.915053 11.515 1.04627Z",
                    fill: "#FF8F1F"
                }, void 0, false, {
                    fileName: "[project]/components/Brands_home/Navigate.jsx",
                    lineNumber: 111,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Brands_home/Navigate.jsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        },
        {
            currentTab: 4,
            currentCategories: 19,
            currentText: "Best_Slot",
            segment: "Hottest",
            value: "1",
            target: "target-hottest-deals",
            currentText2: t("Best Slot Sites"),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        "clip-path": "url(#clip0_9_1102)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M8.26331 3.42664C8.56269 2.50537 9.86603 2.50538 10.1654 3.42664L10.8984 5.6822C11.0323 6.09419 11.4162 6.37313 11.8494 6.37315L14.2211 6.37324C15.1897 6.37328 15.5925 7.61283 14.8088 8.18223L12.8902 9.57634C12.5397 9.83098 12.3931 10.2823 12.5269 10.6943L13.2597 12.9499C13.559 13.8712 12.5046 14.6373 11.7209 14.068L9.80211 12.674C9.45164 12.4194 8.97708 12.4194 8.6266 12.674L6.70783 14.068C5.92412 14.6373 4.8697 13.8712 5.169 12.9499L5.90181 10.6943C6.03566 10.2823 5.88901 9.83098 5.53855 9.57634L3.61988 8.18223C2.83622 7.61283 3.23898 6.37328 4.20766 6.37324L6.57933 6.37315C7.01253 6.37313 7.39646 6.09419 7.53034 5.6822L8.26331 3.42664Z",
                            stroke: "#FF8F1F",
                            "stroke-width": "2"
                        }, void 0, false, {
                            fileName: "[project]/components/Brands_home/Navigate.jsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/Navigate.jsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                            id: "clip0_9_1102",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "17",
                                height: "17",
                                fill: "white",
                                transform: "translate(0.714355 0.5)"
                            }, void 0, false, {
                                fileName: "[project]/components/Brands_home/Navigate.jsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Brands_home/Navigate.jsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/Navigate.jsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Brands_home/Navigate.jsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        },
        {
            currentTab: 6,
            currentCategories: 19,
            currentText: "Table_Games",
            segment: "Hottest",
            value: "1",
            target: "target-hottest-deals",
            currentText2: t("Table Games"),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3.04773 4.74998C3.04773 3.96758 3.68199 3.33331 4.4644 3.33331H5.88106C6.66347 3.33331 7.29773 3.96758 7.29773 4.74998V6.16665C7.29773 6.94905 6.66347 7.58331 5.88106 7.58331H4.4644C3.68199 7.58331 3.04773 6.94905 3.04773 6.16665V4.74998Z",
                        stroke: "#FF8F1F",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/Navigate.jsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10.1311 4.74998C10.1311 3.96758 10.7653 3.33331 11.5477 3.33331H12.9644C13.7468 3.33331 14.3811 3.96758 14.3811 4.74998V6.16665C14.3811 6.94905 13.7468 7.58331 12.9644 7.58331H11.5477C10.7653 7.58331 10.1311 6.94905 10.1311 6.16665V4.74998Z",
                        stroke: "#FF8F1F",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/Navigate.jsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3.04773 11.8333C3.04773 11.0509 3.68199 10.4166 4.4644 10.4166H5.88106C6.66347 10.4166 7.29773 11.0509 7.29773 11.8333V13.25C7.29773 14.0324 6.66347 14.6666 5.88106 14.6666H4.4644C3.68199 14.6666 3.04773 14.0324 3.04773 13.25V11.8333Z",
                        stroke: "#FF8F1F",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/Navigate.jsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10.1311 11.8333C10.1311 11.0509 10.7653 10.4166 11.5477 10.4166H12.9644C13.7468 10.4166 14.3811 11.0509 14.3811 11.8333V13.25C14.3811 14.0324 13.7468 14.6666 12.9644 14.6666H11.5477C10.7653 14.6666 10.1311 14.0324 10.1311 13.25V11.8333Z",
                        stroke: "#FF8F1F",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/Navigate.jsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Brands_home/Navigate.jsx",
                lineNumber: 165,
                columnNumber: 9
            }, this)
        },
        {
            currentTab: 7,
            currentCategories: 19,
            currentText: "Jackpot_Casinos",
            segment: "Hottest",
            value: "1",
            target: "target-hottest-deals",
            currentText2: t("Jackpot Casinos"),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "21",
                height: "20",
                viewBox: "0 0 21 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9.00491 7.41784C9.15971 7.31464 9.35093 7.2224 9.57154 7.15101L9.57154 8.84899C9.35093 8.7776 9.15971 8.68536 9.00491 8.58216C8.6408 8.33942 8.57153 8.1139 8.57153 8C8.57153 7.8861 8.6408 7.66058 9.00491 7.41784Z",
                        fill: "#FF8F1F"
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/Navigate.jsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M11.5716 12.849L11.5715 11.151C11.7922 11.2224 11.9834 11.3146 12.1382 11.4178C12.5023 11.6606 12.5716 11.8861 12.5716 12C12.5716 12.1139 12.5023 12.3394 12.1382 12.5822C11.9834 12.6854 11.7922 12.7776 11.5716 12.849Z",
                        fill: "#FF8F1F"
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/Navigate.jsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M10.5715 18C14.9898 18 18.5715 14.4183 18.5715 10C18.5715 5.58172 14.9898 2 10.5715 2C6.15326 2 2.57153 5.58172 2.57153 10C2.57153 14.4183 6.15326 18 10.5715 18ZM11.5715 5C11.5715 4.44772 11.1238 4 10.5715 4C10.0192 4 9.57153 4.44772 9.57153 5V5.09199C8.94994 5.20873 8.37501 5.43407 7.89551 5.75374C7.17384 6.23485 6.57153 7.00933 6.57153 8C6.57153 8.99067 7.17384 9.76515 7.89551 10.2463C8.37501 10.5659 8.94994 10.7913 9.57155 10.908L9.57155 12.8492C9.18055 12.7223 8.8907 12.5319 8.7282 12.3446C8.36625 11.9275 7.73466 11.8827 7.31752 12.2447C6.90038 12.6067 6.85564 13.2382 7.2176 13.6554C7.78009 14.3036 8.63109 14.7308 9.57154 14.9076L9.57153 15C9.57152 15.5523 10.0192 16 10.5715 16C11.1238 16 11.5715 15.5523 11.5715 15L11.5715 14.908C12.1931 14.7913 12.7681 14.5659 13.2476 14.2463C13.9693 13.7651 14.5716 12.9907 14.5716 12C14.5716 11.0093 13.9692 10.2348 13.2476 9.75373C12.7681 9.43407 12.1931 9.20873 11.5715 9.09199L11.5715 7.15075C11.9625 7.27771 12.2524 7.4681 12.4149 7.65538C12.7768 8.07252 13.4084 8.11726 13.8256 7.7553C14.2427 7.39335 14.2874 6.76176 13.9255 6.34462C13.363 5.69637 12.512 5.26915 11.5715 5.09236V5Z",
                        fill: "#FF8F1F"
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/Navigate.jsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Brands_home/Navigate.jsx",
                lineNumber: 212,
                columnNumber: 9
            }, this)
        }
    ];
};
_s(useNavigateBrands, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
const __TURBOPACK__default__export__ = useNavigateBrands;

})()),
"[project]/components/FilterLoader.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Loader.jsx
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const Loader = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "loader loader2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loader-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                class: "dot-spinner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        class: "dot-spinner__dot"
                    }, void 0, false, {
                        fileName: "[project]/components/FilterLoader.jsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        class: "dot-spinner__dot"
                    }, void 0, false, {
                        fileName: "[project]/components/FilterLoader.jsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        class: "dot-spinner__dot"
                    }, void 0, false, {
                        fileName: "[project]/components/FilterLoader.jsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        class: "dot-spinner__dot"
                    }, void 0, false, {
                        fileName: "[project]/components/FilterLoader.jsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        class: "dot-spinner__dot"
                    }, void 0, false, {
                        fileName: "[project]/components/FilterLoader.jsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        class: "dot-spinner__dot"
                    }, void 0, false, {
                        fileName: "[project]/components/FilterLoader.jsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        class: "dot-spinner__dot"
                    }, void 0, false, {
                        fileName: "[project]/components/FilterLoader.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        class: "dot-spinner__dot"
                    }, void 0, false, {
                        fileName: "[project]/components/FilterLoader.jsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FilterLoader.jsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/FilterLoader.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/FilterLoader.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
_c = Loader;
const __TURBOPACK__default__export__ = Loader;
var _c;
__turbopack_refresh__.register(_c, "Loader");

})()),
"[project]/components/Brands_home/AllBrands.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>AllBrands
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/getBrands/getBrands2.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FilterLoader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/FilterLoader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Gift$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/icons/Gift.esm.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$ShieldPlus$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldPlus$3e$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/icons/ShieldPlus.esm.js [app-client] (ecmascript) <export default as ShieldPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CaretDown$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CaretDown$3e$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/icons/CaretDown.esm.js [app-client] (ecmascript) <export default as CaretDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$GameController$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GameController$3e$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/icons/GameController.esm.js [app-client] (ecmascript) <export default as GameController>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CurrencyCircleDollar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CurrencyCircleDollar$3e$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/icons/CurrencyCircleDollar.esm.js [app-client] (ecmascript) <export default as CurrencyCircleDollar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Play$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/icons/Play.esm.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Prohibit$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Prohibit$3e$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/icons/Prohibit.esm.js [app-client] (ecmascript) <export default as Prohibit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$MinusCircle$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/icons/MinusCircle.esm.js [app-client] (ecmascript) <export default as MinusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$DotsThreeCircle$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DotsThreeCircle$3e$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/icons/DotsThreeCircle.esm.js [app-client] (ecmascript) <export default as DotsThreeCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Handshake$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_import__("[project]/node_modules/phosphor-react/dist/icons/Handshake.esm.js [app-client] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const LazySlider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_require__("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript, async loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "components/Brands_home/AllBrands.jsx -> " + "react-slick"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Download..."
        }, void 0, false, {
            fileName: "[project]/components/Brands_home/AllBrands.jsx",
            lineNumber: 25,
            columnNumber: 18
        }, this)
});
_c = LazySlider;
;
;
function AllBrands({ creative, isLoader, segment, value, target, brands }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const itemsPerPage = 2;
    const itemsPerPage2 = 3;
    const [visibleBrands, setVisibleBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(itemsPerPage);
    const [visibleBrands2, setVisibleBrands2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(itemsPerPage2);
    const [hasMoreBrands, setHasMoreBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openPlusesId, setOpenPlusesId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openWithdrawalId, setOpenWithdrawalId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openDepositsId, setOpenDepositsId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openCountriesId, setOpenCountriesId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filteredBrands, setFilteredBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [topBrands, setTopBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [br, setBr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(brands || []);
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const categoryBrandsAll = {
        key1: segment,
        key2: value
    };
    const categoryBrands = {
        key1: "Video",
        key2: "1"
    };
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])([
        "brands",
        language
    ], ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$getBrands$2f$getBrands2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrands"])(language), {
        initialData: brands
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (data) {
            setVisible(true);
            const filteredData = data.filter((rowData)=>rowData[categoryBrandsAll.key1] === categoryBrandsAll.key2);
            const topData = data.filter((rowData)=>rowData[categoryBrands.key1] === categoryBrands.key2);
            setTopBrands(topData);
            setFilteredBrands(filteredData);
        }
    }, [
        data,
        categoryBrandsAll.key1,
        categoryBrandsAll.key2,
        categoryBrands.key1,
        categoryBrands.key2
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setHasMoreBrands(visibleBrands < filteredBrands.length);
    }, [
        visibleBrands,
        filteredBrands.length
    ]);
    const loadMoreBrands = ()=>{
        setVisibleBrands((prevVisibleBrands)=>prevVisibleBrands + itemsPerPage);
        setVisibleBrands2((prevVisibleBrands)=>prevVisibleBrands + itemsPerPage2);
    };
    const [newUrl, setNewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedUrl = localStorage.getItem("savedUrl");
        if (savedUrl) {
            setNewUrl(savedUrl);
        }
    }, []);
    const [randomBrands, setRandomBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [randomBrands2, setRandomBrands2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [brandsGenerated, setBrandsGenerated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const generateRandomBrands = ()=>{
            if (!brandsGenerated && filteredBrands.length > 0) {
                const shuffledBrands = [
                    ...filteredBrands
                ].sort(()=>Math.random() - 0.5);
                const shuffledBrands2 = [
                    ...topBrands
                ].sort(()=>Math.random() - 0.5);
                setRandomBrands(shuffledBrands);
                setRandomBrands2(shuffledBrands2);
                setBrandsGenerated(true);
            }
        };
        generateRandomBrands();
    }, [
        brandsGenerated,
        filteredBrands
    ]);
    const vis = randomBrands.length > 0 ? randomBrands : filteredBrands;
    const vis2 = randomBrands2.length > 0 ? randomBrands2 : topBrands;
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMobile(window.innerWidth < 768);
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    const handlePlusesClick = (brandId)=>{
        setOpenPlusesId((prevId)=>prevId === brandId ? null : brandId);
    };
    const handleWithdrawalClick = (brandId)=>{
        setOpenWithdrawalId((prevId)=>prevId === brandId ? null : brandId);
    };
    const handleDepositsClick = (brandId)=>{
        setOpenDepositsId((prevId)=>prevId === brandId ? null : brandId);
    };
    const handleCountriesClick = (brandId)=>{
        setOpenCountriesId((prevId)=>prevId === brandId ? null : brandId);
    };
    console.log("BRANDS", vis, vis2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FilterLoader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/Brands_home/AllBrands.jsx",
            lineNumber: 184,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-between awesome",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col px-0 py-6 basis-[68%] slws",
                    children: [
                        visible && vis.slice(0, visibleBrands).map((brand)=>{
                            const advantages = brand.advantages !== null ? brand.advantages.split(",").map((advantage)=>({
                                    advantage: advantage.trim()
                                })) : "";
                            const deposits = brand.DepositMethods !== null ? brand.DepositMethods.split(",").map((deposit)=>({
                                    deposit: deposit.trim()
                                })) : "";
                            const withdrawals = brand.WithdrawalMethods !== null ? brand.WithdrawalMethods.split(",").map((withdrawal)=>({
                                    withdrawal: withdrawal.trim()
                                })) : "";
                            const restricted = brand.RestrictedCountries !== null ? brand.RestrictedCountries.split(",").map((restrict)=>({
                                    restrict: restrict.trim()
                                })) : "";
                            const isPlusesOpen = openPlusesId === brand.id_brand;
                            const isWithdrawalOpen = openWithdrawalId === brand.id_brand;
                            const isDepositsOpen = openDepositsId === brand.id_brand;
                            const isCountriesOpen = openCountriesId === brand.id_brand;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 flex justify-between flex-wrap mb-2 card-brand-filtered w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col basis-[63%] card-63",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex ml-1 mb-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                lineNumber: 226,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Gift$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                                        style: {
                                                            color: "#ff8f1f"
                                                        },
                                                        className: "mr-1 w40",
                                                        size: 40
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                        lineNumber: 228,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: " flex items-center review-bonus",
                                                        children: brand.OurOfferContent
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                        lineNumber: 233,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                lineNumber: 227,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-2 withdrawal withdrawal-limits flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Handshake$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"], {
                                                        style: {
                                                            color: "#ff8f1f"
                                                        },
                                                        className: "mr-1 mb-1 w40",
                                                        size: 40
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                        lineNumber: 238,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "title mr-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                t("Withdrawal Limits:"),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        " ",
                                                                        brand.WithdrawalLimits
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                            lineNumber: 245,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                        lineNumber: 244,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                lineNumber: 237,
                                                columnNumber: 23
                                            }, this),
                                            advantages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>handlePlusesClick(brand.id_brand),
                                                className: "pluses custom-list-item mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "title flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$ShieldPlus$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldPlus$3e$__["ShieldPlus"], {
                                                                style: {
                                                                    color: "#fff"
                                                                },
                                                                size: 34
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 257,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 ml-2",
                                                                children: t("Advantages")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 258,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CaretDown$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CaretDown$3e$__["CaretDown"], {
                                                                className: "ml-auto",
                                                                size: 20,
                                                                style: {
                                                                    color: "#ff8f1f"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 259,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                        lineNumber: 256,
                                                        columnNumber: 27
                                                    }, this),
                                                    isPlusesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "items-center ml-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "review-pros",
                                                            children: advantages.map((advantage, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "review-pros-item",
                                                                    children: advantage.advantage
                                                                }, index, false, {
                                                                    fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 35
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                            lineNumber: 267,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                        lineNumber: 266,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                lineNumber: 252,
                                                columnNumber: 25
                                            }, this),
                                            deposits && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>handleDepositsClick(brand.id_brand),
                                                className: "withdrawal custom-list-item mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "title flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CurrencyCircleDollar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CurrencyCircleDollar$3e$__["CurrencyCircleDollar"], {
                                                                style: {
                                                                    color: "#fff"
                                                                },
                                                                size: 34
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 285,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 ml-2",
                                                                children: t("Payment Methods")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 289,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CaretDown$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CaretDown$3e$__["CaretDown"], {
                                                                className: "ml-auto",
                                                                size: 20,
                                                                style: {
                                                                    color: "#ff8f1f"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 292,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                        lineNumber: 284,
                                                        columnNumber: 27
                                                    }, this),
                                                    isDepositsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "withdrawal flex mt-2",
                                                        children: deposits.map((deposit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "depimg flex items-center justify-center mr-1 mb-1 flex-wrap",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    width: 60,
                                                                    height: 38,
                                                                    src: `/payments/${deposit.deposit}.png`,
                                                                    alt: `${deposit.deposit}`,
                                                                    loading: "lazy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                    lineNumber: 305,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, index, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 301,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                        lineNumber: 299,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                lineNumber: 280,
                                                columnNumber: 25
                                            }, this),
                                            withdrawals && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>handleWithdrawalClick(brand.id_brand),
                                                className: "withdrawal custom-list-item mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "title flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$GameController$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GameController$3e$__["GameController"], {
                                                                style: {
                                                                    color: "#fff"
                                                                },
                                                                size: 34
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 324,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 ml-2",
                                                                children: t("Game Providers")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 328,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CaretDown$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CaretDown$3e$__["CaretDown"], {
                                                                className: "ml-auto",
                                                                size: 20,
                                                                style: {
                                                                    color: "#ff8f1f"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 331,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                        lineNumber: 323,
                                                        columnNumber: 27
                                                    }, this),
                                                    isWithdrawalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "withdrawal flex mt-2",
                                                        children: withdrawals.map((withdrawal, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "depimg flex items-center justify-center mr-1 mb-1 flex-wrap",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    width: 60,
                                                                    height: 38,
                                                                    src: `/providers/${withdrawal.withdrawal}.png`,
                                                                    alt: `${withdrawal.withdrawal}`,
                                                                    loading: "lazy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                    lineNumber: 344,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, index, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 340,
                                                                columnNumber: 33
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                        lineNumber: 338,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                lineNumber: 319,
                                                columnNumber: 25
                                            }, this),
                                            restricted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>handleCountriesClick(brand.id_brand),
                                                className: "withdrawal custom-list-item mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "title flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Prohibit$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Prohibit$3e$__["Prohibit"], {
                                                                style: {
                                                                    color: "#fff"
                                                                },
                                                                size: 34
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 363,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 ml-2",
                                                                children: t("Restricted Countries")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 364,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CaretDown$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CaretDown$3e$__["CaretDown"], {
                                                                className: "ml-auto",
                                                                size: 20,
                                                                style: {
                                                                    color: "#ff8f1f"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 367,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                        lineNumber: 362,
                                                        columnNumber: 27
                                                    }, this),
                                                    isCountriesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "withdrawal",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "countries flex flex-wrap justify-between mt-1",
                                                            children: restricted.map((restrict, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "basis-[49%] pl-1 mb-2 flex",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$MinusCircle$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusCircle$3e$__["MinusCircle"], {
                                                                            color: "#dd3333",
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                            lineNumber: 381,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: restrict.restrict
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                            lineNumber: 382,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, index, true, {
                                                                    fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 35
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                            lineNumber: 375,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                        lineNumber: 374,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                lineNumber: 358,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                        lineNumber: 225,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-36",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "brandImage p-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `${brand.GoBig}/${newUrl}&creative_id=${creative}`,
                                                    className: `${target}`,
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: `${target}`,
                                                        src: `/brands/${brand.CasinoBrand}.png`,
                                                        alt: `/brands/${brand.CasinoBrand}.png`,
                                                        width: 250,
                                                        height: 125,
                                                        loading: "lazy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                        lineNumber: 399,
                                                        columnNumber: 27
                                                    }, this)
                                                }, brand.id_brand, false, {
                                                    fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                    lineNumber: 393,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                lineNumber: 392,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "buttons ml-auto flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center w-full p-4 howUse mt-2 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-center big-p",
                                                                children: [
                                                                    t("How to get"),
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: t("bonus?")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                        lineNumber: 413,
                                                                        columnNumber: 47
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 412,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-center m-0 text-slate-500 mini-p",
                                                                children: t("Activate bonus in your casino account")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 415,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                        lineNumber: 411,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `${brand.GoBig}/${newUrl}&creative_id=${creative}`,
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "btn btn-new-mini",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: t("Play Now")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                                lineNumber: 425,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                            lineNumber: 424,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                        lineNumber: 420,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                lineNumber: 410,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                        lineNumber: 391,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, brand.id_brand, true, {
                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                lineNumber: 221,
                                columnNumber: 19
                            }, this);
                        }),
                        hasMoreBrands && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "btn btn-new",
                            onClick: loadMoreBrands,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t("Load More Brands")
                            }, void 0, false, {
                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                lineNumber: 436,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Brands_home/AllBrands.jsx",
                            lineNumber: 435,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Brands_home/AllBrands.jsx",
                    lineNumber: 187,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex flex-col basis-[31%] py-6 slsk ${vis2.length < 2 ? 'w159' : ''}`,
                    children: !isMobile || vis2.length < 2 ? vis2.slice(0, visibleBrands2).map((item)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-brand-banner mb-2 flex flex-col items-center pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "brandImage p-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "flex justify-center flex-col items-center target-listing-brands",
                                        href: `${item.GoBig}/${newUrl}&creative_id=Listing_Brands`,
                                        target: "_blank",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: `/brands/${item.CasinoBrand}.png`,
                                                alt: `/brands/${item.CasinoBrand}.png`,
                                                width: 200,
                                                height: 80,
                                                loading: "lazy",
                                                className: "target-listing-brands"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                lineNumber: 455,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 text-center flex items-center review-bonus",
                                                children: item.OurOfferContent
                                            }, void 0, false, {
                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                lineNumber: 463,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, item.id_brand, true, {
                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                        lineNumber: 449,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                    lineNumber: 448,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `${item.GoBig}/${newUrl}&creative_id=Listing_Brands`,
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "btn btn-new-mini target-listing-brands",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: t("Play Now")
                                        }, void 0, false, {
                                            fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                            lineNumber: 475,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                        lineNumber: 474,
                                        columnNumber: 23
                                    }, this)
                                }, item.id_brand, false, {
                                    fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                    lineNumber: 469,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, item.id_brand, true, {
                            fileName: "[project]/components/Brands_home/AllBrands.jsx",
                            lineNumber: 444,
                            columnNumber: 19
                        }, this);
                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LazySlider, {
                        ...settings,
                        children: vis2.map((item)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-brand-banner mb-2 flex flex-col items-center pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "brandImage p-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "flex justify-center flex-col items-center target-listing-brands",
                                            href: `${item.GoBig}/${newUrl}`,
                                            target: "_blank",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "target-listing-brands",
                                                    src: `/brands/${item.CasinoBrand}.png`,
                                                    alt: `/brands/${item.CasinoBrand}.png`,
                                                    width: 200,
                                                    height: 80,
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                    lineNumber: 496,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 text-center flex items-center review-bonus",
                                                    children: item.OurOfferContent
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                    lineNumber: 504,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, item.id_brand, true, {
                                            fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                            lineNumber: 490,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                        lineNumber: 489,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `${item.GoBig}/${newUrl}&creative_id=Listing_Brands`,
                                        target: "_blank",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "btn btn-new-mini target-listing-brands",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: t("Play Now")
                                            }, void 0, false, {
                                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                                lineNumber: 515,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                            lineNumber: 514,
                                            columnNumber: 23
                                        }, this)
                                    }, item.id_brand, false, {
                                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                        lineNumber: 509,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, item.id_brand, true, {
                                fileName: "[project]/components/Brands_home/AllBrands.jsx",
                                lineNumber: 485,
                                columnNumber: 21
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/AllBrands.jsx",
                        lineNumber: 482,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Brands_home/AllBrands.jsx",
                    lineNumber: 440,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Brands_home/AllBrands.jsx",
            lineNumber: 186,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(AllBrands, "4ZPj5PobnNBMbnc0hBanGm6t9Fc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    ];
});
_c1 = AllBrands;
var _c, _c1;
__turbopack_refresh__.register(_c, "LazySlider");
__turbopack_refresh__.register(_c1, "AllBrands");

})()),
"[project]/components/Brands_home/FilteredHome.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_home$2f$Navigate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Brands_home/Navigate.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_home$2f$AllBrands$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Brands_home/AllBrands.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/switcher/LanguageContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
const FilteredHome = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [isLoader, setIsLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTab, setCurrentTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const navigateBrands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_home$2f$Navigate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const handleTabChange = (tabNumber)=>{
        setCurrentTab(tabNumber);
        setIsLoader(true);
        setTimeout(()=>{
            setIsLoader(false);
        }, 500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-10 pb-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "main__container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Tabs",
                        className: "isolate isolate-tabs flex divide-x overflow-x-auto",
                        children: navigateBrands.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentTab === item.currentTab ? 'decoration-2 underline-offset-8 ' : 'text-gray-500', 'group relative flex-1 overflow-hidden px-4 py-4 text-center text-sm font-medium flex justify-center flex-row items-center p-2 min-w-40 transition-colors duration-300 ease-in-out'),
                                onClick: ()=>handleTabChange(item.currentTab),
                                children: [
                                    item.icon,
                                    item.currentText2
                                ]
                            }, item.currentTab, true, {
                                fileName: "[project]/components/Brands_home/FilteredHome.jsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/FilteredHome.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Brands_home/FilteredHome.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "main other-custom-bonuses filter-brands",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overlay-filter",
                        children: navigateBrands.map((item)=>{
                            return currentTab === item.currentTab && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_home$2f$AllBrands$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                creative: item.currentText,
                                isLoader: isLoader,
                                segment: item.segment,
                                value: item.value,
                                target: item.target
                            }, `${item.currentTab}-${language}`, false, {
                                fileName: "[project]/components/Brands_home/FilteredHome.jsx",
                                lineNumber: 64,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/Brands_home/FilteredHome.jsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Brands_home/FilteredHome.jsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Brands_home/FilteredHome.jsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Brands_home/FilteredHome.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
_s(FilteredHome, "I7Kh1maguC6kekk02Lmsc1BcxI8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$switcher$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Brands_home$2f$Navigate$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = FilteredHome;
const __TURBOPACK__default__export__ = FilteredHome;
var _c;
__turbopack_refresh__.register(_c, "FilteredHome");

})()),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=_4f7e9a._.js.map