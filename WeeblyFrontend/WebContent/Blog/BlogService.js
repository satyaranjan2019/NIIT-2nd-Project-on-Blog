app.factory('BlogService', ['$http', '$q', '$rootScope',
		function($http, $q, $rootScope) {
			console.log("BlogService...")
			
			var BASE_URL = 'http://localhost:8081/Weebly'
				return {
				
		//All Blog List............................
				
		fetchAllBlogs : function() {
			console.log("--> BlogService : calling 'fetchAllblogs' method.");
				return $http
		        .get(BASE_URL + '/listOfBlog')
				.then(function(response) {
				return response.data;
					}, 
				function(errResponse) {
				console.error('Error while fetching blogs');
				return $q.reject(errResponse);
					});
		        },
		        
		 //Show BlogDetail of A Blog.......
		   getSelectedBlog : function(id) {
			   console.log("-->BlogService : calling getSelectedBlog() method with id : " + id);
			   return $http
					.get(BASE_URL+'/blogDetails/'+ id)
					.then(function(response) {
					$rootScope.selectedBlog = response.data;
					return response.data;
						},
					function(errResponse) {
					console.error('Error while Fetching blog.');
					return $q.reject(errResponse);
								});
			},
			
		 // Create New Blog.......
			
			createBlog : function(blog) {
				console.log("--> BlogService : calling 'createBlog' method.");
				return $http
				.post(BASE_URL + '/blogCreateByUser/', blog)
				.then(function(response) {
				return response.data;
						}, 
				function(errResponse) {
					console.error('Error while creating blog');
					return $q.reject(errResponse);
						});
			},
			
			
			
			
			
			
			//Edit Blog by User using BlogId......
			
			updateBlog : function(blog, id) {
				console.log("--> BlogService : calling 'updateBlog' method.");
				return $http
							.put(BASE_URL+'/updateBlogDetails/'+id, blog)
							.then(function(response) {
								return response.data;
							},
							function(errResponse) {
								console.error('Error while updating Blog...');
								return $q.reject(errResponse);
							});
			},
			

// Display	All Approved Blogs..........			
			
			fetchAllApprovedBlogs : function() {
				console.log("--> BlogService : calling 'fetchAllApprovedBlogs' method.");
				return $http
				.get(BASE_URL + '/approvedBlogList')
				.then(function(response) 
				{
				return response.data;
				}, 
				function(errResponse) 
				{
				console.error('Error while fetching Uss');
				return $q.reject(errResponse);
				});
				},
			
				
//Blogs Approved by ADMIN...........
				approveBlog : function(blog, id)
				{
					console.log("-->BlogService : calling approveBlog() method : getting blog with id : " + id);
					return $http.put(BASE_URL+'/approveBlog/'+ id, blog).then
								(function(response) 
								{
									return response.data;
								},
								function(errResponse) 
								{
									console.log("Error while approving Blog");
									return $q.reject(errResponse);
								}
								);
				},
				
				
//Blog Reject by ADMIN..................
				rejectBlog : function(blog, id) 
				{
					console.log("-->BlogService : calling rejectBlog() method : getting blog with id : " + id);
					return $http.put(BASE_URL+'/rejectBlog/'+ id, blog).then
								(function(response)
								{
									return response.data;
								},
								function(errResponse)
								{
									console.log("Error while rejecting Blog");
									return $q.reject(errResponse);
								}
							    );
				},
				
				
				
//********************************************** BLOG LIKE ***************************************************
				
				likeBlog : function(blog, id) 
				{
					console.log("-->BlogService : calling likeBlog() method : getting blog with id : " + id);
					return $http.put(BASE_URL+'/likeBlog/'+id, blog).then
								(function(response) 
								{
									return response.data;
								},
								function(errResponse)
								{
									console.log("Error while liking Blog.");
									return $q.reject(errResponse);
								});
								
				},
				
				
				fetchAllBlogLikes : function(id)
				{
					console.log("-->BlogService : calling 'fetchAllBlogLikes' method for id : " + id);
					return $http.get(BASE_URL + '/bloglike/'+id).then
					(function(response) 
							{
									$rootScope.selectedBlogLikes = response.data;
									return response.data;
							}, 
								function(errResponse) {
									console.error('Error while fetching BlogLikes');
									return $q.reject(errResponse);
								});
				},
			
			
			
//************************************************************************************************************			
//create BlogComment by blogId
			
			createBlogComment : function(blogComment)
			{
				console.log("-->BlogService : calling 'createBlogComment' method.");
				return $http.post(BASE_URL + '/blogCommentsByUser/', blogComment)
				.then(function(response){
				return response.data;
						},
				function(errResponse) {
				console.error('Error while creating blogComment');
				return $q.reject(errResponse);
						}
				);
			},
				
				
				
			
			
			
			}
}]);