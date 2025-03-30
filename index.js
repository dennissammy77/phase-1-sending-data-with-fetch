function submitData(username, useremail) {
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ name: username, email: useremail })
    };
    
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        console.log(object);
        document.body.innerHTML=object.id
        return object;
      })
      .catch(function (error) {
        console.error(error.message);
        document.body.innerHTML=error.message
      });
}