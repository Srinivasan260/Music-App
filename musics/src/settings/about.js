import React from 'react'
import music from '../images/ty.png';
import './about.css'

const About = () => {
  return (
    <div id="tr">
      <div id="about-yt">
        <h3 id="ab-title">ABOUT SRTY APP &nbsp; <img src={music} className="img2" height="40px" width="40px"></img></h3>

        {/* <img src={music} className="img2" height="70px" width="70px"></img> */}

        <p id="about-details">SRYT MUSIC  APP is a audio streaming and media services provider founded on 23 April 2020 by N.Srinivasan.<br></br> It is one of the largest music streaming service providers, with over 527k monthly active users, including 21k paying subscribers, as of March 2023.<br></br>

          SRTY offers digital copyright restricted recorded audio content, including more than 100k songs and five thousand podcasts, from record labels and media companies.<br></br><br></br> As a freemium service, basic features are free with advertisements and limited control, while additional features, such as offline listening and commercial-free listening, are offered via paid subscriptions. Users can search for music based on artist, album, or genre, and can create, edit, and share playlists.

          SRTY is available in most of Europe, as well as Africa, the Americas, Asia, and Oceania, with a total availability in 184 markets.<br></br><br></br> Its users and subscribers are based largely in the indians, jointly accounting for around 53% of users and 67% of revenue. It has no presence in mainland China where the market is dominated by QQ Music. The service is available on most devices, including Windows, macOS, and Linux computers, iOS and Android smartphones and tablets, smart home devices such as the Amazon Echo and Google Nest lines of products, and digital media players like Roku.<br></br><br></br>

          Unlike physical or download sales, which pay artists a fixed price per song or album sold, SRTY pays royalties based on the number of artist streams as a proportion of total songs streamed. It distributes approximately 70% of its total revenue to rights holders (often record labels), who then pay artists based on individual agreements</p><br></br>


        <h5 id="h5-about"> To know more About us  <a href="https://en.wikipedia.org/wiki/Spotify">Click here</a></h5>

        <hr id="about-hr" />
        <h6 id="h6-ab">Follow us &nbsp;&nbsp;<i class="bi bi-instagram" id="insta"></i> &nbsp;&nbsp;<i class="bi bi-facebook" id="face"></i>&nbsp;&nbsp;<i class="bi bi-twitter" id="insta"></i></h6>
        <h6 id="h6-a">Copyright ©2023. All rights reserved.</h6>


      </div>
    </div>
  )
}

export default About