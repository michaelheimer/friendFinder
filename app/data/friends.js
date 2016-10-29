

function Friends(name,imgURL,scoreArry) 
{
		this.name = name,
		this.imgURL = imgURL ,
		this.scoreArry = scoreArry		
}

Friends.prototype.printInfo = function() 
{
  console.log("Name: " + this.name + "\nURl: " +  "/nscoreArry:  " + scoreArry );
}

module.exports = Friends;
