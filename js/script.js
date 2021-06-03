var LastNames = ['Rosso', 'Blu', 'Verde', 'Giallo', 'Viola'];
var NewName = prompt('Tell me your lastname');
var output = document.getElementById('user-names');

LastNames.push(NewName);
LastNames.sort();


output.innerHTML = LastNames + '<br/>' + LastNames.indexOf(NewName) ;
