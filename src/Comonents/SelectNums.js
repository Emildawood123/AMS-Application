
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
function Select(){
const [In1,setIn1] = useState("emil");
const [In2,setIn2] = useState();
return(
    <>
    <form>
        <label>nums of members/team: </label>
        <input onInput={(e)=>{
            setIn1(e.target.value)
        }}  type="number" />
        <br />
        <label>nums of teams: </label>
        <input onInput={(e)=>{
            setIn2(e.target.value)
        }} type="number" />
        <br />
        <Link className="link" to={In1+In2} onClick={(e)=>{
            console.log(In1)
            console.log(In2)
        }}>Submit</Link>
    </form>
    </>
 )
}
function Main(){
    let param = useParams();
    let arr2 = [];
    let arr1 = [];
    let count =0;
    for(let i=0;i<param.l[1];i++){
        arr2.push(i)
    }
    for(let i=0;i<param.l[0];i++){
        arr1.push(count)
        count ++;
    }
    let newArr2 = arr2.map((e)=>{return <input key={e}/>})
    let Compen = {}
    let Ps = document.querySelectorAll(".parent > div > p")
    let Parent = document.querySelector(".parent")
    let inputs = document.querySelectorAll(`.parent > div > div[data-id="1"] > input`)
    const Res = ()=>{
    setTimeout(()=>{
        Ps.forEach((e)=>{
            Object.assign(Compen,{[e.innerHTML]:Array.from(document.querySelectorAll(`.parent > div > div[data-id="${e.id}"] > input`))});
        })
        let cou = inputs.length-1;
        Object.values(Compen)[0].forEach((e, index)=>{
            let team = document.createElement("p")
            team.innerHTML = `Team ${index + 1}:`
            Parent.appendChild(team)
            Object.keys(Compen).forEach((ele)=>{
                let Random = Math.floor(Math.random()*cou)
                let newCompen = Compen[ele].filter((Ele)=>{
                    return Ele !== Compen[ele][Random]
                }) 
                let member = document.createElement("li")
                member.innerHTML = Compen[ele][Random].value 
                Parent.append(member)
                console.log(Compen[ele][Random].value)
                if(Compen[ele].length > 1){
                Compen[ele] = newCompen
                }
            })
            cou--
            console.log("************")
    })
    })
}
    return(<>
    <div className="parent">
        {arr1.map((e)=>{return <div key={e}><p id={e+1} key={e}>rank {e+1}</p><div data-id={e+1}>{newArr2}</div></div>})}
        <Link className="link" onClick={Res} to="">Result</Link>
    </div>
    </>)
    
}

export {Select,Main};