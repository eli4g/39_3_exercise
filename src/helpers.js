

function choice(items){

    const arrayLength = items.length;


    const randomItem = Math.floor(Math.random() * arrayLength );



    return items[randomItem];




}


function remove(items, item){

    console.log("outside loop");

    for (var i = 0; i < items.length; i++) {
    

        
            
        if (items[i] === item){

         
            
            items.splice(i,1)
            return items;
        }



    }

    return undefined;

}


export {choice, remove};