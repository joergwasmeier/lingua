/*
	Require and initialise PhantomCSS module
	Paths are relative to CasperJs directory


*/
var fs = require( 'fs' );
var path = fs.absolute( fs.workingDirectory + '/phantomcss.js' );
var phantomcss = require( path );
/*
var server = require('webserver').create();

var html = fs.read( fs.absolute( fs.workingDirectory + '/demo/coffeemachine.html' ));

server.listen(9876,function(req,res){
	res.statusCode = 200;
	res.headers = {
		'Cache': 'no-cache',
		'Content-Type': 'text/html;charset=utf-8'
	};
	res.write(html);
	res.close();
});
 */

casper.test.begin( 'Lingua online test', function ( test ) {

	phantomcss.init( {
		rebase: casper.cli.get( "rebase" ),
		// SlimerJS needs explicit knowledge of this Casper, and lots of absolute paths
		casper: casper,
		libraryRoot: fs.absolute( fs.workingDirectory + '' ),
		screenshotRoot: fs.absolute( '/tmp' ),
		failedComparisonsRoot: fs.absolute( fs.workingDirectory + '/dist/web/failures' ),
		addLabelToFailedImage: true
		/*
		screenshotRoot: '/screenshots',
		failedComparisonsRoot: '/failures'
		casper: specific_instance_of_casper,
		libraryRoot: '/phantomcss',
		fileNameGetter: function overide_file_naming(){},
		onPass: function passCallback(){},
		onFail: function failCallback(){},
		onTimeout: function timeoutCallback(){},
		onComplete: function completeCallback(){},
		hideElements: '#thing.selector',
		addLabelToFailedImage: true,
		outputSettings: {
			errorColor: {
				red: 255,
				green: 255,
				blue: 0
			},
			errorType: 'movement',
			transparency: 0.3
		}*/
	} );

	casper.on( 'remote.message', function ( msg ) {
		this.echo( msg );
	} );

	casper.on( 'error', function ( err ) {
		this.die( "PhantomJS has errored: " + err );
	} );

	casper.on( 'resource.error', function ( err ) {
		casper.log( 'Resource load error: ' + err, 'warning' );
	} );
	/*
		The test scenario
	*/

	casper.on("resource.error", function(resourceError){
		console.log('Unable to load resource (#' + resourceError.id + 'URL:' + resourceError.url + ')');
		console.log('Error code: ' + resourceError.errorCode + '. Description: ' + resourceError.errorString);
	});

	casper.on('http.status.404', function(resource) {
		this.log('Hey, this one is 404: ' + resource.url, 'warning');
	});

	casper.on('complete.error', function(err) {
		this.die("Complete callback has failed: " + err);
	});

	casper.on("page.error", function(msg, trace) {
		this.echo("Error: " + msg, "ERROR");
	});

	casper.start( 'http://lingua.joergwasmeier.de/' );
	casper.start( 'http://localhost:8080/#/login/?_k=d02v53' );

	//casper.start( 'https://google.de' );

	casper.viewport( 1024, 768 );

	casper.then( function () {

		casper.waitForSelector( '#container > div > div.center.Home > p.header',
			function success() {
				phantomcss.screenshot( '#container', 'coffee machine dialog' );
			},
			function timeout() {
				casper.capture('/tmp/navigation.png');

				casper.test.fail( 'Should see coffee machine' );
			});
	} );

	casper.then( function now_check_the_screenshots() {
		// compare screenshots
		phantomcss.compareAll();
	} );

	/*
	casper.then( function () {
		casper.click( '#coffee-machine-button' );

		// wait for modal to fade-in
		casper.waitForSelector( '#myModal:not([style*="display: none"])',
			function success() {
				phantomcss.screenshot( '#myModal', 'coffee machine dialog' );
			},
			function timeout() {
				casper.test.fail( 'Should see coffee machine' );
			}
		);
	} );

	casper.then( function () {
		casper.click( '#cappuccino-button' );
		phantomcss.screenshot( '#myModal', 'cappuccino success' );
	} );

	casper.then( function () {
		casper.click( '#close' );

		// wait for modal to fade-out
		casper.waitForSelector( '#myModal[style*="display: none"]',
			function success() {
				phantomcss.screenshot( {
					'Coffee machine close success': {
						selector: '#coffee-machine-wrapper',
						ignore: '.selector'
					},
					'Coffee machine button success': '#coffee-machine-button'
				} );
			},
			function timeout() {
				casper.test.fail( 'Should be able to walk away from the coffee machine' );
			}
		);
	} );

	casper.then( function now_check_the_screenshots() {
		// compare screenshots
		phantomcss.compareAll();
	} );

	/*
	Casper runs tests
	*/
	casper.run( function () {
		console.log( '\nTHE END.' );
		// phantomcss.getExitStatus() // pass or fail?
		casper.test.done();
	} );
} );
