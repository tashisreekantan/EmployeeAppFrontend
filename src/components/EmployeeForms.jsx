import React from 'react'

const EmployeeForms = () => {
  return (
     <div>
        <div className="container mt-5">
        <h1>Employee Form</h1>
        <form>
            <div className="mb-3">
            <label for="" className="form-label">Name</label>
             <input type="text" className="form-control" id="" aria-describedby=""/>
            <div id="" className="form-text"></div>
            </div>
            <div className="mb-3">
            <label for="" className="form-label">Designation</label>
             <input type="text" className="form-control" id="" aria-describedby=""/>
            <div id="" className="form-text"></div>
            </div>
            <div className="mb-3">
            <label for="" className="form-label">Location</label>
             <input type="text" className="form-control" id="" aria-describedby=""/>
            <div id="" className="form-text"></div>
            </div>
            <div className="mb-3">
            <label for="" className="form-label">Salary</label>
             <input type="Number" className="form-control" id="" aria-describedby=""/>
            <div id="" className="form-text"></div>
            </div>
       
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
  )
}

export default EmployeeForms ;