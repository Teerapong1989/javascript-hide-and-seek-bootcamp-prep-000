function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var rank = document.querySelectorAll('ul.ranked-list li')
  for(let i = 0; i < lis.lenght; i++){
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
  }
}