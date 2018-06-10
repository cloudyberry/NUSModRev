Meteor.startup(function() {
  if (Meteor.users.find().count() === 0) {
    // create a date string
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    var date = (month + "/" + day + "/" + year).toString();

    	// Super User
      Accounts.createUser({
        username: 'Kaining',
        email: 'e0201623@u.nus.edu',
        password: 'lalala',
        year: '1',
        school:'School of Computing',
        profile: {
        	laughScore: 5,
        	frownScore: 3,
          pukeScore: 2,
        }
      });

      var user0Id = Meteor.users.findOne({username: 'Kaining'})._id;

      Jokes.insert({
        jokeName: "CS1231: Discrete Structures",
        jokePost: "Tutorials are extremely tough",
        semester: "AY1718 S1",
        diff: "high",
        recommendation: "3",
        workload: "low",
        steepness: "high",
        author: "Kaining",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["Kaining"],
        userId: user0Id,
      });
      console.log("Kaining Created");
      console.log("Kaining Joke Created");

      // User 1
      Accounts.createUser({
        username: 'User1',
        email: 'user1@example.com',
        password: 'password',
        year: '1',
        school:'School of Computing',
        profile: {
          laughScore: 0,
          frownScore: 0,
          pukeScore: 0,
        }
      });

      var user1Id = Meteor.users.findOne({username: 'User1'})._id;

      Jokes.insert({
        jokeName: "MA1312: Calculus for computing",
        jokePost: "Prof makes the lectures very interesting",
        semester: "AY1718 S2",
        diff: "moderate",
        recommendation: "5",
        workload: "low",
        steepness: "high",
        author: "User1",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["User1"],
        userId: user1Id,
      });
      console.log("User1 Created");
      console.log("User1 Joke Created");

      // User 2
      Accounts.createUser({
        username: 'User2',
        email: 'user2@example.com',
        password: 'password',
        year: '1',
        school:'School of Computing',
        profile: {
          laughScore: 0,
          frownScore: 0,
          pukeScore: 0,
        }
      });

      var user2Id = Meteor.users.findOne({username: 'User2'})._id;

      Jokes.insert({
        jokeName: "GER1000: Quantitative reasoning",
        jokePost: "Tutorials are extremely tough",
        semester: "AY1718 S1",
        diff: "high",
        recommendation: "3",
        workload: "low",
        steepness: "high",
        author: "User2",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["User2"],
        userId: user2Id,
      });
      console.log("User2 Created");
      console.log("User2 Joke Created");


      // User 3
      Accounts.createUser({
        username: 'User8',
        email: 'user8@example.com',
        password: 'password',
        year: '1',
        school:'School of Computing',
        profile: {
          laughScore: 0,
          frownScore: 0,
          pukeScore: 0,
        }
      });

      var user8Id = Meteor.users.findOne({username: 'User8'})._id;

      Jokes.insert({
        jokeName: "CS1231: Discrete Structures",
        jokePost: "Tutorials are extremely tough",
        semester: "AY1718 S1",
        diff: "high",
        recommendation: "3",
        workload: "low",
        steepness: "high",
        author: "User8",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["User8"],
        userId: user8Id,
      });
      console.log("User3 Created");
      console.log("User3 Joke Created");

      // User 4
      Accounts.createUser({
        username: 'User9',
        email: 'user9@example.com',
        password: 'password',
        year: '1',
        school:'School of Computing',
        profile: {
          laughScore: 0,
          frownScore: 0,
          pukeScore: 0,
        }
      });

      var user9Id = Meteor.users.findOne({username: 'User9'})._id;

      Jokes.insert({
       jokeName: "CS1231: Discrete Structures",
        jokePost: "Tutorials are extremely tough",
        semester: "AY1718 S1",
        diff: "high",
        recommendation: "3",
        workload: "low",
        steepness: "high",
        author: "User9",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["User9"],
        userId: user9Id,
      });
      console.log("User4 Created");
      console.log("User4 Joke Created");

      // User 5
      Accounts.createUser({
        username: 'User10',
        email: 'user10@example.com',
        password: 'password',
        year: '1',
        school:'School of Computing',
        profile: {
          laughScore: 0,
          frownScore: 0,
          pukeScore: 0,
        }
      });

      var user10Id = Meteor.users.findOne({username: 'User10'})._id;

      Jokes.insert({
       jokeName: "CFG1010",
        jokePost: "Tutorials are extremely tough",
        semester: "AY1718 S1",
        diff: "high",
        recommendation: "3",
        workload: "low",
        steepness: "high",
        author: "User10",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["User10"],
        userId: user10Id,
      });
      console.log("User5 Created");
      console.log("User5 Joke Created");

      console.log("  ");
      console.log("User Database Seeded! Now get to work! :)");
      console.log("Jokes Database Seeded! Isn't that nice?! :P");

  }

});
