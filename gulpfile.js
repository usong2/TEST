const { src, dest, watch } = require(`gulp`);

const sass = require(`gulp-sass`);

const paths = {
    css: {
        src: `./src/scss/*.scss`,
        dest: `./src/css`
    }
}

const options = {
    scss: {
        outputStyle: `expanded`,
        sourceComments: false
    }
}

function styles() {
    return src(paths.css.src, { sourcemaps: true })
        .pipe(sass(options.scss).on(`error`, sass.logError))
        .pipe(dest(paths.css.dest, { sourcemaps: true }))
}

function watchs() {
    watch(paths.css.src, styles);
}

exports.style = styles;
exports.watch = watchs;