console.log('In client.js');

$(document).ready(onReady);

function onReady() {
    console.log('jquery working');
    getEquasion();
    $('#equal-btn').on('click', addEquasion);
    $('#clear-btn').on('click', clearBtn);
    $('#add-btn').on('click', addition);
    $('#sub-btn').on('click', subtraction);
    $('#mult-btn').on('click', multiplication);
    $('#div-btn').on('click', division);
}

// DON'T FORGET TO CLEAR OUT .result!!!!!

let operator = '';

function addition() {
    operator = '+';
}

function subtraction() {
    operator = '-';
}

function multiplication() {
    operator = '*';
}

function division() {
    operator = '/';
}

function getEquasion(math) {
    // console.log('In getEquasion')
    $.ajax({
        method: 'GET',
        url: '/getEquasion'
    }).then(function(response){
        console.log('sending equasion', response);
        // renderResult(response);
        renderHistory(response);
    }).catch(function(error){
        console.log('ERROR', error);
        alert('Something went wrong, try again');
    })
}

function clearBtn (){
    console.log('Clearing inputs');
    $('#num-in1').val('');
    $('#num-in2').val('');
}

function addEquasion(event) {
    console.log('In addEquasion');
    event.preventDefault();
    let valuesIn = {
        num1: $('#num-in1').val(),
        num2: $('#num-in2').val(),
        operator: operator
    }
    $('#num-in1').val('');
    $('#num-in2').val('');
    
    
    $.ajax({
        method: 'POST',
        url: '/sendEquasion',
        data: valuesIn
    }).then(function(response){
        getEquasion();
        console.log('Posting the equasion');
    }).catch(function(error){
        console.log('ERROR', error);
        alert('Something went wrong, try again')
    })
}

function renderHistory(array) {
    $('#historyList').empty();
    $('.result').empty();
    if (array.length != 0){
        $('.result').append(`<p>Answer: ${array[array.length-1].result}</p>`);
        for (let i = 0; i<array.length; i++) {
            $('#historyList').append(`<li>${array[i].num1} ${array[i].operator} ${array[i].num2} = ${array[i].result}</li>`)
        }
    }
}