import axios from "axios"

const signInRoute = async (email, password) => {
    const res= await axios.post('http://localhost:5500/login/',{
        "email": email,
        "password": password
       })
       if(res.data) {
       localStorage.setItem('token', `Bearer ${res.data[0]}`)
       return res.data
       }

       
}

const signUpRoute = async (email, fName,lName,password, profilePhoto) => {
    const res = await axios.post('http://localhost:5500/users', {
      "email": email,
      "FirstName": fName,
      "LastName": lName,
      "password": password,
      "image" : profilePhoto
    })
    //check this statement
    localStorage.setItem('token', `Bearer ${res.data.token}`)

    return res.data
}

const getRoute = async (id) => {
   const res = await axios.get(`http://localhost:5500/users/${id}`, {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                      }
                })

                return res.data
}

const updateRoute = async (id,email,NewFirstname,newLastname) => {
    const res = await axios.put(`http://localhost:5500/users/${id}`, {
                  "email" : email,
                  "FirstName": NewFirstname,
                  "LastName" : newLastname
                 },{
                  headers: {
                    'Authorization' : localStorage.getItem('token')
                  }
            })

            return res.data
}

const deleteRoute = async (id) => {
    const res = axios.delete(`http://localhost:5500/users/${id}`,{
        headers: {
            'Authorization' : localStorage.getItem('token')
        }})

        return res.data
}

const updatePasswordRoute = async (email,password) => {
  const res = await axios.put(`http://localhost:5500/user`,{
    "email": email,
    "password": password
  })
  if(res.data) {
    localStorage.setItem('token', `Bearer ${res.data.token}`)}
    console.log(res.data.token,'token stored')

  return res.data
}

const updatePhotoRoute = async (profilePhoto,id) => {
  const res = await axios.put(`http://localhost:5500/user/${id}`, {
                  "image" : profilePhoto
                 },{
                  headers: {
                    'Authorization' : localStorage.getItem('token')
                  }
            })

            return res.data
}

export {signInRoute, signUpRoute, getRoute, updateRoute, deleteRoute,updatePasswordRoute, updatePhotoRoute}