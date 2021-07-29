const gulp = require('gulp')
const series = gulp.series

function copy(cb) {
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    //console.log('Copy!')
    return cb()
}

module.exports.default = series(copy)