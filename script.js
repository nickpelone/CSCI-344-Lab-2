var twitter = new ctwitter.CTwitter();
twitter.stream("statuses/filter", { lang:"en", track:["Android"] }, function (stream) {
  stream.on("data", function (tweet) {
    var counter = 0;
    $(".tweets").prepend('<p class="tweet">'+ tweet.text);
    $('p').eq(9).hide(400);
  });
});
