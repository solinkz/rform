let name = ''

const appIntro = document.querySelector('.intro');

const introForm = document.querySelector('#intro-form');

const form = document.querySelector('.form1');
let introName = document.querySelector('.form-intro');


introForm.addEventListener('submit', function(e){
    e.preventDefault();
    name = document.querySelector('#name').value;

    if(validity()){

        introName.innerHTML = 'Hi ' + name + ' please kindly fill the form';
        console.log(name);
        this.reset();
        hideIntro();
        showForm();
    }else{
        let error = document.querySelector('.error')
        error.style.display = 'block';
        setTimeout(() => {
            error.style.display = 'none';
            
        }, 2000);
    }

    
})

const hideIntro = ()=>{
    appIntro.classList.add('fadeOut');
    setTimeout(() => {
        appIntro.style.display = 'none';
        
    }, 900);
    
}
const showForm = ()=>{

    setTimeout(() => {
        form.style.display = 'block';
    }, 1000);
}

const validity = ()=>{
    if(name == ""){
        console.log('false');
        return false;
    }
    console.log('true');
    return true;
}



let arr = [6,0,-3,-2,1,4];


function plusMinus(arr) {
    let denom = arr.length;
    console.log(denom);
    let pos = arr.filter(el => el > 0);
    let neg = arr.filter(el => el < 0);
    let zero = arr.filter(el => el == 0);

    let posRatio = pos.length / denom;
    let negRatio = neg.length / denom;
    let zeroRatio = zero.length / denom;

    console.log(posRatio + '\n' + negRatio + '\n' + zeroRatio);

}

plusMinus(arr);
