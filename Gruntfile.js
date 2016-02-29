module.exports = function(grunt) {

  // banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['dist/**/*']
    },

    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, cwd: 'src', src: ['**/*.html'], dest: 'dist/', filter: 'isFile'},

          // includes files within path and its sub-directories
          //{expand: true, src: ['path/**'], dest: 'dest/'},

          // makes all src relative to cwd
          //{expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

          // flattens results to a single level
          //{expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ],
      },
    },

    "babel": {
      options: {
        //sourceMap: true
      },
      dist: {
        //https://github.com/babel/grunt-babel/issues/23
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.js'],
          dest: 'dist',
          ext: '.js'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask("default", ["clean:build", 'copy', "babel"]);
};
