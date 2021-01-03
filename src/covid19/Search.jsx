import React, { useEffect,useState } from 'react';
import './css/style.css';
import web from 'd:/reactdem/newapp/src/images/corona.jpg';
function Search () {
    var state =useState();
    const[count,setcount]=useState();
    const[search,setsearch]=useState([]);
    useEffect(()=>{ 
        const fetchapi = async ()=>{ 
            const res= await fetch('https://api.covid19api.com/summary');
            const actual=await res.json();
            console.log(actual);
            setsearch(actual);
        };
        fetchapi();
    },[])
        var change= () => { 
        var val=search.Countries;
        var b=val.find(country);
        if(b!==undefined)
        {
            document.getElementById("country").innerText=b.Country;
        document.getElementById("deaths2").innerText=b.TotalDeaths;
        document.getElementById("conform2").innerText=b.TotalConfirmed;
        document.getElementById("recover2").innerText=b.TotalRecovered;
        }
        else
        { 
            document.getElementById("country").innerText="Not find Country";
        }

        /*document.write("<div id='demo'>"+ b.Country +"</div>");
        document.write("<div> " + b.TotalConfirmed + "</div>");
        document.getElementById("demo").setAttribute("style","heigth:");
        document.write(b.TotalDeaths);*/
           /* for( var i =0;i<192;i++)
            { 
                if(search.Countries[i].Country===count)
                {
                    console.log('find');
                    console.log(search.Countries[i].Country);
                    console.log(search.Countries[i].TotalDeaths);
                    document.write(search.Countries[i].Country)
                    document.write(search.Countries[i].TotalConfirmed)
                    document.write("<br>")
                    document.write(search.Countries[i].TotalDeaths)
                    document.write("<br>")
                    document.write(search.Countries[i].TotalRecovered)
                    document.write("<br>")
                    break;
                }
        };*/
        function country(vals)
        { 
            var reg=new RegExp(count,"i");
            return reg.exec(vals.Country)
        }
        console.log('not find');     
    }
    const chg=(event) =>{ 
        setcount(event.target.value)

    }
    return (
        <>
        <img src={web} style={{margin:"0px auto"}} alt="can not find"></img>
        <input style={{alignItems:"center"}} type="text" placeholder="Search Countary" onChange={chg} value={count} ></input>
        <button className="btn" onClick={change} > Search </button>
        <div id="country">Country</div>
        <div id="deaths"><h2 style={{color:"red"}}>Deaths</h2> <span id="deaths2" style={{color:"red"}}>Totaldeaths</span></div>
        <div id="conform"><h2>Confirmed</h2><span id="conform2" style={{color:"#ffae42"}}> Totalconform</span></div>
        <div id="recover"><h2 style={{color:"green"}}>Recovered</h2><span id="recover2" style={{color:"green"}}> Totalrecover</span> </div> 
        </>

    );

}
/*function Search()
{
const state=useState();

const[name,newname]=useState('huda');
const change = () =>{
console.log(name);
}
return(
    <>
    <h1>this is my name {name} </h1>
    <button onClick={change}>Click me</button>
    <input type="text" placeholder="enter your name" onChange={ (chn) =>{ newname(chn.target.value)}}></input>
    </>
);
}*/
export default Search;

