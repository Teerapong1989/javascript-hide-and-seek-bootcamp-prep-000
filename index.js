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
  var current_level = document.getElementById("grand-node");
  var next_level, deepest_level;
  var found = false;
  while (found === false) {
    next_level = current_level.children
    if (next_level.length === 0) {
      deepest_level = current_level;
      found = true;
    }
    else {
      current_level = next_level[0];
    }
  }
  return deepest_level
} 