var gulp = require('gulp'); 
var del = require('del'); 
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('clean',function(){
    return del(['dist/**/*']);
});

gulp.task('build',['clean','sass','images','fonts'],function(){
});

gulp.task('sass', ['clean'], function () {
  return gulp.src('src/sass/**/*.scss') 
  .pipe(sass({includePaths: require('node-normalize-scss').includePaths}))
  .pipe(gulp.dest('dist/css'));
});
 
 gulp.task('images', ['clean'], function(){
  gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('fonts', ['clean'], function(){
  return gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

 gulp.task('default',['watch']);
 
 gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', ['build']);
});