const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

let styles = () => {
    return gulp.src('public/stylesheets/*.sass')
        .pipe(sass().on('error', sass.logError)) // compiles Sass files into CSS
        .pipe(cssnano()) // minifies the CSS file
        .pipe(rename((path) => {path.basename += ".min"})) // adds .min suffix to filename
        .pipe(prefixer()) // resulting CSS file has vendor prefixes automatically
        .pipe(gulp.dest('public/stylesheets/')); // places the final CSS file in stylesheets subdirectory
}; 

// task that watches for changes in Sass files and then runs 'styles' if necessary
let watch = () => {
    gulp.watch('public/stylesheets/*.sass', gulp.series(styles)); // .series() allows task functions to be combined
};

// default Gulp task that runs with just the command 'gulp'
// first runs the Sass (styles) task once, then the watch task
gulp.task('default', gulp.series(styles, gulp.parallel(watch), (done) => {
    done();
}));
