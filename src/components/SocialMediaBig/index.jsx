import React from 'react';
import './style.css'

function SocialMediaBig(props) {
    return (
        <div>
            <h1> FOLLOW US ON SOCIAL MEDIA</h1>
            <div className="social-media">
                <a href="https://www.facebook.com/hieu.duong.bku"><i className="fab fa-facebook" /></a>
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-whatsapp" /></a>
                <a href><i className="fab fa-instagram" /></a>
                <a href="https://www.youtube.com/channel/UC0EVyFiwMAdBAmF4cau7sPA"><i className="fab fa-youtube" /></a>
            </div>
        </div>
    );
}

export default SocialMediaBig;