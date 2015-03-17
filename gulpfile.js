var gulp = require('gulp');
var connect = require('gulp-connect');
var mocha = require('gulp-mocha');
 
gulp.task('tests', function () {
    return gulp.src('test/test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('webserver', function() {
    connect.server({
        root: 'app/',
        port: 8080
    });
});

gulp.task('default', ['webserver']);
