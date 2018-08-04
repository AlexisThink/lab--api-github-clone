var request = superagent;
var form = document.querySelector('.navigation__search'); //FORM
var input = document.querySelector('.navigation__search input'); //INPUT
// var userInput = ""; //USER GITHUB CATCH

var apiProfile = 'https://api.github.com/users/'; //+ userInput + token
var repos = '/repos';
var token = '?access_token=f08c6cf404af79886e531aa0cdf0ae11dd9bcd36';

form.addEventListener('submit', function(event){
    event.preventDefault();
    var userInput = input.value;

    function getDataSidebar(response){
        var photo = response.body.avatar_url;
        var name = response.body.name;
        var login = response.body.login;
        var workplace = response.body.company;
        var location = response.body.location;
        var email = response.body.email;
        var web = response.body.site_admin;

        return [photo, name, login, workplace, location, email, web];
    }

    function createSetElemetsSidebar(data){
        var img = document.querySelector('.sidebar__photo img');
        var name = document.querySelector('.sidebar__user__current-name');
        var username = document.querySelector('.sidebar__user__user-github');
        var workplace = document.querySelector('.sidebar__workplace');
        var location = document.querySelector('.sidebar__residence');
        var email = document.querySelector('.sidebar__email');
        var web = document.querySelector('.sidebar__web');

        //SETTING VALUES
        img.src = data[0];
        name.textContent = data[1];
        username.textContent = data[2];
        workplace.textContent = data[3];
        location.textContent = data[4];
        email.textContent = data[5];
        web.textContent = data[6];
    }

    request
        .get(apiProfile+userInput+token)
        .then(getDataSidebar)
        .then(createSetElemetsSidebar);
        
    request
        .get(apiProfile+userInput+repos+token)
        .then(function(response){
            console.log(response)
        });    
})

// https://api.github.com/users/AlexisThink?access_token=f08c6cf404af79886e531aa0cdf0ae11dd9bcd36