let btns = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let x = 0, o = 0;
let turn = "X";

reset.addEventListener("click",()=>{
    btns.forEach((box) =>{
        box.innerText = ""
        box.disabled = false;;
    })
    x = 0;
    o = 0;
    document.querySelector("#msg").innerText = `X = ${x} , O = ${o}`;
})

const winPattern = [[0,1,2],
                    [0,3,6],
                    [0,4,8],
                    [1,4,7],
                    [2,5,8],
                    [2,4,6],
                    [3,4,5],
                    [6,7,8]];

btns.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        if(turn === "O"){
            turn = "X";
            btn.innerText = "O";
        }else{
            turn = "O";
            btn.innerText = "X";
        }
        disabledAllBtn(btn);
        checkWinner();
    })
});

const checkWinner = ()=>{
    
    for(let pattern of winPattern){
        let pos_1 = btns[pattern[0]].innerText;
        let pos_2 = btns[pattern[1]].innerText;
        let pos_3 = btns[pattern[2]].innerText;

        if(pos_1 !=="" && pos_2 !=="" && pos_3 !==""){
            if(pos_1 === pos_2 && pos_2 === pos_3){
                console.log("Winner is = "+pos_1);
                if(pos_1 === "X"){
                    x++;
                    document.querySelector("#msg").innerText = `X = ${x} , O = ${o}`;
                }else{
                    o++;
                    document.querySelector("#msg").innerText= `X = ${x} , O = ${o}`;
                }
                setTimeout(()=>{
                    btns.forEach((btn)=>{
                        btn.innerText = "";
                        btn.disabled = false;
                    })
                },4000);
            }
        }
    }   
}
setTimeout(4000);
const disabledAllBtn  = (btn) =>{
    btn.disabled = true;
}