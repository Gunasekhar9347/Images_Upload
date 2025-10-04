import React from 'react'

export default function ImgUpload() {
        
    function upimg(){
            let propic1 = document.getElementById("phoimg1");
            let inppic1 = document.getElementById("fileinput1");

            inppic1.onchange = function(e){
            e.preventDefault()
            propic1.src = URL.createObjectURL(inppic1.files[0]);
        }
    }

    function upimg2(){
            let propic2 = document.getElementById("phoimg2");
            let inppic2 = document.getElementById("fileinput2");

            inppic2.onchange = function(e){
            e.preventDefault()
            propic2.src = URL.createObjectURL(inppic2.files[0]);
        }
    }

    function upimg3(){
            let propic3 = document.getElementById("phoimg3");
            let inppic3 = document.getElementById("fileinput3");

            inppic3.onchange = function(e){
            e.preventDefault()
            propic3.src = URL.createObjectURL(inppic3.files[0]);
        }
    }

    function upimg4(){
            let propic4 = document.getElementById("phoimg4");
            let inppic4 = document.getElementById("fileinput4");

            inppic4.onchange = function(e){
            e.preventDefault()
            propic4.src = URL.createObjectURL(inppic4.files[0]);

        }
    }

// Clear the Images, if you Click the clear button in web page
    
        // function showPreview(event, imgId){
        //     const file = event.traget.files[0];
        //     if(file){
        //         const reader = new FileReader();
        //         reader.onload = e => {
        //             document.getElementById(imgId).src = e.traget.result;
        //         };
        //         reader.readAsDataURL(file);
        //     }
        // }

        // function clearimages(){
        //     for(let i = 1; i <= 4; i++){
        //         document.getElementById(`phoimg${i}`).src = "";
        //         document.getElementById(`fileinput${i}`).value = "";
        //     }
        // }

// with empty image block triggerd the alert 
// after fill all images blocks if u click save downloade the images

    // function savedow(){

    //         let inputs = [
    //             document.getElementById("fileinput1"),
    //             document.getElementById("fileinput2"),
    //             document.getElementById("fileinput3"),
    //             document.getElementById("fileinput4"),
    //         ];

    //         for (let i = 0; i < inputs.length; i++) {
    //             if (!inputs[i].files.length) {
    //                     alert("please uploade all four images");
    //                     return;
    //                     }
    //                 }
    //              const images = [
    //                 {id:"phoimg1", name:"phoimg1.jpg"},
    //                 {id:"phoimg2", name:"phoimg2.jpg"},
    //                 {id:"phoimg3", name:"phoimg3.jpg"},
    //                 {id:"phoimg4", name:"phoimg4.jpg"},
    //             ];

    //             images.forEach(img => {
    //                 const imageElement = document.getElementById(img.id);
    //                 if(imageElement && imageElement.src) {
                    
    //                 const link = document.createElement("a");
    //                 link.href = imageElement.src;
    //                 link.download = img.name;
    //                 document.body.appendChild(link);
    //                 link.click();
    //                 document.body.removeChild(link);

    //                 }
    //             });
    //         }

  

  return (
     <div className='grid grid-cols-1 text-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4'>

        <div className='h-[351.5px] w-[301.5px]'>
            <img src="" className='firstimg' id="phoimg1"/>
            <label htmlFor="fileinput1" onClick={upimg}>Update Image</label>
            <input type="file" accept="image/jpg, image/jpeg, image/png" id="fileinput1" /> 
        {/* onChange={(e) => showPreview(e, "phoimg1")} */}
        </div>

        <div className=' h-[351.5px] w-[301.5px]'>
            <img src="" className='secimg' id="phoimg2" />
            <label htmlFor="fileinput2" onClick={upimg2}>Update Image</label>
            <input type="file" accept="image/jpg, image/jpeg, image/png" id="fileinput2" />
            {/* onChange={(e) => showPreview(e, "phoimg2")} */}
        </div>

        <div className=' h-[351.5px] w-[301.5px]'>
            <img src="" className='thirdimg' id="phoimg3" />
            <label htmlFor="fileinput3" onClick={upimg3}>Update Image</label>
            <input type="file" accept="image/jpg, image/jpeg, image/png" id="fileinput3" />
            {/* onChange={(e) => showPreview(e, "phoimg3")} */}
        </div>

        <div className=' h-[351.5px] w-[301.5px]'>
            <img src="" className='fourimg' id="phoimg4"/>
            <label htmlFor="fileinput4" onClick={upimg4}>Update Image</label> 
            <input type="file" accept="image/jpg, image/jpeg, image/png" id="fileinput4"  /> 
            {/* onChange={(e) => showPreview(e, "phoimg4")}  */}
        </div>

        {/* <div className='h-[100px] w-[1370px] mt-[20px] flex justify-center m-auto'>
            <button  onClick={clearimages} className='px-6 py-2 m-7 bg-blue-400 text-white rounded-lg hover:bg-red-400 hover:text-black'>Clear</button>
            <button onClick={savedow} className='px-6 py-2 m-7 bg-green-300 text-black rounded-lg hover:bg-green-200 hover:text-red-400'> Save </button>
        </div> */}
        
      </div>
      
  )
}

        