/* #6 start the #external #action and say hello */
console.log("App is alive");

var mesajj;
var currentChannel;
var currentLocation = {
    latitude: 48.135124,
    longitude: 11.581981,
    what3words: 'waddled.along.warping',
}
/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName);

    currentChannel = channelName;
    console.log("current channel", currentChannel);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/'+channelName.createdBy+'" target="_blank"><strong>'+channelName.createdBy+'</strong></a>';

    /* #6 #liking channels on #click */
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
    if(channelName.starred==false){ 
        $('#channel-star').removeClass('fas');
        $('#channel-star').addClass('far');
    }
    if(channelName.starred==true){ 
        $('#channel-star').removeClass('far');
        $('#channel-star').addClass('fas');
    }

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');
}

/* #6 #liking a channel on #click */
function star() {
    $("#channel-star").toggleClass('fas far');
}    

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

//creating a message
  function Message(createdBy, latitude, longitude, createdOn, expiresOn, text, own){
    this.createdBy = currentLocation.what3words;
    this.latitude = currentLocation.latitude;
    this.longitude = currentLocation.longitude;
    this.createdOn = Date.now();
    this.expiresOn = new Date(Date.now() + 900000);
    this.text = text;
    this.own = true;
  }

  function sendMessage(){
      var msg = new Message();
      msg.text = $('#message-input').value();
      $('#message-input').value()='';
      console.log("A new message was created", msg);
      createMessageElement(msg);    

  }

  function createMessageElement(msg){
    
    var diffMs = expiresIn - Date.now();
    var expiresIn= Math.round(((diffMs % 86400000) % 3600000) / 60000);

      var mesajj = '<div class="message">'
       +'<h3><a href=""http://w3w.co/'+msg.createdBy+'target="_blank"><strong>'+msg.createdBy+'</strong></a>'
          +msg.createdOn+'<em>'+expiresIn+'min. left</em></h3>'  
      +'<p'+msg.text+'</p>'
      +'<button>+5 min.</button>'
      console.log("ceva nou", mesajj);
  +'</div>'
  $('#messages').append(mesajj);
  }
