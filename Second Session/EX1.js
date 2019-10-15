function colorme(){
    var para = document.querySelector('.non-colored');
    if (para == null){
        para = document.querySelector('.colored');
        para.innerHTML = " This text's color is lightblue"; 
        para.classList.remove('colored');
        para.classList.add('non-colored');
        return 'succes';
    }
    para.innerHTML = " This text's color is red"
    para.classList.remove('non-colored');
    para.classList.add('colored');
}