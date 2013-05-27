(function() {
    require.config({
        paths: {
            angular: '../components/angular/angular',
            bootstrap: '../components/bootstrap/docs/assets/js/bootstrap',
            jquery: '../components/jquery/jquery'
        },
        shim: {
            'bootstrap': ['jquery']
        }
    });

    require(['bootstrap']);
})();