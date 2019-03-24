function printOutput(num){
    if(num!=''){
        num=getFormatted(num)
    }
    document.getElementById("out-val").innerText=num
}
function printHistory(num){
    document.getElementById("hist-val").innerText=num
}
function getOutput(){
    return document.getElementById("out-val").innerText
}
function getHistory(num){
    return document.getElementById("hist-val").innerText
}
function getFormatted(num){
    if(num!=''){
        num=Number(num)
        return num.toLocaleString("en")
    }
    return num
}
function getUnformatted(num){
    if(num=='')
        return num
    return num.replace(/,/g,'')
}
var operators=document.getElementsByClassName("operator")
for(let i=0;i<operators.length;i++){
    operators[i].onclick=function(event){
        console.log(event)
        if(this.id=='='){
            let result=''
            if(getHistory()!='' && getOutput()==''){
                result=getHistory()
                result=result.substr(0,result.length-1)
            }
            else{
                result=( getHistory()+getUnformatted(getOutput()) )
            }
            printOutput(eval(result))
            printHistory('')
        }
        else if(this.id=='clear'){
            printHistory('')
            printOutput('')
        }
        else if(this.id=='backspace'){
            if(getOutput()!=''){
                let str=getUnformatted(getOutput())
                printOutput(str.substr(0,str.length-1))
            }
        }
        else{
            if(getOutput()=='' && getHistory()==''){
                printHistory(0+this.id)
            }
            else if(getOutput()=='' && getHistory()!=''){
                let str=getHistory()
                str=str.substr(0,str.length-1)+this.id
                printHistory(str)
            }
            else{
                printHistory(getHistory()+getOutput()+this.id)
                printOutput('')
            }
        }
    }
}
var numbers=document.getElementsByClassName("number")
for(let i=0;i<numbers.length;i++){
    var output=""
    numbers[i].onclick=function(){
        if(this.id!=NaN){
            output=(getUnformatted(getOutput())+this.id)
            printOutput(output)
        }
    }
}
