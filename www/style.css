
body{
    background-color: black;
    overflow-y: hidden;
    overflow-x: hidden;
}

.square{
    position: relative;
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.square span:nth-child(1){
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(#6b72ff00 50%, #000dff3b 40%);
    box-shadow: 0 0 50px rgb(25, 0, 255), inset 0 0 50px rgb(25, 0, 255);
    border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
    transition: 0.5s;
    animation: animate1 6s linear infinite;
}

.square span:nth-child(2){
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(#6b72ff00 50%, #000dff3b 40%);
    box-shadow: 0 0 50px rgb(25, 0, 255), inset 0 0 50px rgb(25, 0, 255);
    border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
    transition: 0.5s;
    animation: animate2 4s linear infinite;
}

.square span:nth-child(3){
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(#6b72ff00 50%, #000dff3b 40%);
    box-shadow: 0 0 50px rgb(25, 0, 255), inset 0 0 50px rgb(25, 0, 255);
    border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
    transition: 0.5s;
    animation: animate3 8s linear infinite;
}

@keyframes animate1 {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
@keyframes animate2 {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
@keyframes animate3 {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}


/* Input Filed Start*/

#TextInput {
    background-color: #181818a8;
    border-color: blue;
    box-shadow: 0 0 20px rgb(25, 0, 255),
      inset 0 0 0px rgb(25, 0, 255);
    border-radius: 8px;
    color: white;
    padding: 3px 0px 3px 20px;
    margin: 0px 20%;
  }
  
  .input-field {
    background-color: transparent;
    border: none;
    width: 95%;
    outline: none;
    color: white;
    font-family: cursive;
  }
  
  
  .glow-on-hover {
    width: 35px;
    height: 35px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    padding: 0px;
    margin-left: 10px;
  }
  
  .glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
  }
  
  .glow-on-hover:active {
    color: #181818a8
  }
  
  .glow-on-hover:active:after {
    background: transparent;
  }
  
  .glow-on-hover:hover:before {
    opacity: 1;
  }
  
  .glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
  
    50% {
      background-position: 400% 0;
    }
  
    100% {
      background-position: 0 0;
    }
  }
  
  
  /* Input Filed End*/

  /* Chat Box Start */

.chat-canvas{
  background-color: #191919
}

.receiver_message{
  padding: 8px;
  border: 2px solid cyan;
  border-radius: 0px 15px 15px 20px;
  width: auto;
  color: white;
  background-color: #0dcaf014;
}

.sender_message{
  padding: 8px;
  border: 1px solid #0045ff;
  border-radius: 15px 15px 0px 20px;
  width: auto;
  color: white;
  background-color: #0045ff;
}
.width-size{
  max-width: 80%;
  width: auto;
}
/* Chat Box Start End*/

.svg-frame {
  position: relative;
  width: 455px;
  height: 455px;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: change-view 2s ease-in infinite;
}

@keyframes change-view {

  0%,
  50% {
    transform: rotate(-0deg) skew(00deg) translateX(calc(0 * var(--i))) translateY(calc(-0px * var(--i)));
  }

  70%,
  100% {
    transform: rotate(-80deg) skew(30deg) translateX(calc(45px * var(--i))) translateY(calc(-35px * var(--i)));
  }
}

svg {
  position: absolute;
  transition: 0.5s;
  transform-origin: center;
  width: 450px;
  height: 450px;
  fill: none;
  animation: change-view 5s ease-in-out infinite alternate;
  filter: drop-shadow(0 0 12px #00aaff);
}

#big-centro,
#outter1,
#solo-lines,
#center,
#outter-center,
#bottom-dots,
#center-lines,
#squares,
#top-dots {
  transform-origin: center;
  animation: rotate 4s ease-in-out infinite alternate;
}

#big-centro {
  animation-delay: -1.5s;
}

#outter1 {
  animation-delay: -1.2s;
}

#center {
  animation-delay: -2.2s;
}

#bottom-dots,
#top-dots {
  animation-duration: 7s;
}

#center-lines,
#outter-center {
  animation-duration: 6s;
  animation-delay: -3s;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
