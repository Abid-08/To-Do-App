import axios from "axios";

const addRoute = async (text,description) => {
     const res = await axios.post(`http://localhost:5500/todos/`,{
      "text" : text,
      "description": description
    },{
    headers: {
      'Authorization' : localStorage.getItem('token')
    }})
    return res.data
}

const getAllRoute = async () => {
    const res = await axios.get('http://localhost:5500/todos/',
    {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })

  return res.data;
}

const getRoute = async (id) => {
    const res = await axios.get(`http://localhost:5500/todos/${id}`,
    {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })

  return res.data;
}


const updateRoute = async (id, newText, description) => {
    const res = await axios.put(`http://localhost:5500/todos/${id}`, {
      "text": newText,
      "description" : description
    },{
        headers: {
          'Authorization' : localStorage.getItem('token')
        }
      })

      return res.data
}

const updateCompletedRoute = async (id, completed) => {
    const res = await axios.put(`http://localhost:5500/completed/${id}`, {
    "completed": !completed
   }, {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })

  return res.data
}

const deleteRoute = async (id) => {
    const res = await axios.delete(`http://localhost:5500/todos/${id}`,{
      headers: {
        'Authorization' : localStorage.getItem('token')
      }})

      return res.data
}




export {addRoute, getAllRoute, getRoute, updateRoute, updateCompletedRoute, deleteRoute}