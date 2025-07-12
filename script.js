(function () {
  var names = ["Yaqub", "Junaid", "Ali", "Jawad", "Fizza", "Hina", "John", "Maryam", "James", "Kiran"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
