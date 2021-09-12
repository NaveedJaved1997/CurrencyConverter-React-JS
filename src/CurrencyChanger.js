import { render } from '@testing-library/react';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function CurrencyChanger (){
    return(
    <div className="container">
        <div className='card-header'>
        <h1>Currency Changer</h1>
        <p id='showres'>1 USD = 168.19 PKR</p>
        </div>
       <form id='myForm' className='form row'>
           <div className='col-md-6'>
           <input className='form-control' type='number' placeholder='USD' id='usd'/>
           </div>
           <div className='col-md-6'>
           <input className='form-control' type='number' placeholder='PKR' id='pkr'/>
           </div>
       </form>
       <button onClick={reset} className='btn btn-danger m-2 btn-lg'>Reset</button>
       <button onClick={convert} className='btn btn-primary m-2 btn-lg'>Convert</button>
    </div>
    );
}

function convert(){
    var pkr = 1;
    var  usd = 168.19;
    var res = 0;
    var p = document.getElementById("pkr").value;
    var u = document.getElementById("usd").value;
    if((u!=null || u!='') && (p == null || p =='')){
        var res = u * usd;
        var res = res.toFixed(2);
        var temp = document.getElementById("showres").innerHTML= u +' USD = '+ res +' PKR';
    }
    else if((u==null || u=='') && (p!=null || p!='')){
        var res = p / usd;
        var res = res.toFixed(2);
        var temp = document.getElementById("showres").innerHTML= p +' PKR = '+ res +' USD';
    }
   
}
function reset(){
    document.getElementById("myForm").reset();
}

export default CurrencyChanger;

