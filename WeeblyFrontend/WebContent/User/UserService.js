app.factory('UserService', ['$http', '$q', '$rootScope',
		function($http, $q, $rootScope) {
			console.log("UserService...")

			var BASE_URL = 'http://localhost:8081/Weebly'
				return {
				
				// Get all User List...........
				fetchAllUsers : function() {
					console.log("--> UserService : calling 'fetchAllUsers' method.");
									return $http
									.get(BASE_URL + '/listOfUsers')
									.then(function(response) {
									return response.data;
										}, 
									function(errResponse) {
									console.error('Error while fetching Users');
									return $q.reject(errResponse);
										});
									},
									
			//Create New User ............................						
									createUser : function(user) {
										console.log("--> UserService : calling 'createUser' method.");
										return $http
										.post(BASE_URL + '/createUserId/', user)
										.then(function(response) {
										return response.data;
												}, 
										function(errResponse) {
											console.error('Error while creating user');
											return $q.reject(errResponse);
												});
										
									},
				
			// User Login Function................
			login : function(user) {
				console.log("--> UserService : calling 'login' method.");
				return $http
				.post(BASE_URL + '/loginUser/authenticate/', user)
				.then(function(response) {
				return response.data;
					}, 
				function(errResponse) {
					console.error('Error while login user');
					return $q.reject(errResponse);
						});
										
				},
									
			// Display UserDetails By id ................						
			getSelectedUser : function(id) {
				console.log("-->UserService : calling getSelectedUser() method with id : " + id);
						return $http
					.get(BASE_URL+'/userDetails/'+ id)
					.then(function(response) {
						$rootScope.selectedUser = response.data;
						return response.data;
						},
					function(errResponse) {
		            console.error('Error while Fetching User.');
					return $q.reject(errResponse);
					});
						
			},	
						getUser : function(id) {
							console.log("-->UserService : calling getUser() method with id : " + id);
									return $http
								.get(BASE_URL+'/profileDetails/'+ id)
								.then(function(response) {
									$rootScope.selectedUser = response.data;
									return response.data;
									},
								function(errResponse) {
					            console.error('Error while Fetching User.');
								return $q.reject(errResponse);
								});	
						
						},	
								
									
			updateUser : function(user, id) {
				console.log("--> UserService : calling 'updateUser' method.");
				return $http
					      .put(BASE_URL+'/updateProfile/'+id, user)
						  .then(function(response) {
						  return response.data;
								},
						  function(errResponse) {
						  console.error('Error while updating User...');
						  return $q.reject(errResponse);
								});
			},
			
			
			
			sendFriendRequest : function(friendId) {
				return $http.post(BASE_URL + '/addFriend/'+ friendId)
						.then(
								function(response) {
								return response.data;
								},
								function(errResponse) {
								console.error("-->updateFriendRequest : Error while creating friend.")
								return $q.reject(errResponse);
								});
			},
			
			
			logout: function(user, id) 
			{
				console.log("--> UserService : calling 'logout' method.");
				
				return $http.put(BASE_URL+'/userlogout/'+id,user).then
				(function(response) 
						{
								return response.data;
						},
						function(errResponse) 
						{
								console.error('Error while logging out.');
								return $q.reject(errResponse);
						}
				);
			}
		};





			
}]);
			