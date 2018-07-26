import React from 'react';
import axios from 'axios';


class HomePage extends React.Component{
  state={
    message:'',
    img:'',
    animate: false
  };

  componentDidMount() {
    axios.get('/api/welcome').then((response)=>{
    this.setState({
                  message:response.data.message,
                  img:response.data.url
    })
    })
  }

  redirect = ()=>{
    this.setState({animate:true});
    setTimeout(()=>{
      this.props.history.push('/shop')
    },1500)
  };

  render() {
    return (
        <div className="home-page">
          <h1>Spustelėkite logotipą norėdami užeiti</h1>
         <h2>{this.state.message}</h2>
          {this.state.img &&

          <img
              className={this.state.animate ? 'animate':null}
              onClick={this.redirect}
              src={this.state.img} alt="logo"/>
          }
        </div>
    );
  }
}


export default HomePage