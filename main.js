document.addEventListener("DOMContentLoaded",()=>{
    const list=["Sourav Ghosh...","a Software Engineer...","a Frontend Developer...","a Gardener..."];
    let element = document.getElementById("typeWriterEffect");
    let index=0;//use for list index
    let el_index=0;//use for element index
    let write_t=200;
    let erase_t=150;

    let writing =()=>{
        if(index===0){
            write_t=350;
        }
        else{
            write_t = 200;
        }
        if(el_index<list[index].length){
            element.textContent += list[index].charAt(el_index);
            el_index+=1;
            setTimeout(()=>{
                writing();
            },write_t);
        }
        else{
            el_index -= 1;
            erasing();
        }
    }
    let erasing=()=>{
        if(index===0){
            erase_t=200
        }
        else{
            erase_t=150
        }
        if(el_index>-1){
            let temp="";
            for(let i=0;i<el_index;i++){
                temp +=list[index].charAt(i);
            }
            element.textContent=temp;
            el_index -= 1;
            setTimeout(()=>{
                erasing();
            },erase_t);
        }
        else{
            el_index=0;
            index=(index+1)%list.length;
            writing();
        }
    }
    writing();
})