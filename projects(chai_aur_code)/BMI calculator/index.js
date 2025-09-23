const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height =parseInt( document.querySelector('#height').value);
    console.log(height);
    const weight = parseInt(document.querySelector('#weight').value)
    console.log(weight); // just check krne  ke  liye ki console pr value show ho rhi h 

    const weight_guide= document.querySelector('#weight-guide')
    const results = document.querySelector('#results');
    if(height===''||height<=0 || isNaN(height) ){
        results.innerHTML='Please enter valid height'
    }
    else if(weight===''||weight<=0||isNaN(weight)){
        results.innerHTML='Please enter valid weight'
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(1);
        results.innerHTML=`${bmi}`
        if(bmi<18.6){
            weight_guide.innerHTML='Under Weight';
            weight_guide.style.color='red';
        } 
        else if(bmi>=18.6 && bmi<=24.9){
            weight_guide.innerHTML='Normal Range';
            weight_guide.style.color='green';
        }
        else{
            weight_guide.innerHTML='Overweight';
            weight_guide.style.color='red';

        }
    }

})