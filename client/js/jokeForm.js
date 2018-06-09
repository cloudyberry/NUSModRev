Template.jokeForm.rendered = function() {

}

Template.jokeForm.events({
	"submit .joke-post": function() {
		//jokeName,semester,recommendation,diff,workload,steepness,jokePost
		var jokeName = event.target.jokeName.value;
		var semester = event.target.semester.value;
		var recommendation = event.target.recommendation.value;
		var diff = event.target.diff.value;
		var workload = event.target.workload.value;
		var steepness = event.target.steepness.value;
		var jokePost = event.target.jokePost.value;
		
		
		//add new column and labels!

		if (isNotEmpty(jokeName) &&
			isNotEmpty(jokePost) && isNotEmpty(semester)) {

			Meteor.call('addJokes', jokeName, semester, recommendation, diff, workload, steepness, jokePost);
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
