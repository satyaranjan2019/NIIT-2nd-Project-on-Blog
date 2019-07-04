app.controller('BlogController', [
		'$scope',
		'BlogService',
		'CommentService',
		'$location',
		'$rootScope',
		'$route',
		'$window',
		function($scope, BlogService,CommentService,$location, $rootScope,$route,$window) {
			console.log("BlogController...")

			var self = this;
			self.blog = {
			    errorCode : '',
				errorMessage : '',
				blogId : '',
				blogContent : '',
				blogTitle : '',
				blogDate : '',
				userId : '',
				blogStatus : '',
				blogCountLike : '',
				blogCommentCount : '',
				
				}
			
			self.blogs = [];
			
			
			self.blogComment = {
				    errorCode : '',
					errorMessage : '',
					blogCommentId : '',
					blogId : '',
					userId : '',
					blogComment : '',
					userName : '',
					blogCommentDate : '',
					
					}
			
			
			self.blogcomments=[];
			
			
			
       self.blogLike={
					
					errorCode : '',
		    		errorMessage : '',
	 				blogLikeId:'',
					userId:'',
					blogId:'',
					userName:'',
					blogLikeDate:'',
	    		
	    	}
	    
	    self.blogLikes=[];
			
			
			
			
			
			
			
		//All Blog List...................
			
			
			self.fetchAllBlogs = function() {
				console.log("--> BlogController : calling fetchAllBlogs method.");
				BlogService.fetchAllBlogs().then(
				function(s) {
				self.blogs = s;
								}, function(errResponse) {
									console.error('Error while fetchingBlogs...');
								});
					};
					self.fetchAllBlogs();
       
					
		// Show BlogDetail of A Blog By BlogId....
					
		self.getSelectedBlog = function(id) {
			console.log("-->BlogController : calling getSelectedBlog method : getting blog with id : " + id);
			BlogService.getSelectedBlog(id).then(
				function(d) {
				self.blog = d;
				console.log('id '+ self.blog.blogId);
				$rootScope.blog= self.blog;
				console.log(' r id '+ $rootScope.blog.blogId);
				$location.path('/blogDetail');
				self.getSelectedBlogComment(id);
				console.log('comments '+$rootScope.blogcomment);
					}, 
				function(errResponse) {
				console.error('Error while fetching Blog...');
					});
		};
		
		
//Create New Blog By User......
		
		self.createBlog = function(blog) {
			console.log("--> BlogController : calling createBlog method.");
			BlogService.createBlog(blog).then(
			function(d) {
				self.blog = d;
				$location.path('/blogList');
				console.log("Created blog");
				alert('Blog Created Successfully...');
				
				},
				function(errResponse) {
				console.error('Error while creating blog...');
					});
	  	};
	  	
	  	
	  	// Edit Blog By User By BlogId.....
	  	
	  	self.updateBlog = function(blog, id) {
				console.log("--> BlogController : calling updateBlog method.");
				BlogService.updateBlog(blog, id).then(function(d) {
					self.blogs = d;
					$location.path('/blogDetail');
					}, function(errResponse) {
						console.error('--> BlogController : Error while updating Blog...');
					});
		};
		
		
		
// Display	All Approved Blogs..........			  					
			
			self.fetchAllApprovedBlogs = function() {
				console.log("--> BlogController : calling fetchAllAprovedBlogs method.");
				BlogService.fetchAllApprovedBlogs().then(
				function(d) {
				self.approvedBlogs = d;
						}, 
				function(errResponse) {
				console.error('Error while fetching Blogs...');
						});
			};
			
			self.fetchAllApprovedBlogs();
		
//Blogs Approved by ADMIN...........................			
			
			self.approveBlog = function(blog, id)
				{
					console.log("-->BlogController : calling approveBlog() method : Blog id is : " + id);
					console.log("-->BlogController",self.blog);
					BlogService.approveBlog(blog, id).then
					(
							function(d)
							{
							alert('Accept Blog?'),
							self.blog=d
							self.fetchAllBlogs();
							
							},
							function(errResponse) 
							{
								console.error("Error while approving blog...")
							});
					
		};
		
		
//BlogS Reject by ADMIN........................				
			self.rejectBlog = function(blog, id) 
			{
				console.log("-->BlogController : calling rejectBlog() method : Blog id is : " + id);
				console.log("-->BlogController",self.blog);
				BlogService.rejectBlog(blog, id).then
				(
						function(d)
						{
						alert('Reject Blog?'),
						self.blog=d,
						
						self.fetchAllBlogs();
						},
						function(errResponse) 
						{
							console.error("Error while rejecting blog...")
						}
				);
			};		
				
				
				
		
		
		
		
		
		
		
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  BLOG COMMENT  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@		
		
//Show Blog Comment By Blog Id.....
		
		self.getSelectedBlogComment = function(id) {
			console.log("-->CommentController : calling getSelectedBlogComment method : getting blogComment with id : " + id);
			CommentService.getSelectedBlogComment(id).then(
					function(d) {
					self.blogComments = d;
					console.log(self.blogComment);
					console.log('id '+ self.blogComments.blogCommentId);
					$rootScope.blogComments= self.blogComments;
					console.log(' r id '+ $rootScope.blogComments.blogCommentId);
					
						}, 
					function(errResponse) {
					console.error('Error while fetching BlogComment...');
						});
		};
		
		
		// Create New Blog Comment........
		
		self.createBlogComment = function(blogComment) {
			blogComment.blogId= $rootScope.blog.blogId ;
			console.log("-->BlogController : calling 'createBlogComment' method.", blogComment);
			console.log("-->BlogController BlogId :" +blogComment.blogId);
			BlogService.createBlogComment(blogComment).then
						(function(d) 
						{
							console.log('Current User :',$rootScope.currentUser.userId)
							self.blogComment = d;
							console.log(self.blogComment)
							self.getSelectedBlogComment(self.blogComment.blogId);
							$location.path('/blogDetail');
						
						},
						function(errResponse) {
							console.error('Error while creating blogComment...');
						}
						);
		};	
		
// Show All Comments.........................		
		self.fetchAllComments = function(id) {
			console.log("--> BlogController : calling fetchAllComments method : getting blogComment with id : " + id);
			CommentService.fetchAllComments(id).then(
			function(s) {
			self.blogComments = s;
				},
			function(errResponse) {
			console.error('Error while fetchingBlogComments...');
				});
	    };
	
		
//********************************************** BLOG LIKE ***************************************************	    
		
	  //like blog by blog id................						
		self.likeBlog = function(blog, id)
		{
			console.log("-->BlogController : calling likeBlog() method : Blog id is : "+id);
			console.log("-->BlogController", self.blog);
			BlogService.likeBlog(blog, id).then
			( function() 
				{
				self.getSelectedBlog(id);
				self.listblogs;
				self.fetchAllBlogLikes(id);
				$location.path('/blogDetail');
				} ,
				function(errResponse)
				{
					console.error("Error while liking the blog...");
				});
			
			
		};
		
		
//	fetchAllBlogLikes by blog id.............				
		self.fetchAllBlogLikes = function(id)
		{
			console.log("-->BlogController : calling fetchAllBlogLikes method with id : "+ id);
			BlogService.fetchAllBlogLikes(id).then
			(function(s) 
			{
				self.blogLikes = s;
			},
			function(errResponse) 
			{
				console.error('Error while fetching BlogLikes...');
			}
			);
		};
		
		
		
				
				
				
					
		
		
		
		self.reset = function() {
			console.log('submit a new comment', self.comment);
			self.comment = {
            errorCode : '',
            errorMessage : '',
            blogCommentId : '',
			blogId : '',
			userId : '',
			blogComment : '',
			userName : '',
			blogCommentDate : '',



			};
					
		};		
					
					
					
					
					self.reset = function() {
						console.log('submit a new blog', self.blog);
						self.blog = {
		                errorCode : '',
		                errorMessage : '',
						blogId : '',
		                blogContent : '',
		                blogTitle : '',
		                blogDate : '',
		                userId : '',
		                blogStatus : '',
		                blogCountLike : '',
		                blogCommentCount : '',



						};
						$scope.myForm.$setPristine(); // reset form...
					};
		
				} ]);			
					