import $ from 'jquery';

const getTopRepos = (callback)=>{
  $.ajax({
    type: 'GET',
    url: 'http://localhost:1128/repos',
    success: (data) =>{
      callback(data);
    },
    error: () => {
      console.error('error getting top repos');
    }
  });
};

export default getTopRepos;
