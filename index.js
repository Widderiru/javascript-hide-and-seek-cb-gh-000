
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const lis = document
  .querySelectorAll('ul.ranked-list');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n + 1);
  }
}

function deepestChild() {
  const lis = document.getElementById('grand-node').querySelector('div')
  var actual = lis
  while(actual.childNodes.length >0) {
    actual = actual.firstChild
  }
  return actual//actual.innerHTML
}
