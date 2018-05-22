var gulp = require('gulp'),            // 載入 gulp
    gulpSass = require('gulp-sass'),    // 載入 gulp-sass
    prefix = require('gulp-autoprefixer'),
    wait = require('gulp-wait');

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sasscompile']);
});

gulp.task('sasscompile', function () {
    gulp.src('sass/**/*.scss')    // 指定要處理的 Scss 檔案目錄
        .pipe(wait(300))
        .pipe(gulpSass({          // 編譯 Scss
            outputStyle: 'expanded'
        }).on('error', gulpSass.logError))
        .pipe(prefix({
            browsers: ['last 5 versions'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true 
        }))       
        .pipe(gulp.dest('css'));  // 指定編譯後的 css 檔案目錄
});
gulp.task('default', ['sasscompile', 'watch']);

