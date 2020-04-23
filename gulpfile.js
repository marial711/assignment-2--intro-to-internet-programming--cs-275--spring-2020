const { src, dest, watch, series} = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);
const htmlValidator = require(`gulp-html`);
const babel = require(`gulp-babel`);
const jsLinter = require(`gulp-eslint`);
const jsCompressor = require(`gulp-uglify`);
const cssLinter = require(`gulp-stylelint`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;

let validateHTML = () => {
    return src(`html/index.html`)
        .pipe(htmlValidator());
};

let compressHTML = () => {
    return src(`html/index.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let transpileJSForDev = () => {
    return src(`js/app.js`)
        .pipe(babel())
        .pipe(dest(`js/temp`));
};

let transpileJSForProd = () => {
    return src(`js/temp/app.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/js`));
};

let lintJS = () => {
    return src(`js/app.js`)
        .pipe(jsLinter({
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: `module`
            },
            rules: {
                'no-console': 0,
                nodebugger: 0,
                indent: [2,4, {'SwitchCase': 1}],
                quotes: [2, `backtick`],
                'linebreak-style': [2, `unix`],
                'semi': [2, `always`],
                'max-len': [2, 85, 4]
            },
            env: {
                es6: true,
                node: true,
                browser: true
            },
            extends: `eslint:recommended`
        }))
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};

let lintCSS = () => {
    return src(`css/style.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: false}
            ]
        }));
};
let compileCSSForProd = () => {
    return src(`css/style.css`)
        .pipe(dest(`prod/styles`));
};

let serve = () => {
    browserSync({
        notify: true,
        server: {
            baseDir: [
                `./`,
                `html`
            ]
        }
    });

    watch(`css/style.css`, lintCSS).on(`change`, reload);
    watch(`js/app.js`,lintJS, transpileJSForDev).on(`change`, reload);
    watch(`html/index.html`, validateHTML).on(`change`, reload);
};

exports.compressHTML = compressHTML;
exports.validateHTML = validateHTML;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.transpileJSForDev = transpileJSForDev;
exports.transpileJSForProd = transpileJSForProd;
exports.compileCSSForProd = compileCSSForProd;
exports.serve = serve;
exports.build = series(compressHTML,
    compileCSSForProd,
    transpileJSForProd);
