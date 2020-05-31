const gulp = require('gulp');
const gulpless = require('gulp-less');

gulp.task('styles', () => {
    return gulp.src('styles/**/*.less')
        .pipe(gulpless())
        .pipe(gulp.dest('./css/'));
});
