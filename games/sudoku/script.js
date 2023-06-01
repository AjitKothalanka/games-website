    var board=[];
    var input1=document.getElementsByTagName("input")
    for(var i=0;i<=80;i++)
    {
        input1[i].addEventListener('input', updateValue);
    }
     function updateValue(e)
    {
         for(var i=1;i<=81;i++)
    {
        if(e.target.value===document.getElementById(i).value&&e.target.value!="")
        {
            document.getElementById(i).classList.add("focuss")
        }
        else{
            document.getElementById(i).classList.remove("focuss")
        }
    }

    }

function myfunction(position,blockcheck){
    for(var i=1;i<=81;i++)
    { 
        document.getElementById(i).classList.remove("focuss")
    }
    for(let i=1;i<=81;i++)
    {
        document.getElementById(`${i}`).classList.remove("animate")
       
    }
      var count=0;
      var got1;
      var got2;
      for(let i=0;i<9;i++)
      {
          for(let j=0;j<9;j++)
          {
              count++;
              if(count==position)
              {
                got1=i;
                got2=j;
                break;
              }
          }
      }
   var a=got1;
   var b=got2;
   //for row//
   for(var j=0;j<=8;j++)
    {
        const cellid1=a*9+j+1;
        document.querySelector(`#cell-${cellid1} input`).classList.add("animate");
    }
    //for column//
    for(var i=0;i<=8;i++)
    {  
        const cellid1=i*9+b+1;
        document.querySelector(`#cell-${cellid1} input`).classList.add("animate");
    }
    var x=document.getElementsByClassName(blockcheck)
    for(var k=0;k<x.length;k++)
    {
        x[k].classList.add("animate");
    }
}

    function getLocalItems() {
var a = (localStorage.getItem("value"));
var b = localStorage.getItem("id");
// console.log((a))
console.log("refreshed")
if (a) {
  var Lval = JSON.parse(localStorage.getItem("value"))
//   console.log(Lval);
  var Lid=JSON.parse(localStorage.getItem("id"));
//   console.log(Lid);
 for(var i=0;i<Lval.length;i++)
  {
    document.getElementById(Lid[i]).value=Lval[i];
  }

  }
  else
  {
    var Lval=[];
    var Lid=[];
  }
//   console.log("lval",Lval)
  }



getLocalItems();
function newGame()
{
    localStorage.clear();
    location.reload();
}
    function easysudoku()
    {
      // localStorage.clear();
      // location.reload();
    var change=document.getElementById("Easy");
    document.getElementById("Hard").removeAttribute("style");
    document.getElementById("Medium").removeAttribute("style");
    change.setAttribute("style", "background-color: #BBDEFB");
    board=[
       [0,7,9,0,0,0,0,6,2],
       [0,0,0,0,3,0,8,0,0],
       [6,8,0,0,0,9,0,0,0],
       [5,0,0,0,9,0,0,8,3],
       [0,0,0,0,5,2,6,0,1],
       [0,0,0,7,0,6,0,0,0],
       [0,0,2,1,0,3,0,0,0],
       [1,6,0,9,0,5,2,3,4],
       [7,5,3,8,0,4,9,0,6],
      ]
      for(i=0;i<9;i++)
      {
          for(j=0;j<9;j++)
          {
              const cellid=i*9+j+1
              if(board[i][j]===0)
              {
                  document.querySelector(`#cell-${cellid} input`).value=""
                  document.querySelector(`#cell-${cellid} input`).classList.remove("prefilled");
                  document.querySelector(`#cell-${cellid} input`).readOnly=false;
              }
              else{
                document.querySelector(`#cell-${cellid} input`).value=board[i][j]
                document.querySelector(`#cell-${cellid} input`).classList.add("prefilled");
                document.querySelector(`#cell-${cellid} input`).readOnly=true;
              }
          }
      }

    }

    function hardsudoku()
    {
      localStorage.clear();
      //location.reload();
    var change=document.getElementById("Hard");
    change.setAttribute("style", "background-color: #BBDEFB;"); 
    document.getElementById("Easy").removeAttribute("style");
    document.getElementById("Medium").removeAttribute("style");
    board=[
    ["8", "", "", "7", "3", "", "", "1", ""], ["", "", "5", "", "", "", "2", "", "6"], ["1", "4", "", "", "", "", "", "", ""], ["", "", "", "2", "", "7", "", "", ""], ["", "", "8", "9", "", "", "4", "", "3"], ["", "", "", "", "4", "", "", "", ""], ["", "", "6", "", "", "", "", "", ""], ["", "1", "", "4", "", "", "9", "", "8"], ["9", "7", "", "8", "", "", "", "6", ""],
      ]
      for(i=0;i<9;i++)
      {
          for(j=0;j<9;j++)
          {
              const cellid=i*9+j+1
              if(board[i][j]===0||board[i][j]=="")
              {
                  document.querySelector(`#cell-${cellid} input`).value=""
                  document.querySelector(`#cell-${cellid} input`).classList.remove("prefilled");
                  document.querySelector(`#cell-${cellid} input`).readOnly=false;
              }
              else{
                document.querySelector(`#cell-${cellid} input`).value=board[i][j]
                document.querySelector(`#cell-${cellid} input`).classList.add("prefilled");
                document.querySelector(`#cell-${cellid} input`).readOnly=true;
              }
          }
      }
    }

    function mediumsudoku()
    {
      localStorage.clear();
      // location.reload();
       document.getElementById("Hard").removeAttribute("style");
    document.getElementById("Easy").removeAttribute("style");
       var change=document.getElementById("Medium");
    change.setAttribute("style", "background-color: #BBDEFB");       
    board=[
    ["", "5", "", "", "", "", "4", "", ""], ["1", "6", "", "8", "", "", "7", "", "5"], ["4", "", "", "", "", "", "", "2", "6"], ["", "4", "9", "", "", "", "", "", ""], ["8", "", "5", "6", "", "", "", "", "1"], ["", "", "", "", "", "", "8", "7", ""], ["", "", "", "3", "9", "", "", "6", "4"], ["", "", "", "", "", "6", "", "1", ""], ["9", "", "", "", "2", "", "", "", ""]
      ]
      for(i=0;i<9;i++)
      {
          for(j=0;j<9;j++)
          {
              const cellid=i*9+j+1
              if(board[i][j]===0||board[i][j]=="")
              {
                  document.querySelector(`#cell-${cellid} input`).value=""
                  document.querySelector(`#cell-${cellid} input`).classList.remove("prefilled");
                  document.querySelector(`#cell-${cellid} input`).readOnly=false;
              }
              else{
                document.querySelector(`#cell-${cellid} input`).value=board[i][j]
                document.querySelector(`#cell-${cellid} input`).classList.add("prefilled");
                document.querySelector(`#cell-${cellid} input`).readOnly=true;
              }
          }
      }
    }

       function blocks(blocknumber){
        var variabl=[];
        var x=document.getElementsByClassName(blocknumber);
        for(var k=0;k<x.length;k++)
        {
             x[k].classList.remove("errorblock");
        }
        for(var k=0;k<x.length;k++)
        {
             variabl.push(x[k].value);
        }
        console.log(variabl);
      var flag1=0;
      var flag2=0;
      for(let i=0;i<variabl.length;i++)
      {  
        for(let j=i+1;j<variabl.length;j++)
        {
               if(variabl[i]===variabl[j]&&variabl[i]!="")
               {   
                var x=document.getElementsByClassName(`${blocknumber} class-${i}`);
                   x[0].classList.add("errorblock");
                   var y=document.getElementsByClassName(`${blocknumber} class-${j}`);
                   y[0].classList.add("errorblock");
                     flag1=1;
               }
            else{

            }
        }
        if(flag1==1)
      {
          return false;
      }
    }
        


       }

     function row(rownumber){
       const variables=[];
      const start=(rownumber-1)*9+1;
      const end=rownumber*9;
      for(let i=start;i<=end;i++)
      {
                     document.getElementById(i).classList.remove("errorrow")  
       }
      for(let i=start;i<=end;i++)
      {
             variables.push(document.getElementById(i).value);
      }
      var flag1=0;
      var flag2=0;
      for(let i=0;i<variables.length;i++)
      {  
        for(let j=i+1;j<variables.length;j++)
        {
               if(variables[i]===variables[j]&&variables[i]!="")
               {   
                     let a=start+i;
                     let b=start+j;
                     document.getElementById(`${a}`).classList.add("errorrow")  
                     document.getElementById(`${b}`).classList.add("errorrow")  
                     flag1=1;
               }
               if(variables[i]=="")
               {
                   flag2=1;
               }
        }
      }
      if(flag1==1||flag2==1)
      {
          return false;
      }
     }
     function column(columnnumber){
            const variab=[];
            const start=columnnumber;
            for(let i=start;i<=72+start;i+=9)
                    {
                     document.getElementById(i).classList.remove("errorcolumn")  
                    }    
            for(let i=start;i<=72+start;i+=9)
                    {
              variab.push(document.getElementById(i).value);
                    }
      var flag1=0;
      var flag2=0;
    for(let i=0;i<variab.length;i++)
      {
       for(let j=i+1;j<variab.length;j++)
        {
               if(variab[i]===variab[j]&&variab[i]!="")
               {   
                     let a=start+(9*i);
                     let b=start+(9*j);
                     document.getElementById(`${a}`).classList.add("errorcolumn")  
                     document.getElementById(`${b}`).classList.add("errorcolumn") 
                     flag1=1;
               }
               if(variab[i]=="")
               {
                   flag2=1;
               }
        }
      }
      if(flag1==1||flag2==1)
      {
          return false;
      }
     }

     function validaterows(){
         var a=[];
        for(let i=1;i<=9;i++)
        {
               a[i]=row(i);
        }
        for(var i=1;i<a.length;i++)
        {
            if(a[i]==false)
            {
                return false; 
                break;
            }
        }
     }     
     function validatecolumns(){
         var a=[]
         for(let i=1;i<=9;i++)
         {
                a[i]=column(i);
         }
         for(var i=1;i<a.length;i++)
        {
            if(a[i]==false)
            {
                return false; 
                break;
            }
        }
     }
     function validateblocks(){
        var a=[]
            for(let i=1;i<=9;i++)
            {
                a[i]=blocks(i);
            }
            for(var i=1;i<a.length;i++)
        {
            if(a[i]==false)
            {
                return false; 
                break;
            }
        }
     }

     function ValidationCheck(){
            var check1=validaterows()
            var check2=validatecolumns()
            var check3=validateblocks()
            if(check1!=false&&check2!=false&&check3!=false)
            {
              var winning=document.createElement("h1");
              winning.innerText="YOU WON!!!";
              winning.setAttribute("style","color:red");
                 var win=document.getElementById("game");
                 win.appendChild(winning);
            }
     }
     easysudoku();
     document.getElementById('Validate').addEventListener('click',ValidationCheck)
     document.getElementById('Easy').addEventListener('click',easysudoku)
     document.getElementById('Medium').addEventListener('click',mediumsudoku)
     document.getElementById('Hard').addEventListener('click',hardsudoku);
    

    function myLocal(id) 
    {
        if(localStorage.getItem("value"))
        {
             Lval = JSON.parse(localStorage.getItem("value"))
 Lid=JSON.parse(localStorage.getItem("id"));
      Lval.push(document.getElementById(id).value);
      Lid.push(id);
    //   console.log(Lval)
      localStorage.setItem("value", JSON.stringify(Lval))
      localStorage.setItem("id", JSON.stringify(Lid))
        }
        else{
            Lval=[];
            Lid=[];
            Lval.push(document.getElementById(id).value);
      Lid.push(id);
    //   console.log(Lval)
      localStorage.setItem("value", JSON.stringify(Lval))
      localStorage.setItem("id", JSON.stringify(Lid))
        }
    }