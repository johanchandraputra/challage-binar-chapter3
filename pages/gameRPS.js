function randomanswer()
{
    var ans = new Array("Rock", "Paper", "Scissors");
    var randomm = Math.floor(Math.random()*ans.length);
    return ans[randomm];

}
