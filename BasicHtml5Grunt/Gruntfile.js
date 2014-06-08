module.exports = function (grunt) {

    var options = {
        scss: {
            root: 'scss/'
        },
        css: {
            root: 'css/'
        }
    };

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    compass: true
                },
                files: {
                    'css/style.css': options.scss.root + 'style.scss'
                }
            }
        },

        watch: {
            views: {
                files: '*.html',
                options: {
                    livereload: true
                }
            },
            sass: {
                files: 'scss/**/*.scss',
                tasks: 'sass',
                options: {
                    compass: true,
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass']);

};