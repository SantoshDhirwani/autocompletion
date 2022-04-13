import React, { Component, useEffect } from 'react';
import './App.css';
import { usePlacesWidget } from "react-google-autocomplete";

const Page=()=> {
    useEffect(() => {
     
    });
    
// Google widget for autocomplete
    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey:'AIzaSyAAgLMghXEFY4HjTJyU58Jc6cxEvgdH9u8',
        onPlaceSelected: (place) => {
          console.log(place);
        }
      });
       

//   1- Rendering the template for Home page.
//   2- Google search autocomplete.
        return (
             <>
             {/* Top Navbar start  */}
            <nav class="navbar background">
            <ul class="nav-list">
                <li><a href="#web">Web Technology</a></li>
                <li><a href="#program">C Programming</a></li>
                <li><a href="#course">Courses</a></li>
            </ul>
     {/* 2- For Google autocomplete */}
            <div class="rightNav">
                <input ref={ref}  type="text" name="search" id="search"/>
              </div>
        </nav>
         {/* Top Navbar End  */}

     {/* Body  part section start---- */}
        <section class="firstsection">
            <div class="box-main">
                <div class="firstHalf">
                    <h1 class="text-big" id="web">
                        Web Technology
                    </h1>
                     
                    <p class="text-small">
                        HTML stands for HyperText Markup
                        Language. It is used to design
                        web pages using a markup language.
                        HTML is the combination of Hypertext
                        and Markup language. Hypertext
                        defines the link between the web
                        pages. A markup language is used
                        to define the text document within
                        tag which defines the structure of
                        web pages. HTML is a markup language
                        that is used by the browser to
                        manipulate text, images, and other
                        content to display it in the required
                        format.
                    </p>
     
     
                </div>
            </div>
        </section>
     
        <section class="secondsection">
            <div class="box-main">
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                        C Programming
                    </h1>
                    <p class="text-small">
                        C is a procedural programming language.
                        It was initially developed by Dennis
                        Ritchie as a system programming
                        language to write operating system.
                        The main features of C language include
                        low-level access to memory, simple set
                        of keywords, and clean style, these
                        features make C language suitable for
                        system programming like operating system
                        or compiler development.
                    </p>
     
     
                </div>
            </div>
        </section>
     
        <section class="section">
            <div class="paras">
                <h1 class="sectionTag text-big">Java</h1>
     
                <p class="sectionSubTag text-small">
                    Java has been one of the most
                    popular programming language
                    for many years. Java is Object
                    Oriented. However it is not
                    considered as pure object oriented
                    as it provides support for primitive
                    data types (like int, char, etc) The
                    Java codes are first compiled into byte
                    code (machine independent code). Then
                    the byte code is run on Java Virtual
                    Machine (JVM) regardless of the
                    underlying architecture.
                </p>
     
     
            </div>
     
            
        </section>
         {/* Body  part section End---- */}

      {/* Start Footer----- */}
        <footer class="background">
            <p class="text-footer">
                Copyright ©-All rights are reserved
            </p>
         
        </footer>
        {/* End Footer----- */}
        </>
    

        );
    
}

export default Page;