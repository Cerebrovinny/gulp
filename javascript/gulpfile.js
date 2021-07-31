const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function standard(cb) {
    gulp.src('src/**/*.js')
        //babel to convert js to compatible browser version
        .pipe(babel({
            comments: false,
            presets: ["env"] //env is most new preset javascript
        }))
        .pipe(uglify()) //minify js
        .on('error', err => console.log(err))
        .pipe(concat('app.min.js')) //create a unique file
        .pipe(gulp.dest('build')) //destine folder of the file
    return cb()
}

exports.default = series(standard)
