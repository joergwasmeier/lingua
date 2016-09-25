var gulp = require('gulp');

__workDir = __dirname;
__devTool = 'source-map';

require('@fabalous/core/config/gulp/core.config')(gulp);
require('@fabalous/runtime-web/config/gulp/RuntimeWeb.config')(gulp);
//require('@fabalous/test-karma/config/gulp/TestKarma.config.js')(gulp);

gulp.task('develop', ['backend-watch', 'runtime-web-watch']);
