// import React, { useEffect } from 'react';
// import $ from 'jquery';

// function GhostEyes() {

//     useEffect(() => {
//         const pageX = $(document).width();
//         const pageY = $(document).height();
//         let mouseY = 0;
//         let mouseX = 0;

//         $(document).mousemove(function (event) {
//             //verticalAxis
//             mouseY = event.pageY;
//             const yAxis = ((pageY / 2 - mouseY) / pageY) * 300;
//             //horizontalAxis
//             mouseX = event.pageX / -pageX;
//             const xAxis = -mouseX * 100 - 100;

//             $(".box__ghost-eyes").css({
//                 transform: "translate(" + xAxis + "%,-" + yAxis + "%)"
//             });

//             //console.log('X: ' + xAxis);
//         });
//     }, []);

//     return (
//         <div className="box__ghost-eyes">
//             {/* Add your HTML code here for the ghost eyes */}
//         </div>
//     );
// }

// export default GhostEyes;
