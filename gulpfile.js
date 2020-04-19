const { src, dest } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);

let compressHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`compressed-html/`));
}

exports.compressHTML = compressHTML;

const htmlValidator = require(`gulp-html`);

let validateHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlValidator());
};

exports.validateHTML = validateHTML;
