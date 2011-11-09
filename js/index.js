jQuery(function($) {
	
	var model = {
		repositoryCount: ko.observable('...')
	};
	
	ko.applyBindings(model);
	
	$.get('https://api.github.com/users/treshugart/repos', function(r) {
		model.repositoryCount(r.length);
	});
	
});