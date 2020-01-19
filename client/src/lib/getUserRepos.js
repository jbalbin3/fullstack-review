import $ from 'jquery';

const getUserRepos = (data, callback)=> {
  // console.log('inside getUserRepos ', data);
  // TODO: handle when no data received when user doesn't exist
  $.ajax({
    type: 'POST',
    url: 'http://localhost:1128/repos',
    data: JSON.stringify({ name: data }),
    contentType: "application/json; charset=utf-8",
    // dataType: "json",
    success: () =>{
      callback();
    },
    error: () => {
      console.error('error sending username');
    }
  });
}

export default getUserRepos;