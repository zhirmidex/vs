function Settings (){
    return(
        <body>
    <div class="grid-container"> 
        <side2>
            <div class="conversation">
            <div class="conv"> <h1>Conversations</h1>
                <a href=""><button>Guide</button></a>
                </div>
               <div class="convbutton2"> <a href=""><button>+ NEW PROMPT</button></a></div>
            </div>
            {/* <!-- the conversation list --> */}
            <div class="Treasury">
                <div class="uu">
                    <div class="trealinet"></div>
                    <p style={{color: '#791616'}}>Treasurer</p>
                    <div class="trealine"></div>
                    <p>Settings</p>

                    <i   class="fa-solid fa-chevron-right" style={{color: 'white', position: 'absolute', marginLeft: '300px', marginTop: '-58px', fontSize: '12px'}}></i>
                    <div class="trealine"></div>
                    <p>Treasury</p>
                    <i   class="fa-solid fa-chevron-right"style={{color: 'white', position: 'absolute', marginLeft: '300px', marginTop: '-58px', fontSize: '12px'}}></i>
                    <div class="trealine"></div>
                    <p>Payment Gateway</p>
                    <i id="down" class="fa-solid fa-chevron-down"style={{color: 'white', position: 'absolute', marginLeft: '300px', marginTop: '-58px', fontSize: '12px',display:'none'}}></i>
                <i id="side"  class="fa-solid fa-chevron-right"style={{color: 'white', position: 'absolute', marginLeft: '300px', marginTop: '-58px', fontSize: '12px'}}></i>
                    <div class="trealine"></div>
                

                {/* <!-- for the payment dropdown --> */}
                
               <div id="dropdown1" style={{display: 'none'}}>
                <div class="PAYMENTGATEWAY"><p style={{marginLeft: '56PX'}}>Payment Gateway </p>
                    <div class="form-check">
                        <input  style={{marginTop: '10PX', height: '15px', width: '16PX'}} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label style={{fontSize: '12PX', fontWeight: '400'}} class="form-check-label" for="flexRadioDefault1"/>
                         ON
                        
                      </div>
                      <div class="form-check">
                        <input style={{marginTop: '10PX', height: '15px', width: '16PX'}} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                        <label style={{fontSize: '12PX', fontWeight: '400'}}class="form-check-label" for="flexRadioDefault2"/>
                         OFF
                      
                      </div>
                </div>
             <div class="buttonpays">   <div class="buttonpay">
                <h1 style={{ marginTop: '21px',fontSize: '10px',fontWeight:'400', color: '#424242'}}>Payment Gateway</h1>

                <select id="PRIMETRUST">
                    <option value="">PRIMETRUST</option>
                    <option value="">PRIMETRUST</option>
                    <option value="">PRIMETRUST</option>
                    <option value="">PRIMETRUST</option>
                  </select>
            </div>
            <div class="buttonpay1">
                <h1  style={{ marginTop: '21px',fontSize: '10px',fontWeight:'400', color: '#424242'}}>APIKEY</h1>
                <input type="text"></input>
            </div>
            <div class="buttonpay2">
                <h1  style={{ marginTop: '21px',fontSize: '10px',fontWeight:'400', color: '#424242'}}>Payment Gateway</h1>
                <input type="text"></input>
            </div></div>

               </div>
               {/* <!-- dropdown ends here --> */}
           
                <p >Issue  Direct</p>
                <div class="trealine"></div>
                <i   class="fa-solid fa-chevron-right" style={{color: 'white', position: 'absolute', marginLeft: '300px', marginTop: '-58px', fontSize: '12px'}}></i>
            </div>
        </div>
        </side2>
 {/* <!-- the main page starts here --> */}
    <side1>
     <div class="heading1" > <p>Smplyr Onli.ai</p>
        <h1>I am Smplyr an AI that makes Onli simpler</h1>
      </div>
     <div class="beginbody">
        <div class="heading2">
          <a href="/" >  <p>
            DISCOVER
        </p>
            <h1>
                I am Smplyr an AI<br></br> that makes Onli <br></br> simpler
            </h1></a>
          </div>
          <div class="heading2">
            <a href="/Learn" > <p>
                LEARN
            </p>
            <h1>
                I am Smplyr an AI<br></br> that makes Onli <br></br> simpler
            </h1>
            </a>
          </div>
          <div class="heading2">
            <a href="/Play" > <p>
                PLAY
            </p>
            <h1>
                I am Smplyr an AI<br></br> that makes Onli <br></br> simpler
            </h1>
            </a>
          </div>
     </div>
     <div class="buttonset1">
        <button id="b1">Prompts: About Onli <i  class="fa-solid fa-caret-up" style={{marginLeft: '60px', position: 'absolute'}}></i> <i  class="fa-solid fa-caret-down" style={{marginLeft: '60px', position: 'absolute', marginTop: '5px'}}></i><div class="drop" style={{position: 'absolute', padding: '10px 10px',backgroundColor:'#1D1D1D',color:'#666666', marginLeft: '30px', display: 'none',}} name="" id="drp1">
            {/* <!-- dropdown on the button --> */}
            <a href=""><option value="" style={{color: '#424242'}}>What is Onli ?</option></a>
            <a href=""><option value="" style={{color: '#424242'}}>How do I use Onli?</option></a>
            <a href=""><option value="" style={{color: '#424242'}}>Why do I need Onli?</option></a>
            <a href=""><option value="" style={{color: '#424242'}}>How Does it Work??</option></a>
           
           
           </div></button>
         
    
    
           <button id="b2">Prompts: About Products  <i class="fa-solid fa-caret-up" style={{marginLeft: '40px', position: 'absolute'}}></i> <i class="fa-solid fa-caret-down" style={{marginLeft: '40px', position: 'absolute', marginTop: '5px'}}></i><div class="drop" style={{position: 'absolute', padding: '10px 10px',backgroundColor:'#1D1D1D',color:'#666666', marginLeft: 'px', display: 'none'}} name="" id="drp2">
           {/* <!-- dropdown on the button --> */}
            <a href=""><option value="" style={{color: '#424242'}}>What products does Onli Make?</option></a>
            <a href=""><option value=""style={{color: '#424242'}}>What is Onli Cloud?</option></a>
            <a href=""><option value="" style={{color: '#424242'}}>What is Onli You?</option></a>
            <a href=""><option value="" style={{color: '#424242'}}>What is Onli Build?</option></a>
           </div></button>
    
    
           
           <button id="b3" >Prompts: How to  <i  class="fa-solid fa-caret-up" style={{marginLeft: '60px', position: 'absolute'}}></i> <i class="fa-solid fa-caret-down" style={{marginLeft:'60px', position: 'absolute',marginTop: '5px'}}></i> <div class="drop" style={{position: 'absolute', backgroundColor:'#1D1D1D',color:'#666666', marginLeft: '-9px',padding: '10px 10px', display: 'none'}} name="" id="drp3">
            {/* <!-- dropdown on the button --> */}
            <a href=""><option value="" style={{color: '#424242'}}>What are some Use Cases for Onli?</option></a>
            <a href=""><option value="" style={{color: '#424242'}}>Where do I start ?</option></a>
            <a href=""><option value="" style={{color: '#424242'}}>How do Issue Assets?</option></a>
            <a href=""><option value="" style={{color: '#424242'}}>How do I become an Owner?</option></a>
           </div></button>
         
          
         <button id="b4">Prompts: Sandbox  <i  class="fa-solid fa-caret-up" style={{marginLeft: '60px', position: 'absolute'}}></i> <i class="fa-solid fa-caret-down" style={{marginLeft: '60px', position: 'absolute', marginTop: '5px'}}></i> <div class="drop" style={{padding: '10px 10px', backgroundColor:'#1D1D1D',color:'#666666', position: 'absolute',marginLeft: '5px', display: 'none'}} name="" id="drp4">
           {/* <!-- dropdown on the button --> */}
            <a href=""><option value="" style={{color: '#424242'}}>Show me code for Ask to Move</option></a>
            <a href=""><option value="" style={{color: '#424242'}}>Show me code for </option></a>
            <a href=""><option value="" style={{color: '#424242'}}>Show me code for </option></a>
            <a href=""><option value="" style={{color: '#424242'}}>Show me code for </option></a>
           </div></button>
       </div>
       <div class="askmeanyquestion1"><button>Mint an Asset named [myFirst Asset] using  [demonomations] genotypes for an appliance called [applianceName] whose owners email address is [email addr] . </button></div>
       <div class="treausersub">
        <button class="btn1">
            <div class="tb">

                <p>Treasury</p>
                <h3 style={{color:'#464646', fontSize: '12px', fontWeight: '400'}}>Balance </h3>
            
            <h1 style={{color:'#8F908F', fontSize: '12px',fontWeight:'400'}}>1,000,000,000</h1>
            
        </div>
           <div class="tb2"> <h1>IP 234.234.222.61</h1>
            <h2>ENABLED </h2><h1>
                LINK CONNECTION</h1>
            <h4 style={{color:'#464646'}}>CONFIG </h4><h6> IP 34.234.222.61</h6></div>
        </button>
        <button class="btn1" style={{backgroundColor:'#181818'}}>
            <div class="tb">

                <p style={{color:'#6DD400'}}>Users</p>
                <h3 style={{color:'#464646', fontSize: '12px', fontWeight: '400'}}>Balance </h3>
            
               <h1 style={{color:'#8F908F', fontSize: '12px',fontWeight:'400'}}>1,000,000,000</h1>
            
        </div>
           <div class="tb2"> <h1>IP 234.234.222.61</h1>
            <h2>ENABLED </h2><h1>
                LINK CONNECTION</h1>
            <h4 style={{color:'#464646'}}>CONFIG </h4><h6> IP 34.234.222.61</h6></div>
        </button>
        <button class="btn1" style={{backgroundColor:'#181818'}}>
            <div class="tb">

                <p>Sub Accounts</p>
            <h3 style={{color:'#464646', fontSize: '12px', fontWeight: '400'}}>Balance </h3>
            
            <h1 style={{color:'#8F908F', fontSize: '12px',fontWeight:'400'}}>1,000,000,000</h1>
            
        </div>
           <div class="tb2"> <h1>IP 234.234.222.61</h1>
            <h2>ENABLED </h2><h1>
                LINK CONNECTION</h1>
            <h4 style={{color:'#464646'}}>CONFIG </h4><h6> IP 34.234.222.61</h6></div>
        </button>
       </div>
    </side1>
    </div>
</body>
    )
}
export default Settings