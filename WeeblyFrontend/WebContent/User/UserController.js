app.controller('UserController', [
		'$scope',
		'UserService',
		'$location',
		'$rootScope',
		'$route',
		'$window',
		
		function($scope, UserService, $location, $rootScope,$route,$window) {
			console.log("UserController...")

			var self = this;
			self.user = {
			    errorCode : '',
				errorMessage : '',
				userId : '',
				name : '',
				password : '',
				role : '',
				email : '',
				description : '',
				gender : '',
				dob : '',
				address : '',
				contactNo : '',
				IsOnline : '',
				status : '',
				image : ''
				}
			self.users = [];
			
			//Create New User..........................
			self.createUser = function(user) {
				console.log("--> UserController : calling createUser method.");
				UserService.createUser(user).then(
						function(e) {
							self.users = e;
							alert('User Created Successfully...');
							
						},
						function(errResponse) {
							console.error('Error while creating user...');
						});
			};
			
			
			//LogIn UserAccount.........
			
			self.login = function(user) {
				console.log("-->UserController : calling login method.");
				UserService.login(user).then(
						function(s) {
							self.user = s;
							$rootScope.currentUser = self.user;
							console.log (self.user.userId);
						console.log ($rootScope.currentUser.role);
							$location.path('/index');
						}, 
						function(errResponse) {
							console.error('Error while fetching User...');
						});
			};
			
			
			//fetching all users.................
			
			self.fetchAllUsers = function() {
				console.log("--> UserController : calling fetchAllUsers method.");
				UserService.fetchAllUsers().then(
				function(d) {
				self.users = d;
								}, function(errResponse) {
									console.error('Error while fetching Users...');
								});
					};
				self.fetchAllUsers();
			
			//Check user profile.....................................
				
				self.getSelectedUser = function(id) {
					console.log("-->UserController : calling getSelectedUser method : getting user with id : " + id);
					UserService.getSelectedUser(id).then(
							function(s) {
								self.user = s;
								$location.path('/userAccount');
							}, 
							function(errResponse) {
								console.error('Error while fetching User...');
							});
				};
				
				
				
				self.getUser = function(id) {
					console.log("-->UserController : calling getSelectedUser method : getting user with id : " + id);
					UserService.getSelectedUser(id).then(
							function(s) {
								self.user = s;
								$location.path('/myProfile');
							}, 
							function(errResponse) {
								console.error('Error while fetching User...');
							});
				};
				
				
				
				//Edit Profile Account
				self.updateUser = function(user,id) {
					console.log("-->UserController : calling updateUser method.");
					UserService.updateUser(user,id).then(
			         function(s) {
							self.user = s;
							alert('User updated Successfully...')
							console.log(self.user);
							$location.path('/myAccount');
							},
					function(errResponse) {
					console.error('Error while updating user...')
						});
					};
			
					
		// LogOut User......
					
					self.logout = function(user,id) 
					{
						console.log("--> UserController : calling logout method.");
						alert(user.userId+id);
						UserService.logout(user,id);
						$rootScope.currentUser = {};
						//$localStorage.currentUser.remove('currentUser');
					    //$cookieStore.remove('currentUser');
						
						console.log("-->UserController : User Logged out.");
						$window.location.reload();
						$location.path('/index');
					}
					
					
					
					self.sendFriendRequest = function sendFriendRequest(friendId) {
						console.log("--> sendFriendRequest : "+friendId);
						UserService.sendFriendRequest(friendId).then(
						function(d) {
						self.friend = d;
						alert('Friend Request Sent...')
						},
						function(errResponse) {
						console.error('Error while friends...');
						});
					}
					
					
					
				
			self.reset = function() {
				console.log('submit a new User', self.user);
				self.user = {
						    errorCode : '',
							errorMessage : '',
							userId : '',
							name : '',
							password : '',
							role : '',
							email : '',
							description : '',
							gender : '',
							dob : '',
							address : '',
							contactNo : '',
							IsOnline : '',
							status : '',
							image : '' 

				};
				$scope.myForm.$setPristine(); // reset form...
			};
		} ]);