module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint : {
            files : ['Gruntfile.js', 'src/app/*.js'],
            options : {
                reporter: require('jshint-stylish')
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
