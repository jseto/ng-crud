(function() {

	angular.module('books', [
		'ngRoute', 'crud'
	])

	.config(['$routeProvider', 'crudProvider', function($routeProvider, crudProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'views/welcome.html'
		})
		.when('/tests', {
			templateUrl: 'views/tests.html',
			controller: 'CrudCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
		crudProvider.routesForCollection($routeProvider, 'users');
		crudProvider.routesForCollection($routeProvider, 'books');
	}])

	.controller('appCtrl', ['$scope', 'crud', function($scope, crud) {
		crud.setMetaData($scope, collectionMetadata);
	}])

	;


	//------------------------- Collection metadata -------------------------

	var collectionMetadata = {
		users: {
			// itemName: 'name of an item, defaults to singular of collection from location'
			// tableName: 'name of table, defaults to collection from location'
			fields: {
				// Only specified fields will be displayed.
				// To use all defaults for a field, associate it with {}
				name: {
					// label: 'Defaults to property name with ucFirst'
					label: 'First name',
					//--- Form view attributes ---
					// placeholder: defaults to no placeholder displayed
					// cellRender: a function that will render cell content - default to identity
					// inputType: name of directive to use as form input - default to crud-input
					// inputAttrs: object with extra attributes for input directive,
					//		e.g. { type: 'email' }
					// list-model: used when inputType is crud-select
					//--- Table view attributes ---
					// colLabel: deafults to label
					// cellStyle: a CSS object as expected by ng-style
					//TODO cellClass: an optional class to apply to the cell
					// showInTable: defaults to true
					//TODO colWidth: optional column width
				},
				surname: {
					label: 'Last name'
				},
				email: {
					label: 'e-mail',
					placeholder: 'a vaild e-mail address',
					cellRender: function(email) {
						if (!email) return '';
						return '<a href="mailto:' + email + '" target="_blank">' + email + '</a>';
					},
					inputAttrs: { type: 'email' }
				}
			}
			// fieldOrder: 'defaults to Object.keys(fields)'
			//TODO tableActions: {}
			//TODO tableActionsPosition: left/right
			//TODO focusField: 'name of field to set focus, defaults to first according to fieldOrder'
		},

		books: {
			fields: {
				title: {},
				author: {},
				genre: {
					inputType: 'crud-select',
					listModel: [
						{ value: 'fantasy', label: 'Fantasy' },
						{ value: 'scifi',   label: 'Science fiction' },
						{ value: 'western', label: 'Western' },
						{ value: 'mystery', label: 'Mystery' }
					]	//TODO alternatively, 'modelPropName' in scope
				},
				synopsis: {
					showInTable: false,
					inputType: 'crud-text-area',
					inputAttrs: { rows: '5' }
				}
			}
		}
	}

})();