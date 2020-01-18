import $ from 'jquery';

const getUserRepos = (data)=> {
  console.log('inside getUserRepos ', data);
  $.ajax({
    type: 'POST',
    url: 'http://localhost:1128/repos',
    data: JSON.stringify({ name: data }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
  });
}

export default getUserRepos;