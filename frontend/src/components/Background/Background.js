import Triangulr from 'triangulr';
import React , {useRef, useEffect} from "react";
import './Background.css'



const Background = (props) => {
    const triangleContainer = useRef(null)

    var colorRender = function (path) {
        var random = 32;
        var ratio = (path.x + path.y) / (path.cols + path.lines);
        var code = Math.floor(255 - (ratio * (255-random)) - Math.random()*random).toString(16);
    
        return '#' + code + '1092';
      };


      
    useEffect(() => {    
        var svg = new Triangulr (window.innerWidth, window.innerHeight * 1.2, 100, 50, colorRender);    
        triangleContainer.current.appendChild(svg);  
      }, []);

 
    return (
        <>
           <div  ref={triangleContainer} id="triangle_background"  style={{background: `linear-gradient(90deg, #C71092 0%, #4A1092 100%)`}}> {props.children}</div>
        </>
    )
}

export default Background;


/*
var colorRender = function (path) {
    var random = 32;
    var ratio = (path.x + path.y) / (path.cols + path.lines);
    var code = Math.floor(255 - (ratio * (255-random)) - Math.random()*random).toString(16);

    return '#' + code + '1092';
  };
  
*/
