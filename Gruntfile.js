module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint : {
            options: {
                reporter: require('jshint-stylish')
            },
            build: {
                src : 'src/app/celsiusToFahrenheit.js',
                dest : 'build/app/min.js'
            }
    },
    execute : {
            target : {
                src : ['src/app/celsiusToFahrenheit.js']
            }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-execute');
  grunt.registerTask('default', ['jshint', 'execute']);
};
