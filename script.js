// Header functionality
const searchBar = document.getElementById('searchMain');
const modalSearchBar = document.getElementById('searchModalBar');
const searchModal = document.querySelector('#searchModal');

searchBar.addEventListener('click',(e)=>{
  modalSearchBar.focus();
  // searchBar.blur()
})

searchModal.addEventListener('shown.bs.modal', function () {
  console.log('modal opened')
  modalSearchBar.focus();
});

searchModal.addEventListener('hidden.bs.modal', function () {
  console.log('modal closed');
  modalSearchBar.value = '';
  searchBar.setAttribute('disabled' , '')
});

// Header ends here

