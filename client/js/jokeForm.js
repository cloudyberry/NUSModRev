Template.jokeForm.rendered = function() {

}

Template.jokeForm.events({
	"submit .joke-post": function() {
		var jokeName = event.target.jokeName.value;
		var jokePost = event.target.jokePost.value;
		var semester = event.target.semester.value;
		//add new column and labels!

		if (isNotEmpty(jokeName) &&
			isNotEmpty(jokePost) && isNotEmpty(semester)) {

			Meteor.call('addJokes', jokeName, jokePost, semester);
			//clear form
			event.target.jokeName.value = "";
			event.target.jokePost.value = "";
			event.target.semester.value = "";

			Bert.alert("Your Review Was Posted!", "success", "growl-top-right");

		} else {

			Bert.alert("something went wrong", "danger", "growl-top-right");
		}

		return false; // prevent submit
	}
});

// Validation Rules

var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Please fill in all fields", "danger", "growl-top-right");
	return false;
};
