export default function Div(){
return(
    <>
        <div>
            <button onClick={clickMe}>Button</button>
        </div>
    </>
);
}

function clickMe(){
    alert("You clicked me");
  }

