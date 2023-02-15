import React , {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Card =()=> {
    const [item , setItem] = useState([]);
    useEffect(()=>{
        fetch("http://localhost/React/BackPHP/")
        .then(res =>res.json())
        .then(
            (result)=>{
                setItem(result);
            }
        )
    } , [])
  return (
    <div className="row">
        <div className='d_flex my-4  text-uppercase'>
               <p>Fetching Data </p>
        </div>
        <table className="table table-bordered">
            <thead className="thead-dark">
             <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
             </tr>
            </thead>
            <tbody>
                {item.map(item => (
                   
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            
                        </tr>
                    ))}
               
            </tbody>
        </table>
    </div>
  )
}

export default Card