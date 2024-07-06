//get html element
const wrapper = document.getElementById('wrapper');

//tempHtml to host div elements from for cycle
let tempHtml = '';

//how many numbers
const num = 100;

//check conditions -> value to insert (add, no overwrite) into tempHtml 
for(let i = 1; i <= num; i++){
    let text;
    if ((i % 3 == 0) && (i % 5 == 0)){
        text = 'FooBar';
    } else if (i % 3 == 0){
        text = 'Foo';
    } else if (i % 5 == 0){
        text = 'Bar';
    } else {
        text = i;
    }
    tempHtml += `
    <div>
        ${text}
    </div>
    `
};

//insert tempHtml into wrapper
wrapper.innerHTML = tempHtml;