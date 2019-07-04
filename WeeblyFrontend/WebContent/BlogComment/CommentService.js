app.factory('CommentService', ['$http', '$q', '$rootScope',
		function($http, $q, $rootScope) {
			console.log("CommentService...")
			
			var BASE_URL = 'http://localhost:8081/Weebly'
				return {
		
		//  Create New Blog Comment......
				
		createBlogComment : function(blogComment) {
			console.log("--> CommentService : calling 'createBlogComment' method.");
			return $http
			.post(BASE_URL + '/blogCommentsByUser/', blogComment)
			.then(function(response) {
			return response.data;
					}, 
			function(errResponse) {
				console.error('Error while creating blogComment');
				return $q.reject(errResponse);
					});
					
		},
		
		
		//All comment List............................
		 
		 getSelectedBlogComment : function(id) {
				console.log("-->BlogCommentService : calling getSelectedBlogComment() method with id : " + id);
				return $http
					.get(BASE_URL+'/blogCommentbyblogId/'+ id)
					.then(function(response) {
						alert(response.data);
					$rootScope.selectedBlogComment = response.data;
					
					return response.data;
						},
					function(errResponse) {
					console.error('Error while Fetching blogcomment.');
					return $q.reject(errResponse);
								});
					},
					
					
					fetchAllComments : function(id) {
						console.log("--> CommentService : calling 'fetchAllcomments' method with id :" +id);
								return $http
								.get(BASE_URL + '/blogCommentbyblogId/'+ id)
								.then(function(response) {
								$rootScope.selectedBlog = response.data;
								return response.data;
									}, 
								function(errResponse) {
								console.error('Error while fetching comments');
								return $q.reject(errResponse);
									});
					 },
		 
		
		
	};


		
		
}]);