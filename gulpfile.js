const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const browsersync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const wait = require('gulp-wait');
const critical = require('critical');

// Static server
function browserSync(cb) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    open: "external"
  });
  cb();
}

// Browser reload
function browserReload(cb) {
  browsersync.reload();
  cb(); // Signal completion
}

// Clean vendor directory
function clean() {
  return del(['vendor/**', '!vendor']);
}

// Copy third-party modules in vendor directory
function copy() {
  return gulp.src([
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
    'node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css',
    'node_modules/@fortawesome/fontawesome-free/css/brands.min.css',
    'node_modules/@fortawesome/fontawesome-free/css/solid.min.css',
    'node_modules/@fortawesome/fontawesome-free/css/regular.min.css',
    'node_modules/@fortawesome/fontawesome-free/webfonts/**/*',
    'node_modules/aos/dist/aos.js',
    'node_modules/aos/dist/aos.css',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/bootstrap/scss/**/*',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/owl.carousel2/dist/owl.carousel.min.js',
    'node_modules/owl.carousel2/dist/assets/owl.carousel.min.css',
    'node_modules/owl.carousel2/dist/assets/owl.theme.default.min.css',
    'node_modules/headroom.js/dist/headroom.min.js',
    'node_modules/counterup2/dist/index.js',
    'node_modules/waypoints/lib/noframework.waypoints.js'
  ], {base: 'node_modules/'})
  .pipe(gulp.dest('vendor/'));
}

// Compile Sass file, minify CSS file and auto-inject into browser.
function css() {
    return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({cascade: false}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css/'))
    .pipe(browsersync.stream()); // Inject changes without refreshing the page.
}

// Minify JavaScript file and auto-inject into browser.
function js() {
  return gulp.src(['js/*.js', '!js/*.min.js'])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js/'));
}

function criticalCSS() {
  return critical.generate({
      inline: true,
      minify: true,
      base: './',
      src: 'index.html',
      target: {
        // css: 'critical.css',
        html: 'index-critical.html',
        // uncritical: 'uncritical.css'
      },
      width: 1920,
      height: 1080
  });
}

// Browser reload
function browserReload(cb) {
  browsersync.reload();
  cb(); // Signal completion
}

// Watch scss/js/html/ files
function watchFiles() {
  gulp.watch("sass/*.scss", gulp.series(css));
  gulp.watch(["js/*.js", "!js/*.min.js"], gulp.series(js, browserReload));
  gulp.watch("*.html", gulp.series(browserReload));
}

// Define complex tasks
const vendor = gulp.series(clean, copy);
const build = gulp.series(vendor, gulp.parallel(css, js), criticalCSS);
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));

// Register public tasks
exports.vendor = vendor;
exports.build = build;
exports.watch = watch;
