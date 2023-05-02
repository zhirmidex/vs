import React from 'react';
import $ from 'jquery';
import { BrowserRouter, Route,Routes, Link } from 'react-router-dom';
import Play from './Play';
import Discover from './Discover';
import Learn from './Learn';
import Settings from './Settings';

$(function(){
  $('#b1').on('click',function(){
    $('#drp1').toggle();})
    $('#b2').on('click',function(){
      $('#drp2').toggle();})
      $('#b3').on('click',function(){
        $('#drp3').toggle();})
        $('#b4').on('click',function(){
          $('#drp4').toggle();})
          

           $('#side').on('click',function(){
            $('#dropdown1').show();
            $('#side').hide();
            $('#down').show();
  
        })
        $('#down').on('click',function(){
            $('#dropdown1').hide();
            $('#down').hide();
            $('#side').show()})
  

})

function App() {

  return (
    
    <body>
      <BrowserRouter><Routes>
      <Route path="/" element={<Discover/>} exact />
       <Route path="/play" element={<Play/>}></Route>
       <Route path="/Learn" element={<Learn/>}></Route>
       <Route path="/Settings" element={<Settings/>}></Route>
        
          </Routes></BrowserRouter>
      
   
</body>
  );
}

export default App;
