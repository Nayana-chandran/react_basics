import React, { Component } from 'react';

class Person extends Component{
    constructor(){
        super();
        this.state={
            a: {local:"local1" , extreme:"wrong",long_local:"local2",locaing:"wrong"}
        } 
    }

bob = () =>{
    
    for(let b in this.state.a){
        let verified = b.includes('local');
        if(verified){
            console.log(this.state.a[b]);
        }
    }
    
}

render(){
    return(
        <>
        {this.bob()}
        </>
    )
}

}

export default Person;