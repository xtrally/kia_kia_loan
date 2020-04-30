// Show covid notification bar
const covidBar = document.querySelector('.covid-bar');
const covidClose = document.getElementById('c-close');
covidBar.style.display = 'none'
function notifications() {
    setTimeout(function(){
        covidBar.style.display = 'block'
    }, 5000)
}

notifications()
covidClose.addEventListener('click', () => {
    covidBar.style.display = 'none'
})
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
//         covidBar.style.display = 'block'
//     } 
//     else {
//         covidBar.style.display = 'none'
//     }
// };

// Calculator
let calculateBtn = document.getElementById('calculate');
let results = document.getElementById('result');
let resultsCont = document.getElementById('result-container');
let calcLoader = document.getElementById('calc-loader');

resultsCont.style.display = 'none'
calcLoader.style.display = 'none'

calculateBtn.addEventListener('click', function() {
    results.style.display = 'block';
})


var loanCalculator=(e)=>{

    const loanAmount = document.getElementById('loan').value;
    const loanDuration = document.getElementById('duration').value;
    const calculate= document.getElementById('calculate');
    const  result= document.getElementById('result')
   
   
    e.preventDefault();
    const fivePercent=Number(loanAmount)*0.05;
    const loanPerMonth= Number(loanAmount)/ Number(loanDuration);
    const amountToPay=Number(fivePercent) + Number(loanPerMonth);
   
       if(loanAmount > 3000000 ){
         resultsCont.style.display = 'block'
              calcLoader.style.display = 'block'
                    setTimeout(function(){
                        calcLoader.style.display = 'none'
                        resultsCont.style.display = 'flex'
                        result.textContent = `${loanAmount}NGN is above our policy limit of NGN3,000,000.`;
                    },3000)
         }
        else if(loanDuration > 12 ){
         resultsCont.style.display = 'block'
              calcLoader.style.display = 'block'
                    setTimeout(function(){
                        calcLoader.style.display = 'none'
                        resultsCont.style.display = 'flex'
                        result.textContent = `${loanDuration} Month(s) is above our policy limit of 12 MONTHS`;
                    },3000)
         }
         else{
            resultsCont.style.display = 'block'
              calcLoader.style.display = 'block'
                    setTimeout(function(){
                        calcLoader.style.display = 'none'
                        resultsCont.style.display = 'flex'
                        result.textContent = `Estimated Monthly Repayment On Borrowing ${loanAmount}NGN
                                       for ${loanDuration} Month(s) is ${amountToPay}`;
                    },3000)
             }
             }
                calculate.addEventListener('click',loanCalculator);


// CAlculator Ends



                
// form 
const forms = document.querySelector('form')
                
// Loader 
const loader = document.querySelector('.loader-container')
loader.style.display = 'none'


// Validation
const covidPop = document.getElementById('covid-pop');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const form4 = document.getElementById('form4');
const form5 = document.getElementById('form5');
const email = document.getElementById('form1-email');
const belowemail = document.querySelector('.below-email');
const btnCovid = document.querySelector('.btn-covid');
const mobile = document.getElementById('mobile');
const belowForm = document.getElementById('below-form');
const belowBtn = document.getElementById('below-btn');
const helpLink = document.getElementById('help-link');
const errorMsg = document.querySelector('.error-msg');

// Forms Page 
form2.style.display = 'none';
form3.style.display = 'none';
form4.style.display = 'none';
form5.style.display = 'none';
covidPop.style.display = 'none';


helpLink.addEventListener('click', function(){
    
    homepage.style.display = 'none';
    pagesContainer.style.display = 'block';
    form1.style.display = 'none';
    form2.style.display = 'none';
form3.style.display = 'none';
form4.style.display = 'none';
form5.style.display = 'none';
    covidPop.style.display = 'block';

})

btnCovid.addEventListener('click', function(){
    
    loader.style.display = 'block';
    homepage.style.display = 'none';
    pagesContainer.style.display = 'block';
    covidPop.style.display = 'none';

    setTimeout(function(){
        loader.style.display = 'none';
        form1.style.display = 'block';
    }, 2000)

})


// validateEmail
belowBtn.addEventListener('click', validateBelowEmail)

function validateBelowEmail() {
    if(belowemail.value == '') {
        console.log('empty')
    } else {
        homepage.style.display = 'none';
        pagesContainer.style.display = 'block';
        form1.style.display = 'block';
    }
}


form1.addEventListener('submit', validateEmail)

function validateEmail(e){
    e.preventDefault();
    const re = /^[a-zA-Z0-9\-\_\.]+\@[gmail?yahoo]{5}\.[a-zA-Z0-9]{2,6}$/;
    if(email.value == '') {
        errorMsg.style.display = 'block'
        errorMsg.innerHTML = '* field cannot be blank'
        email.style.border = '1px solid red'
    } else if(!re.test(email.value)) {
        errorMsg.style.display = 'block'
        errorMsg.textContent = '* Must be a valid email format';
        email.style.border = '1px solid red'
    } else {
        loader.style.display = 'block';
        form1.style.display = 'none';

        setTimeout(function(){
            form2.style.display = 'block';
            loader.style.display = 'none';
        }, 2000)
    }
}

form2.addEventListener('submit', function(e){
    e.preventDefault();
    
    loader.style.display = 'block';
    form2.style.display = 'none';

        setTimeout(function(){
            form3.style.display = 'block';
            loader.style.display = 'none';
        }, 2000)

})

form3.addEventListener('submit', function(e){
    e.preventDefault();
    
    loader.style.display = 'block';
    form3.style.display = 'none';

        setTimeout(function(){
            form4.style.display = 'block';
            loader.style.display = 'none';
        }, 2000)

})

form4.addEventListener('submit', function(e){
    e.preventDefault();
    
    loader.style.display = 'block';
    form4.style.display = 'none';

        setTimeout(function(){
            form5.style.display = 'block';
            loader.style.display = 'none';
        }, 2000)

})







// Pages 
const homepage = document.querySelector('.homepage')
const pagesContainer = document.querySelector('.pages-container')
const loginBtn = document.getElementById('login-btn')
const quick = document.getElementById('quick')
const BackHome = document.getElementById('back-home')
const mobileAct = document.getElementById('mobile-act')
const getStarted = document.getElementById('get-started')

pagesContainer.style.display = 'none'
// pagesContainer.style.display = 'block'

quick.addEventListener('click', registerForm)
getStarted.addEventListener('click', registerForm)
mobileAct.addEventListener('click', registerForm)
BackHome.addEventListener('click', LoadHome)

function registerForm() {
    homepage.style.display = 'none'
    pagesContainer.style.display = 'block'
}

// load home
function LoadHome() {
    loader.style.display = 'block';
    pagesContainer.style.display = 'none'
    form5.style.display = 'none';

            homepage.style.display = 'block';
            loader.style.display = 'none';
}



// Whatsapp 10 clicks
const confirmSignup = document.querySelector(".confirm-sign-up");
const WhatsappBtn = document.getElementById('whatsapp-btn');
confirmSignup.style.display = 'none'
let count = 0;
  WhatsappBtn.addEventListener('click', function() {
    count += 1;
      if(count == 10) {
    confirmSignup.style.display = 'block'
  }
})