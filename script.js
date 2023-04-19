// Header functionality
const searchBar = document.getElementById('searchMain');
const modalSearchBar = document.getElementById('searchModalBar');
const searchModal = document.querySelector('#searchModal');
const modalDialog = document.querySelector('.modal-dialog')
const searchSmall = document.querySelector('.search-icon-only');

searchBar.addEventListener('click',(e)=>{
  modalSearchBar.focus();
  // searchBar.blur()
})

searchModal.addEventListener('shown.bs.modal', function () {
  console.log('modal opened')
  const searchBarWidth = searchBar.clientWidth;
  console.log("searchBarWidth = " + searchBarWidth)
  if(searchBarWidth > 100){
    modalSearchBar.style.width = searchBarWidth + 'px';
    modalDialog.style.width = searchBarWidth + 'px';
  } else {
    modalSearchBar.style.width = '200px';
    modalDialog.style.width = '200px';
  }
  modalSearchBar.focus();
});

searchModal.addEventListener('hidden.bs.modal', function () {
  console.log('modal closed');
  modalSearchBar.value = '';
  searchBar.setAttribute('disabled' , '')
  searchSmall.focus();
});


searchSmall.addEventListener('click', () => {
  console.log('clicked on search icon div');
  searchBar.click();
  searchBar.removeAttribute('disabled' , '')
})

// search icon will be hidden when you click on searchBar
// const searchIcon = document.querySelector('.modal-content .search-icon')
// searchBar.addEventListener('click', function(){
//   // console.log(searchIcon.style.display)
//   searchIcon.style.opacity = '0';
// })

// Header ends here

