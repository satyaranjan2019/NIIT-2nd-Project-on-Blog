var app = angular.module("myApp", ["ngRoute"]);
app.config(['$routeProvider' ,function($routeProvider) {
    $routeProvider
 
    //*************************************************** USER ******************************************************
    
    .when('/viewUser', {
			templateUrl: 'User/viewUser.html',
			controller: 'UserController as ctrl'
		})
		
	.when('/userAccount', {
			templateUrl: 'User/userAccount.html',
			controller: 'UserController as ctrl'
})
    .when('/loginUserAccount', {
			templateUrl: 'User/loginUserAccount.html',
			controller: 'UserController as ctrl'
})
    .when('/newUser', {
			templateUrl: 'User/newUser.html',
			controller: 'UserController as ctrl'
})
    .when('/editAccount', {
			templateUrl: 'User/editAccount.html',
			controller: 'UserController as ctrl'
})

.when('/myAccount', {
			templateUrl: 'User/myAccount.html',
			controller: 'UserController as ctrl'
})

//*************************************************** BLOG ******************************************************

    .when('/blogList', {
			templateUrl: 'Blog/blogList.html',
			controller: 'BlogController as ctrl'
		})
		.when('/adminBlogList', {
			templateUrl: 'Blog/adminBlogList.html',
			controller: 'BlogController as ctrl'
		})
		
	.when('/blogDetail', {
			templateUrl: 'Blog/blogDetail.html',
			controller: 'BlogController as ctrl'
		})
	.when('/addBlog', {
			templateUrl: 'Blog/addBlog.html',
			controller: 'BlogController as ctrl'
		})
	.when('/editBlog', {
			templateUrl: 'Blog/editBlog.html',
			controller: 'BlogController as ctrl'
		})
		
//*********************************************** BLOG COMMENT **************************************************
		
		.when('/addComment', {
			templateUrl: 'BlogComment/addComment.html',
			controller: 'CommentController as ctrl'
		})
		
		.when('/commentList', {
	            templateUrl: 'BlogComment/commentList.html',
	            controller: 'CommentController as ctrl'
        })
		
//*************************************************** FORUM *****************************************************
		
	
		.when('/allForums', {
			templateUrl: 'Forum/allForums.html',
			controller: 'ForumController as ctrl'
		})
		
		.when('/forumList', {
			templateUrl: 'Forum/forumList.html',
			controller: 'ForumController as ctrl'
		})
		
		.when('/newForum', {
			templateUrl: 'Forum/newForum.html',
			controller: 'ForumController as ctrl'
		})
		
		.when('/forumDetails', {
			templateUrl: 'Forum/forumDetails.html',
			controller: 'ForumController as ctrl'
		})
		
		.when('/editForum', {
			templateUrl: 'Forum/editForum.html',
			controller: 'ForumController as ctrl'
		})
		
		
//************************************************* FORUM COMMENT ********************************************
		
		.when('/addComment', {
			templateUrl: 'ForumComment/addComment.html',
			controller: 'ForumController as ctrl'
		})
		
		.when('/commentList', {
	            templateUrl: 'ForumComment/commentList.html',
	            controller: 'ForumController as ctrl'
        })
		

//***************************************************** JOB *****************************************************
		
		.when('/newJob', {
			templateUrl: 'Job/newJob.html',
			controller: 'JobController as ctrl'
		})
		
		.when('/adminJobList', {
			templateUrl: 'Job/adminJobList.html',
			controller: 'JobController as ctrl'
		})
		
		
		
		.when('/displayJobs', {
			templateUrl: 'Job/displayJobs.html',
			controller: 'JobController as ctrl'
		})
		
		.when('/displayDetails', {
			templateUrl: 'Job/displayDetails.html',
			controller: 'JobController as ctrl'
		})
		
		.when('/editJobDetails', {
			templateUrl: 'Job/editJobDetails.html',
			controller: 'JobController as ctrl'
		})
		
//*********************************************** JOB APPLICATION ********************************************
		
		.when('/viewAllJobApplication', {
			templateUrl: 'Job/viewAllJobApplication.html',
			controller: 'JobController as ctrl'
		})
		
//************************************************** FFRIEND **************************************************
		
		
		.when('/viewFriend', {
			templateUrl: 'Friend/viewFriend.html',
			controller: 'FriendController as ctrl'
		})
		
		.when('/friendDetails', {
			templateUrl: 'Friend/friendDetails.html',
			controller: 'FriendController as ctrl'
		})
		.when('/friendRequest', {
			templateUrl: 'Friend/friendRequest.html',
			controller: 'FriendController as ctrl'
		})
		
//*************************************************** CHAT ***************************************************
		
		.when('/chat', {
			templateUrl : 'Chat/chat.html',
			controller : 'ChatController as ctrl'
		})
		
		
		//******************************************************************//
		
				.when('/notificationindetail', {
			templateUrl : 'Notification/notificationindetail.html',
			controller : 'NotificationController as ctrl'
		})
		
}]);