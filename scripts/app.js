// //Beginning

// //Global Variables


const hardware = [    
    'heatsink', 
    'graphic processing unit', 
    'monitor', 
    'keyboard', 
    'case', 
    'mouse', 
    'power supply unit', 
    'cooler', 
    'RAM', 
    'drive', 
    'processor', 
    'motherboard'
    ];
    console.log(hardware);
    
    const questions = [
        "what is item 1?",
        "what is item 2?",
        "what is item 3?",
        "what is item 4?",
        "what is item 5?",
        "what is item 6?",
        "what is item 7?",
        "what is item 8?",
        "what is item 9?",
        "what is item 10?",
        "what is item 11?",
        "what is item 12?",
    
    ]
  
    
    
    const texts = document.querySelectorAll('.text');
    
    let score = 0;
    let count = 0;
  
    
    
    const btn = document.querySelector('#btn');
    
 //Event Listener   
    
    btn.addEventListener('click', restart);
    
  
    //Functions
    function restart(){
      window.location.reload();
  
    }
  
    function hell(data){
        
        for(let i = 0; i < hardware.length;i++)
        {
            
            if(data-1==i)
            {
                console.log(questions[i]);
                console.log(hardware[i]);
                const temp = prompt(questions[i]);
                if(temp.toLowerCase()==hardware[i].toLowerCase())
                {
                  
                    document.getElementById("item" + data).style.display = 'none';
                    alert("Correct")
                    count++;
                    score++;
                    console.log(count);
                }
                else{
                    alert("wrong")
                    document.getElementById("item" + data).style.display = 'none';
                    count++;
                    
                }
  
            }
            console.log(score);
        }
        if(count > hardware.length-1)
        {
            if(score>8)
            {
                alert(`YOU GOT ${score}out of ${hardware.length-1} CORRECT`);
                alert("You WIN!!");
            }
            else{
              alert(`YOU GOT ${score}  out of ${hardware.length-1} CORRECT`);
              alert("YOU LOSE!!!!!!")
              window.location.reload();
            }
        }
    }





    //Attempts at using more efficient and advanced techniques for javascript


    //These steps were helpful but difficult to add to my MVP but kept on to make updates and advancements in the future. 


    // ==== Image Object ==== //

// const compImgs = {
//     row1: [
//         {
//             url: "https://www.corsair.com/medias/sys_master/images/images/h5f/h10/9109819457566/-CAFA70-Gallery-a70-01.png",
//             name: "heatsink",
//             isVisible: false,
//         },
//         {
//             url: "https://images.evga.com/products/gallery/png/10G-P5-3895-KR_LG_1.png",
//             name: "graphics card",
//             isVisible: false,
//         },
//         {
//             url: "https://www.corsair.com/medias/sys_master/images/images/h9a/h1f/9112563056670/-CH-9109012-NA-Gallery-K70-RGB-MK2-01.png",
//             name: "keyboard",
//             isVisible: false,
//         },
//         {
//             url: "https://www.corsair.com/us/en/medias/sys_master/images/images/h45/h02/9582812561438/base-4000d-config/Gallery/4000D_BLACK_01/-base-4000d-config-Gallery-4000D-BLACK-01.png_1200Wx1200H",
//             name: "case",
//             isVisible: false,
//         },
//         // {
//         //     url: "hidden",
//         //     name: "hidden",
//         //     isVisible: true,
//         // },
//     ],
//     row2: [
//         {
//             url: "https://www.corsair.com/medias/sys_master/images/images/h33/h98/9123773874206/-CH-9309011-NA-Gallery-M65-RGB-ELITE-BLK-01.png",
//             name: "mouse",
//             isVisible: false,
//         },        
//         {
//             url: "https://www.corsair.com/us/en/medias/sys_master/images/images/hd3/h25/9562601717790/base-cxf-rgb-blk-psu-2020-config/Gallery/CX750F_RGB_BLACK_01/-base-cxf-rgb-blk-psu-2020-config-Gallery-CX750F-RGB-BLACK-01.png_1200Wx1200H",
//             name: "power supply unit",
//             isVisible: false,
//         },        
//         {
//             url: "https://www.corsair.com/us/en/medias/sys_master/images/images/hd4/h6e/9582790082590/base-icue-elite-cooler-config/Gallery/H100i_ELITE_CAPELLIX_01/-base-icue-elite-cooler-config-Gallery-H100i-ELITE-CAPELLIX-01.png_1200Wx1200H",
//             name: "cooler",
//             isVisible: false,
//         },        
//         {
//             url: "https://www.corsair.com/us/en/medias/sys_master/images/images/h3d/h81/9568425312286/CMT32GX4M2Z3600C18/Gallery/DOMINATOR_PLAT_RGB_01/-CMT32GX4M2Z3600C18-Gallery-DOMINATOR-PLAT-RGB-01.png_1200Wx1200H",
//             name: "RAM",
//             isVisible: false,
//         },
//         // {
//         //     url: "hidden",
//         //     name: "hidden",
//         //     isVisible: true,
//         // },        
//     ],
//     row3: [
//         {
//             url: "https://static.acer.com/up/Resource/Acer/Monitors/R0/Images/20150617/R220HQ_sku_main.png",
//             name: "monitor",
//             isVisible: false,
//         },
//         {
//             url: "https://www.nicepng.com/png/full/980-9804637_2200-pcie-nvme-ssd-micron-2200.png",
//             name: "drive",
//             isVisible: false,
//         },
//         {
//             url: "http://pngimg.com/uploads/cpu/cpu_PNG7.png",
//             name: "porcessor",
//             isVisible: false,
//         },
//         {
//             url: "https://www.pngkey.com/png/full/229-2297997_asus-lanza-la-placa-base-z97-pro-gamer.png",
//             name: "motherboard",
//             isVisible: false,
//         },
//         // {
//         //     url: "hidden",
//         //     name: "hidden",
//         //     isVisible: true,
//         // },
//     ],
// };

// // ==== Variables ==== //

// const $imageRows = $('#image-rows');

// // ==== Functions ==== // 

// const printRows = (data) => {
//     for(key in data) {
//         $imageRows.append(`
//         <div class="row" id="image-${key}">
//             <h4>${key.toUpperCase()}</h4>
//             <hr/>
//         <div class="images">
//             ${printImgs(data[key])}
//         </div>    
//         </div>    
//         `)
//     }
// }

// const printImgs = (images) => {
//     console.log(images);
//     return images.map(image => `
//         <div class="image">
//             <section class="image-image">
//             <img src=${image.url} alt=${image.name} />
//             </section>
//         </div>
//     `).join("");
// }

// printRows(compImgs);

// // function displayCompImgs() {
// //     for(const i in compImgs) {
// //         console.log(`the index is: ${[i].url}`)
// //         console.log(`${i[url]}`)
//         // Object.entries(compImgs[image].url).forEach(([image, value]) => {
//         //     console.log(`the image is: ${image} and the value is: ${value}`)
//         // })
// //     };
// // }
    
    
// // displayCompImgs();

// ///CSS for attempted advancements. 
// *, *::after, *::before {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   align-content: center;
// }

// /*  OLD CODE
// body {
//     min-height: 100vh;
//     background-color: black;
//     color: aliceblue;
//      change font! 
// }

// .image-container {
//     width: 80%;
//     display: flex;
// }
 
// .image-rows {
//     height: 300px;
//     width: 200px; 
//     margin: 30px;
//     position: relative;
//     color: white;
//     box-shadow: -2px 10px 10px 9px rgba(0, 0, 0, 0.082);
//     cursor: pointer;
//     transition: .2s linear;
//     font-weight: bold;
//     opacity: 0.8;
// } */

// /* .image-image {
//     width: 100px;
// }  */


// body {
//     min-height: 100vh;
//     background-color: black;
//     color: aliceblue;
//     align-content: center;
//     /* change font! */
// }

// img {
//     width: 300px;
//     height: 300px;
// }

// #image-rows {
//     display: flex;
// }

// //Potential HTML for updated code
// <div class="image-container">

// <h2 id="game-title">Test Your Knowledge</h2>

// <div id="image-rows">

//     <!-- Images should appear here... hopefully -->