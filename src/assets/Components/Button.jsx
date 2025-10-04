
import React from 'react'

export default function Button() {

// Clear the Images, if you Click the clear button in web page


        function clearimages(){
            for(let i = 1; i <= 4; i++){
                document.getElementById(`phoimg${i}`).src = "";
                document.getElementById(`fileinput${i}`).value = "";
            }
        }
   
// with empty image block triggerd the alert 
// after fill all images blocks if u click save downloade the images

        function savedow(){

            let inputs = [
                document.getElementById("fileinput1"),
                document.getElementById("fileinput2"),
                document.getElementById("fileinput3"),
                document.getElementById("fileinput4"),
            ];

            for (let i = 0; i < inputs.length; i++) {
                if (!inputs[i].files.length) {
                        alert("please uploade all four images");
                        return;
                        }
                    }
            const images = [
                    {id:"phoimg1", name:"phoimg1.jpg"},
                    {id:"phoimg2", name:"phoimg2.jpg"},
                    {id:"phoimg3", name:"phoimg3.jpg"},
                    {id:"phoimg4", name:"phoimg4.jpg"},
                ];

                images.forEach(img => {
                    const imageElement = document.getElementById(img.id);
                    if(imageElement && imageElement.src) {
                    
                    const link = document.createElement("a");
                    link.href = imageElement.src;
                    link.download = img.name;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    }
                });
            }


  return (
    <div className ='but my-20 flex justify-center'>
      <button id="clsbut" onClick={clearimages} className='px-6 py-2 m-5 bg-blue-400 text-white rounded-lg hover:bg-green-200 hover:text-red-400'> Clear </button>
      <button id="savebut" onClick={savedow} className='px-6 py-2 m-5 bg-green-300 text-black rounded-lg hover:bg-green-200 hover:text-red-400'> Save </button>
      {/* if need some style use this code in a className : transition duration-1000 ease-in-out transform hover:scale-110 */}
    </div>
  );
};

