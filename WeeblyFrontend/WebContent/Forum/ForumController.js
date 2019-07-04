app.controller('ForumController', [
		'$scope',
		'ForumService',
		'ForumCommentService',
		'$location',
		'$rootScope',
		'$route',
		'$window',
		function($scope, ForumService,ForumCommentService,$location, $rootScope,$route,$window) {
			console.log("ForumController...")

			var self = this;
			self.forum = {
			    errorCode : '',
				errorMessage : '',
				forumId : '',
				forumName : '',
				forumDescription : '',
				userId : '',
				userName : '',
				forumCreationDate : '',
				forumStatus : '',
				//forumCountComment : '',
				forumUserCount : '',
				}
			self.forums = [];
			
			
			self.forumComment = {
			    errorCode : '',
				errorMessage : '',
				forumCommentId : '',
				forumId : '',
				forumComment : '',
				forumCommentDate : '',
				userId : '',
				userName : '',
				
				}
			
			self.forumComments = [];
			
			
			// Show all Forums......
			
			self.fetchAllForums = function() {
				console.log("--> ForumController : calling fetchAllForums method.");
				ForumService.fetchAllForums().then(
				function(d) {
				self.forums = d;
								}, function(errResponse) {
									console.error('Error while fetching forums...');
								});
					};
				self.fetchAllForums();
				
				
			//Create New Forum.....By User.....
				self.createForum = function(forum) {
					console.log("--> ForumController : calling createUser method.");
					ForumService.createForum(forum).then(
							function(s) {
								self.forums = s;
								$location.path('/forumList');
								alert('Forum Created Successfully...');
								
							},
							function(errResponse) {
								console.error('Error while creating forum...');
							});
				};	
			
			//Forum Details Of A Forum.....
				
				self.getSelectedForum = function(id) {
					console.log("-->ForumController : calling getSelectedForum method : getting user with id : " + id);
					ForumService.getSelectedForum(id).then(
							function(s) {
								self.forum = s;
								console.log('id '+ self.forum.forumId);
								$rootScope.forum= self.forum;
								$location.path('/forumDetails');
								self.getSelectedForumComment(id);
								console.log('comments '+$rootScope.forumcomment);
							}, 
							function(errResponse) {
								console.error('Error while fetching Forum...');
							});
				};
				
				//Update Forum by User....
				
				self.updateForum = function(forum,id) {
					console.log("-->ForumController : calling updateForum method.");
					ForumService.updateForum(forum,id).then(
			         function(s) {
							self.forum = s;
							alert('Forum updated Successfully...')
							console.log(self.forum);
							$location.path('/forumDetails');
							},
					function(errResponse) {
					console.error('Error while updating forum...')
						});
					};
					
		// Show Approved Forum to user.....	
					
					self.fetchAllApprovedForums = function() {
  						console.log("--> ForumController : calling fetchAllApprovedForums method.");
  						ForumService.fetchAllApprovedForums().then(
  						function(e) {
  						self.approvedForums = e;
  								}, 
  						function(errResponse) {
  						console.error('Error while fetching Forums...');
  								});
  					};
  					
  					self.fetchAllApprovedForums();
  					
  					
  				// Forum approve by admin......................					  					
  					self.approveForum = function(forum, id)
  					{
  						console.log("-->ForumController : calling approveForum() method : Forum id is : " + id);
  						console.log("-->ForumController",self.forum);
  						ForumService.approveForum(forum, id).then
  						(
  								function(e)
  								{
  								alert('Accept Forum?'),
  								self.forum=e,
  								
  								self.fetchAllForums();
  								},
  								function(errResponse) 
  								{
  									console.error("Error while approving forum...")
  								});
  						
  					};
  					
  				//Forum reject by admin........................				
  					self.rejectForum = function(forum, id) 
  					{
  						console.log("-->ForumController : calling rejectForum() method : Forum id is : " + id);
  						console.log("-->ForumController",self.forum);
  						ForumService.rejectForum(forum, id).then
  						(
  								function(e)
  								{
  								alert('Reject Forum?'),
  								self.forum=e,
  								
  								self.fetchAllForums();
  								},
  								function(errResponse) 
  								{
  									console.error("Error while rejecting forum...")
  								}
  						);
  					};
			
			
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Forum Comment  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
					
					
					// Show all comments with forum id......
					
					self.getSelectedForumComment = function(id) {
						console.log("-->ForumController : calling getSelectedForumComment method : getting forumComment with id : " + id);
						ForumCommentService.getSelectedForumComment(id).then(
								function(s) {
									self.forumComments = s;
									console.log(self.forumComment);
									console.log('id '+ self.forumComments.forumCommentId);
									$rootScope.forumComments= self.forumComments;
									console.log('id '+$rootScope.forumComments.forumCommentId);
									
								}, 
								function(errResponse) {
									console.error('Error while fetching Comment...');
								});
					};
					
							
						//Create ForumComment.............	
					self.createForumComment = function(forumComment) {
						forumComment.forumId=$rootScope.forum.forumId ;
										console.log("--> ForumController : calling 'createForumComment' method.", forumComment);
										console.log("--> ForumController ForumId :" +forumComment.forumId);
										ForumCommentService.createForumComment(forumComment).then(
												function(s) {
												    console.log('Current User :',$rootScope.currentUser.userId)
													self.forumComment = s;
													
													self.getSelectedForumComment(self.forumComment.forumId);
													
												},
												function(errResponse) {
													console.error('Error while creating comment...');
												});
									};
									
									
									
									
			
			
			
			
					self.reset = function() {
						console.log('submit a new comment', self.comment);
						self.comment = {
		                errorCode : '',
		                errorMessage : '',
		                forumCommentId : '',
		                forumId : '',
		                forumComment : '',
		                forumCommentDate : '',
		                userId : '',
		                userName : '',



						};
			
			
					};
			
			
			
			self.reset = function() {
				console.log('submit a new Forum', self.forums);
				self.forum = {
					    errorCode : '',
						errorMessage : '',
						forumId : '',
						forumName : '',
						forumDescription : '',
						userId : '',
						userName : '',
						forumCreationDate : '',
						forumStatus : '',
						//forumCountComment : '',
						forumUserCount : '',
						};
				$scope.myForm.$setPristine();
			};
		} ]);