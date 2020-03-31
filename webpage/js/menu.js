
  state = 0
function searchView(){
  searchDiv = document.querySelector('#search')
  searchBtn = document.querySelector('#menu_btn')
  if(state == 0){
    searchBtn.style.float = 'right'
    searchBtn.style.marginRight = '10%'
    searchDiv.style.right = '0'
    searchDiv.style.transition = '.4s'
    state++;
  }else if(state == 1){
    searchBtn.style.float = 'left'
    searchBtn.style.marginLeft = '9%'
    searchDiv.style.right = '-60%'
    searchDiv.style.transition = '.4s'
    state--;
  }
}
