var gulp = require('gulp');
var minify = require('gulp-minify');
 
gulp.task('compress', function() 
{
  gulp.src('dev/*.js')
    
    .pipe(minify(
    {
        ext:{
            src:'.js',
            min:'.min.js'
        },
        exclude: ['tasks']
    }))

    .pipe(gulp.dest('dist'))
});