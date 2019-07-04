app.factory('ForumService', ['$http', '$q', '$rootScope',
		function($http, $q, $rootScope) {
			console.log("ForumService...")
			var BASE_URL = 'http://localhost:8081/Weebly'
				return {
				
			//Show all Forums .....
			
				fetchAllForums : function() {
					console.log("--> ForumService : calling 'fetchAllForums' method.");
					     return $http
						 .get(BASE_URL + '/forums')
						 .then(function(response) {
						 return response.data;
								}, 
						 function(errResponse) {
						 console.error('Error while fetching Forums');
						 return $q.reject(errResponse);
								});
				},
				
				//Create New Forum.....By User....
				
				createForum : function(forum) {
					console.log("--> ForumService : calling 'createForum' method.");
					return $http
					.post(BASE_URL + '/ForumCreateByUser/', forum )
					.then(function(response) {
					return response.data;
							}, 
					function(errResponse) {
						console.error('Error while creating forum');
						return $q.reject(errResponse);
							});
					
				},
				
				//Forum Details of a Single Forum....
				
				getSelectedForum : function(id) {
					console.log("-->ForumService : calling getSelectedForum() method with id : " + id);
					return $http
								.get(BASE_URL+'/forumDetails/'+ id)
								.then(function(response) {
									$rootScope.selectedForum = response.data;
									return response.data;
								},
								function(errResponse) {
									console.error('Error while Fetching Forum.');
									return $q.reject(errResponse);
								});
			
				},
				
				//Update The Forum by User....
				
				updateForum : function(forum, id) {
				     console.log("--> ForumService : calling 'updateForum' method.");
					return $http
				    .put(BASE_URL+'/updateForum/'+id, forum)
					.then(function(response) {
				     return response.data;
					 },
					function(errResponse) {
				    console.error('Error while updating Forum...');
			    	return $q.reject(errResponse);
				     });
				},
				
	   // Show all Approved Forum to user...............
				
				fetchAllApprovedForums : function() {
					console.log("--> ForumService : calling 'fetchAllApprovedForums' method.");
					return $http
					.get(BASE_URL + '/approvedForumList')
					.then(function(response) 
					{
					return response.data;
					}, 
					function(errResponse) 
					{
					console.error('Error while fetching Forums');
					return $q.reject(errResponse);
					});
					},
					
					
					//Forum approved by Admin...........
					approveForum : function(forum, id)
					{
						console.log("-->ForumService : calling approveForum() method : getting forum with id : " + id);
						return $http.put(BASE_URL+'/approveForum/'+ id, forum).then
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
					
					//Forum reject by Admin..................
					rejectForum : function(forum, id) 
					{
						console.log("-->ForumService : calling rejectForum() method : getting forum with id : " + id);
						return $http.put(BASE_URL+'/rejectForum/'+ id, forum).then
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
				
				
			
		};
	}]);