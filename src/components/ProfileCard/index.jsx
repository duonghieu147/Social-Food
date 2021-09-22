import React from 'react';
import './style.css'

function ProfileCard(props) {
    return (
        <div className="wrapper">
  <div className="img-area">
    <div className="inner-area">
      <img src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/166014380_1392790014404846_1341965397669879252_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=N9wEDd6c66oAX8ti_zy&_nc_ht=scontent.fdad1-2.fna&oh=475549238f991a08daa4336f46a54092&oe=61694396" alt="" />
    </div>
  </div>
  <div className="icon arrow"><i className="fas fa-arrow-left" /></div>
  <div className="icon dots"><i className="fas fa-ellipsis-v" /></div>
  <div className="name">Dương Văn Hiếu</div>
  <div className="about">Designer &amp; Developer</div>
  <div className="social-icons">
    <a href="https://www.facebook.com/hieu.duong.bku/" className="fb"><i className="fab fa-facebook-f" /></a>
    <a href="#" className="twitter"><i className="fab fa-twitter" /></a>
    <a href="https://www.instagram.com/hieu.duong99/" className="insta"><i className="fab fa-instagram" /></a>
    <a href="https://www.youtube.com/channel/UC0EVyFiwMAdBAmF4cau7sPA" className="yt"><i className="fab fa-youtube" /></a>
  </div>
  <div className="buttons">
    <button>Message</button>
    <button>Subscribe</button>
  </div>
  <div className="social-share">
    <div className="row">
      <i className="far fa-heart" />
      <i className="icon-2 fas fa-heart" />
      <span>20.4k</span>
    </div>
    <div className="row">
      <i className="far fa-comment" />
      <i className="icon-2 fas fa-comment" />
      <span>14.3k</span>
    </div>
    <div className="row">
      <i className="fas fa-share" />
      <span>12.8k</span>
    </div>
  </div>
</div>

    );
}

export default ProfileCard;