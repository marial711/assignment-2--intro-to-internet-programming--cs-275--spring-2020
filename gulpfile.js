const { src, dest } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);
let compressHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`compressed-html/`));
};
exports.compressHTML = compressHTML;

const htmlValidator = require(`gulp-html`);
let validateHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlValidator());
};
exports.validateHTML = validateHTML;

const jsLinter = require(`gulp-eslint`);
let lintJS = () => {
    return src(`js/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};
exports.lintJS = lintJS;

const cssLinter = require(`gulp-stylelint`);
let lintCSS = () => {
    return src(`css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};
exports.lintCSS = lintCSS;
