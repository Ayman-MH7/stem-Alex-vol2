const inputs = document.querySelectorAll('.inputs');

inputs.forEach(input => {
    input.addEventListener('blur', blurfun);
    input.addEventListener('focus', focusfun);
});

function focusfun(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}
function blurfun(){
    let parent = this.parentNode.parentNode;
    if (this.vlaue == ""){
        parent.classList.remove('focus');
    }
}