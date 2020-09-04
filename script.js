function getUserRepos(userName) {
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(response => response.json())
    .then(responseJson => renderRepoList(responseJson));
}


function renderRepoList(responseJson) {
    console.log(responseJson);
   $('#results-list').empty();
   for (i = 0; i < responseJson.length; i++) {
    $('#results-list').append(`
        <li><a href=${responseJson[i].html_url}>${responseJson[i].name}</a></li>       
    `)
}
    $('#results').removeClass('hidden');
}
function watchForm() {
    $('form').submit(e => {
        const userName = e.target.userName.value;
        e.preventDefault();
        getUserRepos(userName);
    })
}

$(watchForm);