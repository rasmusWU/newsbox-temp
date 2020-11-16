var {watch, task, parallel, series } = require("gulp");
var connect = require("gulp-connect");
var moveHTML = require("./move-html");
var processSass = require("./process-sass");

function watchEverything() {
    watch("./src/html/**/*.html",
    { ignoreInitial: false },
    moveHTML);

    watch("./src/sass/**/*.scss",
    { ignoreInitial: false },
    processSass);
}

function server() {
    return connect.server({
        root: "dist",
        livereload: true,
        port: 3000
    });
}

task("default", parallel(server, watchEverything));
task("build", series(moveHTML, processSass));