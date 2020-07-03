import React, { Component } from 'react';
import '../assets/styles/components/BackToTop.scss';
import '../assets/lib/font-awesome/css/font-awesome.min.css';
import '../assets/lib/animate/animate.min.css';
import '../assets/lib/ionicons/css/ionicons.min.css';
import '../assets/lib/owlcarousel/assets/owl.carousel.min.css';
import '../assets/lib/lightbox/css/lightbox.min.css';
import arrow from '../assets/static/fecha-up.png'

const BackToTop = () => {

    window.onscroll = function() {
        if(document.documentElement.scrollTop > 100){
            document.querySelector('go-top-container').classList.add('show');
        } else {
            document.querySelector('go-top-container').classList.remove('show');
        }        
    }

    return (
        <div className="BackToTop">
            <div className='BackToTop-container'>
                <a href="#" class="BackToTop-img"><img src={arrow} alt=""/></a>
            </div>
        </div>
        

    );

}


export default BackToTop;