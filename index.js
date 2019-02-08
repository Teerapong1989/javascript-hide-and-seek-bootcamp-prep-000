function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var n = parseInt(n)
  return document.querySelectorAll('.ranked-list')
}