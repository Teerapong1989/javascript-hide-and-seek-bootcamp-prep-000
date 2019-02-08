function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild() {
  var grandNode = document.querySelector("#grand-node");
  var deppestNode = grandNode.children[0]
  var found =false
  while(found === false){
    deppestNode = grandNode.children[0]
  } 
} 