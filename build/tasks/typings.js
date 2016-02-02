const gulp = require('gulp');
const replace = require('gulp-replace');

gulp.task('es6-typings', () => {
  gulp.src('typings/browser/**/*', { base: './' })
    .pipe(replace('export =', 'export default'))
    .pipe(gulp.dest('./'));
});
