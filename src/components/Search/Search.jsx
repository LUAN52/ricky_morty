import React from 'react';


const Search =({data,setButton})=>
{

    
    return(
        <div className="container" style={{border:"2px solid black" ,marginTop:"50px"}}>
            <div className="row">
                {data.map(item=>(<div className="col" style={{padding:"0"}}>
                    <div  key={item.id}className="card" style={{width: "8rem" ,marginTop:"10px",marginBottom:"10px"}}>
                        <img src={item.image}  alt="..."/>
                    </div>
                </div>))}
                
            </div>
        </div>
    )
}

export default Search;