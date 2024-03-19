function createRectangle(len,bre){
  
        this.length1=len,
        this.bredth=bre,
        this.draw=function(){
            console.log("Hii This is the function");
        }
    
}
const srcf =new createRectangle(7,7);
console.log(srcf)