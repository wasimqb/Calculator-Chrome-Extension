document.getElementById('zero').addEventListener('click',function(){
calculator.display.value += '0'});
document.getElementById('one').addEventListener('click',function(){
calculator.display.value += '1'});
document.getElementById('two').addEventListener('click',function(){
calculator.display.value += '2'});
document.getElementById('three').addEventListener('click',function(){
calculator.display.value += '3'});
document.getElementById('four').addEventListener('click',function(){
calculator.display.value += '4'});
document.getElementById('five').addEventListener('click',function(){
calculator.display.value += '5'});
document.getElementById('six').addEventListener('click',function(){
calculator.display.value += '6'});
document.getElementById('seven').addEventListener('click',function(){
calculator.display.value += '7'});
document.getElementById('eight').addEventListener('click',function(){
calculator.display.value += '8'});
document.getElementById('nine').addEventListener('click',function(){
calculator.display.value += '9'});
document.getElementById('plus').addEventListener('click',function(){
calculator.display.value += '+'});
document.getElementById('minus').addEventListener('click',function(){
calculator.display.value += '-'});
document.getElementById('times').addEventListener('click',function(){
calculator.display.value += '*'});
document.getElementById('div').addEventListener('click',function(){
calculator.display.value += '/'});
document.getElementById('doit').addEventListener('click',function(){
calculator.display.value = eval(calculator.display.value);});
document.getElementById('clear').addEventListener('click',function(){
calculator.display.value += ''});


