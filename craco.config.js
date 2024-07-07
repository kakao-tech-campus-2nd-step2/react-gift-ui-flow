const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@components": path.resolve(__dirname, "src/components"),
            "@styles": path.resolve(__dirname, "src/styles"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@kakaoGift": path.resolve(__dirname, "src/components/kakaoGift"),
            "@common": path.resolve(__dirname, "src/components/common"),
        },
    },
};
