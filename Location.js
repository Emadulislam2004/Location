// const Location  = function(){

//     this.findLocation = function () {

//     


//         let result = function(){

//         }


//         console.log(`



        
//         `)
        
//     }

//    }
// }


const Location = function (){

    this.findLocation = function() {

        studentData.map((data , index) =>{

            let result = () =>{

                return`
            
                ID          :${ index + 1 }
                Name        :${data.name}
                Location    :${data.location}
                
            
            
                showing ${ index + 1 } out of ${studentData.length} 
                `
            }

            if(data.location == "Mirpur" || data.location == "Banani"){
                console.log(`
            ================================
                ${result()}
            ================================

                `)
            }


        }) 
    }
}


