module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['src/js/*.js'],
          dest: 'dist/js/script.js',
        },
      },
      sass: {
        options: {
          noCache: true
        },
        dist: {
          files: {
            'src/css/styles.css': 'src/scss/styles.scss'
          }
        }
      },
      copy: {
        main: {
          files: [
            {expand: true, cwd: 'src/', src: ['index.html'], dest: 'dist/'},
            {expand: true, cwd: 'src/css/', src: ['**/*.css'], dest: 'dist/css/'}, // Include CSS files
          ],
        },
      },
      watch: {
        sass: {
          files: ['src/scss/**/*.scss'],
          tasks: ['sass'],
        },
        scripts: {
          files: ['src/js/*.js'],
          tasks: ['concat'],
        },
        html: {
          files: ['src/index.html'],
          tasks: ['copy'],
        },
        styles: {
          files: ['src/css/**/*.css'],
          tasks: ['copy'],
        },
      },
    });
  
    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s)
    grunt.registerTask('default', ['sass', 'concat', 'copy']);
};
