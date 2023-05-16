function dosomething(val){
    var k=val;
    console.log('hi')
    if(val>3){
        console.log('nice')
    }
    else if(val>0){
        console.log('awseom')
    }
    else{
        console.log('bakwas')
    }

    while(val>20){
        console.log('go')
        val-=5
    }
    for (var i=1;i<11;i++){
        console.log(i*k)
    }
    var m=['hello','hi','bye bye']
    for (i in m){
        console.log(i) // will print the index
    }
    var n= {price:30,qty:4}
    for (i in n){
        console.log(i)    
        // will give key names
    }
    console.log(5=='5')  //true
    console.log(5!='5')   //true

    console.log(5==='5')  //false
    console.log(5!=='5')  // true


    document.write('yeh to kuch naya hi aa gya')
   
}