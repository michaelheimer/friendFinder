
var friends	= require('../data/friends.js');
var testArray =[
               {
                 name:'john',
                 url:'http://www.qth.in/images/team_profile.jpg',
                 scoreArray: [1,5,2,4,1,1,3,5,4,3],
               },
               {
                 name:'bill',
                 url: 'http://www.qth.in/images/team_profile.jpg',        
                 scoreArray: [1,3,2,4,4,1,4,5,4,3],
               },
              ];
justArray1 = [1,3,5,7,8,9,0,9,4,3];
justArray2 = [1,0,2,7,9,4,2,5,2,3];
var eatFriend = testArray[0];




module.exports = function (app) 
{
	
	app.get('/', function (req, res)
	 {
		res.send("test");
     });
	app.post('/survey', function (req, res) 
	{
	   console.log(" name: " + req.query['name']);
	   var storeArray = [];
	   for(var i = 1; i <= 10; i++)
	   {
	   	 console.log(" q " + i + req.query['q' + i]);
	   	 storeArray.push(req.query['q' + i]);

	   }
	   console.log("test array " + testArray[1].scoreArray);
	  
	   for(var j = 1; j < testArray.length; j ++)
	   {
          if(testScore(storeArray,testArray[j-1].scoreArray) < testScore(storeArray,testArray[j].scoreArray))
          {
             eatFriend = testArray[j];
          }

	   }
	   console.log("eatFriend " + eatFriend.name);
	   //res.send(eatFriend.name);
	   res.redirect("/view");
	});

	app.get('/view',function(req,res)
	{
        res.send('<h1>' + eatFriend.name + '</h1>' + '<img src='+ eatFriend.url + '>');
       // res.send(eatFriend.url);
        
	});
	app.get('/viewFriends', function(req,res)
	{
       res.send(testArray);
	});

function testScore(array,array2)
{
  console.log(array.length);
  console.log("mathabs" + Math.abs(array[1] - array2[1]));	
  var total = 0;
  for(var i = 0; i < array.length; i++)
  {
     total += Math.abs(array[i] - array2[i]);
     console.log("total" + total);
  }
  return total;
}
function testFriend()
{

}
};

