var searchString ='';
var stringSearch = '';

modalSearchBar.addEventListener('keydown', (e) => { 
    if(e.key.length <= 2){
      searchString += e.key; 
      storeSearchValue(searchString);
    } else{
      storeSearchValue(searchString.substring(0,searchString.length-1));
    }
  })

function storeSearchValue(str){
    return stringSearch = str;
  }

//   header temp
