function fetchIssue() {
    const issues = JSON.parse(localStorage.getItem('issues'));
    const issuesList = document.getElementById('issuesList');

    issuesList.innerHTML = '';

    for (let index = 0; index < issues.length; index++) {
        const id = issues[index].id;
        const description = issues[index].text;
        const priority = issues[index].priority;
        const assigment = issues[index].assignedTo;
        const status = issues[index].status;

        issuesList.innerHTML += `<div class="well">
        <h6>Issue ID: ${id}</h6>
        <p><span class="label label-info">${status}</span></p>
        <h3>${description}</h3>
        <p><span class="glyphicon glyphicon-time"></span> ${priority} <span class="glyphicon glyphicon-user"></span> ${assigment}</p>
        <a href="#" class="btn btn-warning" onclick="setStatusClosed( ${id} )">Close</a>
        <a href="#" class="btn btn-danger" onclick+"deleteIssue( ${id} )">Delete</a>
        </div>`;


    }

}