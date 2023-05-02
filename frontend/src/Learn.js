import React from 'react';

function  Learn() {

  return (
    <body>
   
    <div class="grid-container"> 
        <side2>
            <div class="conversation">
            <div class="conv"> <h1>Conversations</h1>
                <a href=""><button>Guide</button></a>
                </div>
               <div class="convbutton2"> <a href=""><button>+ NEW PROMPT</button></a></div>
            </div>
            <div class="convbutton3">  <input type="text" ></input><p style={{fontSize:'19px',fontweight:'400',color: '#666666', marginTop: '-50px', position: 'absolute', marginLeft: '40px'}}>Search</p> <i  style={{color:'#FFFFFF',marginTop: '30px', position: 'absolute', marginLeft: '-30px'}}class="fa-solid fa-magnifying-glass"></i>
            </div>
            
            <div class="discover">
          

                <p>  Learn :</p>
                <h1>need some help with prompts?<br></br> try these. </h1>
               
            </div>
            <ul class="convo">
                {/* <!-- the icons are for the dots on the list --> */}
                <i class="fa-solid fa-circle" style={ {position:' absolute', marginTop: '17px', marginRight: '23px', fontSize: '9px',color: '#0B9268'}}></i> <li>how does Onli work</li> 



                <i class="fa-solid fa-circle" style={{position: 'absolute',marginTop: '17px',marginRight: '23px', fontSize: '9px', color: '#666666'}}></i><li>what is the data structure</li>
                <i class="fa-solid fa-circle" style={{position: 'absolute',marginTop: '17px',marginRight: '23px', fontSize: '9px', color: '#666666'}}></i><li>how do I change owner of an asset</li>  


                <i class="fa-solid fa-circle" style={{position: 'absolute',marginTop: '17px',marginRight: '23px', fontSize: '9px', color: '#666666'}}></i><li>how do I build an appliance</li>  
                <i class="fa-solid fa-circle" style={{position: 'absolute',marginTop: '17px',marginRight: '23px', fontSize: '9px', color: '#666666'}}></i> <li>how do I register an appliance</li>  
                <i class="fa-solid fa-circle" style={{position: 'absolute',marginTop: '17px',marginRight: '23px', fontSize: '9px', color: '#666666'}}></i> <li>how do I get a vault</li>  
                <i class="fa-solid fa-circle" style={{position: 'absolute',marginTop: '17px',marginRight: '23px', fontSize: '9px', color: '#666666'}}></i> <li>what is an Owner’s gene </li>  
                <i class="fa-solid fa-circle" style={{position: 'absolute',marginTop: '17px',marginRight: '23px', fontSize: '9px', color: '#666666'}}></i><li>can I move assets between vaults</li>  
                <i class="fa-solid fa-circle" style={{position: 'absolute',marginTop: '17px',marginRight: '23px', fontSize: '9px', color: '#666666'}}></i> <li>what are some core concepts of Onli Cloud I need to understand</li>  
            </ul>
            <a href='/Settings'> <i class="fa-solid fa-gear" style={{fontSize:'30px', marginLeft:'45px',marginTop:'50px', color: '#666666'}}></i><p style={{marginLeft:'83px' ,color: '#666666',marginTop:'-25px',position:'absolute'}}>Settings</p></a>
        </side2>
 {/* <!-- ABOVE IS FOR THE SIDE BAR --> */}
 
    <side1>
     <div class="heading1" > <p>Smplyr Onli.ai</p>
        <h1>I am Smplyr an AI that makes Onli simpler</h1>
      </div>
     <div class="beginbody">
        <div class="heading2">
          <a href="/" >  <p>
            DISCOVER
        </p></a>
            <h1>
                Onli is a better way<br></br> to store something of <br></br>value called an asset,<br></br> move it around <br></br>digitally, and keep it<br></br> safe. <br></br>
                <br></br><br></br>
    
                Would you like to know more?
            </h1>
          </div>
          <div class="heading2">
            <a href="Learn" > <p  style={{color: 'white'}}>
                LEARN
            </p></a>
            <h1>
                Onli has no ledger & <br></br> no keys. This is<br></br> different from the <br></br> ground up. I am <br></br>Smplyr an AI that<br></br> makes Onli simpler.<br></br><br></br><br></br> 
    
                Would you like to know more?
            </h1>
          </div>
          <div class="heading2">
            <a href="/play" > <p>
                PLAY
            </p></a>
            <h1>
                I am Smplyr an AI that<br></br>  makes Onli simpler.<br></br>  Sometimes the best <br></br> way to learn <br></br> something new is to<br></br>  take it out for a spin. <br></br> 
                <br></br> <br></br> 
    
                Would you like to know more?
            </h1>
          </div>
     </div>
     <div class="buttonset1">
        <button id="b1">Prompts: About Onli <i  class="fa-solid fa-caret-up" style={{marginLeft: '60px',position: 'absolute'}}></i> <i  class="fa-solid fa-caret-down" style={{marginLeft: '60px',position: 'absolute',marginTop: '5px'}}></i><div class="drop" style={{position: 'absolute',padding: '10px 10px',backgroundColor:'#1D1D1D',color:'#666666', marginLeft: '30px', display: 'none'}} name="" id="drp1">
            {/* <!-- dropdown on the button --> */}
            <a href=""><option value="" style={{color: '#424242'}}>What is Onli ?</option></a>
            <a href=""><option value=""style={{color: '#424242'}}>How do I use Onli?</option></a>
            <a href=""><option value="" style={{color: '#424242'}}>Why do I need Onli?</option></a>
            <a href=""><option value=""style={{color: '#424242'}}>How Does it Work??</option></a>
           
           
           </div></button>
         
    
    
           <button id="b2">Prompts: About Products  <i class="fa-solid fa-caret-up" style={{marginLeft: '40px', position: 'absolute'}}></i> <i class="fa-solid fa-caret-down" style={{marginLeft: '40px', position: 'absolute', marginTop: '5px'}}></i><div class="drop" style={{position: 'absolute', padding: '10px 10px',backgroundColor:'#1D1D1D',color:'#666666',display: 'none'}}name="" id="drp2">
           {/* <!-- dropdown on the button --> */}
            <a href=""><option value="" style={{color: '#424242'}}>What products does Onli Make?</option></a>
            <a href=""><option value="" style={{color: '#424242'}}>What is Onli Cloud?</option></a>
            <a href=""><option value="" style={{color: '#424242'}}>What is Onli You?</option></a>
            <a href=""><option value="" style={{color: '#424242'}}>What is Onli Build?</option></a>
           </div></button>
    
    
           
           <button id="b3" >Prompts: How to  <i  class="fa-solid fa-caret-up" style={{marginLeft: '60px',position: 'absolute'}}></i> <i  class="fa-solid fa-caret-down" style={{marginLeft: '60px',position: 'absolute', marginTop:'5px'}}></i><div class="drop" style={{position: 'absolute',backgroundColor:'#1D1D1D',color:'#666666', marginLeft: '-9px', padding: '10px 10px', display:'none'}} name="" id="drp3">
            {/* <!-- dropdown on the button --> */}
            <a href=""><option value="" style={{color: '#424242'}}>What are some Use Cases for Onli?</option></a>
            <a href=""><option value="" style={{color: '#424242'}}>Where do I start ?</option></a>
            <a href=""><option value=""style={{color: '#424242'}}>How do Issue Assets?</option></a>
            <a href=""><option value="" style={{color:'#424242'}}>How do I become an Owner?</option></a>
           </div></button>
         
          
         <button id="b4">Prompts: Sandbox  <i  class="fa-solid fa-caret-up" style={{marginLeft: '60px',position: 'absolute'}}></i> <i class="fa-solid fa-caret-down" style={{marginLeft: '60px',position: 'absolute', marginTop: '5px'}}></i> <div class="drop" style={{padding: '10px 10px',backgroundColor:'#1D1D1D',color:'#666666',position:'absolute',marginLeft:'5px', display:'none',}}name="" id="drp4">
           {/* <!-- dropdown on the button --> */}
            <a href=""><option value=""style={{color: '#424242'}}>Show me code for Ask to Move</option></a>
            <a href=""><option value="" style={{color: '#424242'}}>Show me code for </option></a>
            <a href=""><option value="" style={{color: '#424242'}}>Show me code for </option></a>
            <a href=""><option value="" style={{color: '#424242'}}>Show me code for </option></a>
           </div></button>
       </div>
       <div class="askmeanyquestion"><button>Ask me a Question ? Need Help try the menus’s Above. </button></div>
    </side1>
    </div>
    
</body>
  );
}

export default Learn;
