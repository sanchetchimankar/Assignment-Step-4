
import './Grid.css';
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";


import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBBtn,
    MDBBtnGroup,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink
} from "mdb-react-ui-kit";

function Grid() {
const [data,setData] = useState([]);
const [value,setValue] = useState("");
const [sortValue,setSortValue] = useState("");
const [currentPage,setCurrentPage] = useState(0);
const [pageLimit] = useState(4);
const [sortFilterValue,setSortFilterValue] = useState("");

const soertOptions = ["name","address","email","phone","status"];

useEffect(()=>{
  loadUsersData(0,4,0);
},[]);

const loadUsersData = async (start,end,increase) =>{
   return await axios
   .get(`http://localhost:5000/users?_start=${start}&_end=${end}`)
   .then((response) =>{
    setData(response.data);
    setCurrentPage(currentPage + increase);
})
 .catch((err) => console.log(err));
}

console.log("data",data);


const handlleReset = () =>{
    loadUsersData();
};
const handleSearch = async(e) =>{
    e.preventDefault();
    return await axios
    .get(`http://localhost:5000/users?q=${sortValue}`)
    .then((respone) =>{
     setData(respone.data);
     setSortValue("");
    })
    .catch((err) => console.log(err));
};

const handleSort = async(e) => {
    let value = e.target.value;
    setSortValue(value);
    return await axios
    .get(`http://localhost:5000/users?_sort=${value}&_order=asc`)
    .then((respone) =>{
     setData(respone.data);
    })
    .catch((err) => console.log(err));
};

const handleFilter = async(value) => {
    return await axios
    .get(`http://localhost:5000/users?status=${value}`)
    .then((respone) =>{
     setData(respone.data);
    })
    .catch((err) => console.log(err));
};

const renderPagination = () => {
    if (data.length < 4 && currentPage === 0) return null;
    if(currentPage === 0){
        return(
            <MDBPagination className='mb-0'>
            <MDBPaginationItem>
                <MDBPaginationLink>1</MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
                <MDBBtn onClick={() => loadUsersData(4,8,1)}>Next</MDBBtn>
            </MDBPaginationItem>
            </MDBPagination>
        );
    }  else if(currentPage < pageLimit -1 && data.length === pageLimit)
    {
        return (
            <MDBPagination className='mb-0'>
            
            <MDBPaginationItem>
                <MDBBtn onClick={() =>
                 loadUsersData((currentPage-1) * 4,currentPage * 4,-1)
                }
                >  
                Prev
                   </MDBBtn>
            </MDBPaginationItem>
            <MDBPaginationItem>
            <MDBPaginationLink>{currentPage +1}</MDBPaginationLink>
            </MDBPaginationItem>
               
           
            <MDBPaginationItem>
                <MDBBtn onClick={() => loadUsersData((currentPage +1) * 4,(currentPage +2) * 4,1)}>
                    Next
                </MDBBtn>
            </MDBPaginationItem>
            </MDBPagination>
        );
    }else {
        return (
      <MDBPagination className='mb-0'>
             <MDBPaginationItem>
                <MDBBtn
                 onClick={() =>
                    loadUsersData(
                        (currentPage - 1) * 4,
                        currentPage * 4,
                        -1
                      )}>Prev</MDBBtn>
            </MDBPaginationItem>
            <MDBPaginationItem>
                <MDBPaginationLink>{currentPage +1}</MDBPaginationLink>
            </MDBPaginationItem>
      </MDBPagination>
        );
    }
};
  return (
    
    <MDBContainer>
        <form style={{
            margin:"auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
        }}
        className="d-flex input-group w-auto"
        onSubmit={handleSearch}
        >
            <input 
            type="text"
            className="form-control"
            placeholder="Search Name... "
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
            />
             
                <MDBBtn type="submit" color='dark'>Search</MDBBtn>
                <MDBBtn className='mx-2' color='info' onClick={() => handlleReset()}>Reset</MDBBtn>
             
        </form>
        <div style={{marginTop: "100px"}}>
            
             <h2 className="text-center">
                Search,Filter,Sort and Pagination using JSON Fake Rest API</h2>
       <MDBRow>
        <MDBCol size="12">
           <MDBTable>
            <MDBTableHead dark>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Status</th>

              </tr>
            </MDBTableHead>
            {data.length === 0 ? (
                <MDBTableBody className="align-center mb-0">
                   <tr>
                    <td colSpan={8} className="text-center mb-0">No Data Found</td>
                   </tr>
                </MDBTableBody>
            ):(
                data.map((item,index) =>(
                    <MDBTableBody key={index}>
                    <tr>
                        <th scope="row">{index +1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>{item.status}</td>
                    </tr>
                    </MDBTableBody>
                ))
            )}
           </MDBTable>
        </MDBCol>
       </MDBRow>
       <div style={{
            margin:"auto",
            padding: "15px",
            maxWidth: "250px",
            alignContent: "center",
        }}
        > {renderPagination()}
            </div>
     </div>
     <MDBRow>
        <MDBCol size="8">
            <h5>Sort By:</h5>
            <select style={{width: "50%", borderRadius: "2px" ,height:"35px"}}
         onChange={handleSort}
         value={sortValue}
            >
                <option>Please Select Value</option>
                {soertOptions.map((item,index) => (
                    <option value={item} key={index}>
                        {item}
                        </option>
                ))}
            </select>
        </MDBCol>
        <MDBCol size="4">
           <h5>Filter By Status:</h5>
           <MDBBtnGroup>
            <MDBBtn color='success' onClick={() => handleFilter("Active")}>Active</MDBBtn>
            <MDBBtn color='danger' style={{marginLeft: "2px"}} onClick={() => handleFilter("Inactive")}>Inactive</MDBBtn>
           </MDBBtnGroup>
        </MDBCol>
     </MDBRow>
    </MDBContainer>
    
    
  );
}

export default Grid;
