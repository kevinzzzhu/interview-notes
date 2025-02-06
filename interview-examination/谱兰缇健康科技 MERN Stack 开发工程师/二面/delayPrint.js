var list = [1, 2, 3]
var start = Date.now()

// function delayPrint(list){
//     var num = 0
//     delay(list, num)
// }

// function delay(list, num){
//     if (num >= list.length) return
//     setTimeout(() => {
            
//         console.log(list[num], Date.now()-start);
//         num += 1;
//         delay(list, num)
    
//     }, list[num]*1000);
// }

function delay(list, num){
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(list[num-1]);
        }, num*1000);
      });
}

async function delayPrint(){
    var num = 0;
    while (num < list.length){
        result = await delay(list, list[num])
        console.log(result, Date.now()-start)
        num += 1
    }
}

delayPrint(list)