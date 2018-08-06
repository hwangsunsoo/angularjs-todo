'use strict';

var gulp = require('gulp');
// 웹서버 구동 관련
var webserver = require('gulp-webserver');
var connect = require('gulp-connect');
var os = require('os');
var open = require('gulp-open');
// 포트번호
var customPortNumber = 1111;

// gulp server

// [webserver] https://www.npmjs.com/package/gulp-webserver
// [livereload] https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
gulp.task('default', function() {
	connect.server({
		livereload: false, // 크롬 확장도구 livereload 연동하여 자동 새로고침 가능
		port: customPortNumber, // 포트번호
		root: './',
		open: true // 크롬 브라우저 자동 실행
	})
	// OS별 크롬 브라우저 오픈 분기
	var browser = os.platform() === 'linux' ? 'google-chrome' : (
		os.platform() === 'darwin' ? 'google chrome' : (
			os.platform() === 'win32' ? 'chrome' : 'firefox'));
	return gulp.src('./')
		.pipe(open({app: '/Applications/Google\ Chrome.app', uri: 'http://localhost:'+customPortNumber+'/'}));
});
