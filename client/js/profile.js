Template.profile.rendered = function() {
	$("#profile-link").addClass('selected');
	$("#jokes-link").removeClass('selected');
	$("#rankings-link").removeClass('selected');
	$("#search-link").removeClass('selected');
	$("#login-link").removeClass('selected');

}

Template.profile.helpers({
	email: function() {
		if(!Meteor.user()) {
			Bert.alert("you are not logged in, permission denied", "danger", "growl-top-right");
			return false;
		} else {
			return Meteor.user().emails[0].address;
		}
	},

	username: function() {
		if(!Meteor.user()) {
			Bert.alert("you are not logged in, permission denied", "danger", "growl-top-right");
			return false;
		} else {
			return Meteor.user().username;
		}
	},

	year: function() {
		if(!Meteor.user()) {
			Bert.alert("you are not logged in, permission denied", "danger", "growl-top-right");
			return false;
		} else {
			//this should be the problem--> how to call the year associated to the user?
			return Meteor.user().year;
		}
	},

	school: function() {
		if(!Meteor.user()) {
			Bert.alert("you are not logged in, permission denied", "danger", "growl-top-right");
			return false;
		} else {
			//how to call the year associated to the user?
			return Meteor.user().school;
		}
	},

	userJokes: function() {
		var username = Meteor.user().username;
		var userId = Meteor.userId();
		//return all the jokes belonging to this user
		//returns newest jokes to the top
		var userJokes = Jokes.find({userId: userId}, {sort: {createdAt: -1}});
		return userJokes;
	},
	//to display the respective scores of the users in the profile
	userLaughScore: function() {
		return Meteor.user().profile.laughScore;
	},

	userFrownScore: function() {
		return Meteor.user().profile.frownScore;
	},

	userPukeScore: function() {
		return Meteor.user().profile.pukeScore;
	},

	UserImages: function() {
		var username = Meteor.user().username;
		var userId = Meteor.userId();
		var URL = UserImages.findOne({username: username}, {userId: userId});
		return URL;
	}

});

Template.profile.events({
	"click #delete-joke": function() {
		//id linked to specific joke
		Meteor.call("removeJoke", this._id);
		Bert.alert("Your Joke Was Deleted", "success", "growl-top-right");
	},

	"submit .edit-profile": function(event) {
		var file = $('#profileImage').get(0).files[0];

		if (file) {

			fsFile = new FS.File(file);

			ProfileImages.insert(fsFile, function(err, result){
				if (err) {
					throw new Meteor.Error(err);
				} else {

					var imageLoc = '/cfs/files/ProfileImages/'+result._id;

					UserImages.insert({
						userId: Meteor.userId(),
						username: Meteor.user().username,
						image: imageLoc,
					});

					Bert.alert("Profile Update Successful!", "success", "growl-top-right");
				}
			});

		}

		return false // prevent submit
	}
});
