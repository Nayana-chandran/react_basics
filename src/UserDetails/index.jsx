import React, { Component } from 'react';

class UserDetails extends Component{
    constructor(){
        super();
        this.state={id:"",userName:"",mobileNumber:"",gender:"",comment:"",data:[]}
    }
    changeField = (e)=> {   
        console.log(e.target)     
        this.setState({[e.target.name]:e.target.value})
      }
    submitData = () =>{
        if(this.state.userName === "" || this.state.age === "" || this.state.gender === ""){
            console.log('here');            
        }else{
            let values = {id:Math.random(),name:this.state.userName,number:this.state.mobileNumber,gender:this.state.gender,comment:this.state.comment};
            let data  = this.state.data;
            data.push(values)
            this.setState({data,userName:"",mobileNumber:"",gender:"",comment:""})    
        }
        // let values = {id:Math.random(),name:this.state.userName,number:this.state.mobileNumber,gender:this.state.gender};
        // let data  = this.state.data;
        // data.push(values)
        // this.setState({data,userName:"",mobileNumber:""})
    }
    deleteData = (index) =>{
        let values = this.state.data;                
        const data = values.slice(0, index).concat(values.slice(index + 1, values.length))        
        console.log(data);
        this.setState({data});
    }
    render(){
        console.log(this.state.data && this.state.data);
        return(<>
        <div>UserName: 
        <input type="text" className="userName" name="userName" value={this.state.userName} onChange={e => this.changeField(e)} required/>
        </div>
        <div>
        Number:
        <input type="number" className="mobileNumber" name="mobileNumber" value={this.state.mobileNumber} onChange={e => this.changeField(e)} required/>
        </div>       
        <div>
            Gender:
             Male<input
              type="radio"
              value="Male"
              name="gender"
              checked={this.state.gender === "Male"}
              onChange={this.changeField}
            />
            Female<input
              type="radio"
              value="Female"
              name="gender"
              checked={this.state.gender === "Female"}
              onChange={(e)=>this.changeField(e)}
            /></div>
            <div>Comments:
            <textarea value={this.state.comment} name="comment" onChange={e => this.changeField(e) }/></div>
        <button type="submit" onClick={this.submitData} value="Submit">Submit</button>

        <table id="user_identification">
            <tbody>
            <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Gender</th>
                <th>Comments</th>
            </tr>
            {this.state.data.length > 0 && this.state.data.map((value,index)=>
            <tr key={index}>
                <td>{value.name}</td>                
                <td>{value.number}</td>
                <td>{value.gender}</td>
                <td>{value.comment}</td>
                <td><button onClick={()=>this.deleteData(index)}>delete</button></td>                
            </tr>)}
            </tbody>
        </table>


        </>)
    }
}



export default UserDetails;