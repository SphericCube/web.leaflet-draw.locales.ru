const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const babel  = require('gulp-babel');

exports.default = () => {
    return src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(dest('dist'));
};
