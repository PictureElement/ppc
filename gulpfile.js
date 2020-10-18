const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const browsersync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const wait = require('gulp-wait');
const critical = require('critical').stream ;
const useref = require('gulp-useref');
const gulpif = require('gulp-if');


// Clean/Copy
// =============================================================================

// Clean dist
function cleanDist() {
  return del(['dist/**', '!dist']);
}

// Clean vendor
function cleanVendor() {
  return del(['src/vendor/**', '!src/vendor']);
}

// Copy third-party modules in vendor directory
function copyVendor() {
  return gulp.src([
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
    'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
    'node_modules/@fortawesome/fontawesome-free/webfonts/**/*',
    'node_modules/aos/dist/aos.js',
    'node_modules/aos/dist/aos.css',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/bootstrap/scss/**/*',
    'node_modules/rfs/scss.scss',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/owl.carousel2/dist/owl.carousel.min.js',
    'node_modules/owl.carousel2/dist/assets/owl.carousel.min.css',
    'node_modules/owl.carousel2/dist/assets/owl.theme.default.min.css',
    'node_modules/headroom.js/dist/headroom.min.js',
    'node_modules/counterup2/dist/index.js',
    'node_modules/waypoints/lib/noframework.waypoints.js'
  ], {base: 'node_modules/'})
  .pipe(gulp.dest('src/vendor/'));
}

// Copy icon fonts
function copyIconFonts() {
  return gulp.src('src/vendor/@fortawesome/fontawesome-free/webfonts/**/*')
    .pipe(gulp.dest('dist/webfonts/'));
}

// Copy fonts
function copyFonts() {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
}

// Copy images
function copyImages() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'));
}


// Development
// =============================================================================

// Static server
function browserSync(cb) {
  browsersync.init({
    server: {
      baseDir: "src"
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

// Compile Sass files
function compileSass() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError)) // Compile to CSS
    .pipe(gulp.dest('src/css/')) // Save to src
    .pipe(browsersync.stream()); // Inject changes without refreshing the page.
}

// Watch scss/js/html/ files
function watchFiles() {
  gulp.watch("src/sass/**/*.scss", gulp.series(compileSass));
  gulp.watch(["src/js/**/*.js"], gulp.series(browserReload));
  gulp.watch("src/*.html", gulp.series(browserReload));
}


// Production
// =============================================================================

// JS and CSS optimization
function combine() {
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify())) // Minify JavaScript
    .pipe(gulpif('*.css', autoprefixer({cascade: false}))) // Add vendor prefixes
    .pipe(gulpif('*.css', cleanCSS({compatibility: 'ie8'}))) // Minify CSS
    .pipe(gulp.dest('dist')); // Save to dist
}

// Critical CSS
function criticalCSS() {
  return gulp.src('dist/*.html')
    .pipe(
      critical({
          inline: true,
          base: 'dist/',
          dimensions: [
            {
              height: 500,
              width: 300,
            },
            {
              height: 720,
              width: 1280,
            },
          ],
      })
    )
    .on('error', function(err) { 
      gutil.log(gutil.colors.red(err.message)); 
    })
    .pipe(gulp.dest('dist/'));
}


// Tasks
// =============================================================================

// Define complex tasks
const reinit = gulp.series(cleanDist, cleanVendor, copyFonts, copyImages, copyVendor, copyIconFonts);
const build = gulp.series(reinit, compileSass, combine, criticalCSS);
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));

// Register public tasks
exports.reinit = reinit;
exports.build = build;
exports.watch = watch;
