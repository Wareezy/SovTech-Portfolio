import React from "react";
import img1 from './images/headshot.PNG'
import img2 from './images/copyworkout.jpg'
import img3 from './images/CPUT.jpg'
import img4 from './images/keycopy.jpg'
import './pages.css'
const Pages =()=>{
    return(
        <div className="container">
            <div >
                <h1 className="Heading1"><u>Home page</u></h1>
                <br></br>
               
<p class="p1">
    Hello my Name is warren Jaftha i am 21 years old. 
  
  <br></br>
    I attended and Greaduated from the Cape Academy of Maths Science and Technology
            <br></br>
            within our high school it was compulsory to take Information Technology as a subject
            <br></br>
            and it was at that moment when i realised the love that i had for programming.
 </p>
 <br></br><br></br><img src={img1} alt=""/>
               </div>
                <div >
             <h2><u>Education</u></h2>
             <br></br>
             <p>After I Graduated Highschool I attended FalseBay College where I studied
                <br></br>
                for my Higher Certificate in Information and Communication Technology which was a 1 year course
                <br></br>
                which mainly dealt with web development and taught us languages such as HTML5, CSS as well as JavaScript.
                <br></br>
                <br></br>
                After I Completed my higher certificate I then went on to study for my Diploma in Information and Communication
                <br></br>
                Technology with a specialization in Application Development this was a 3 year course
                <br></br>
                this course comprised on teaching us how to develop desktop applications,mobile applications as well as again web API applications
               <br></br>
               <br></br>
               The languages that i have experience with is HTML5,CSS, JavaScript,Java,Python, Kotlin ,React(Framework), Vue.js(Framework) as well 
               <br></br>
               as MySQL and Wordpress
             
                </p> <br></br> <br></br><br></br><img src={img3} alt=""/></div>

             <div >
             <h2><u>Why I should be a programmer at SovTech?</u></h2>
             <br></br>
             <p>The reason why i should be a programmer at SovTech is because I consider myself to be a hardworking individual that is not scared to take on any task that is in my way. 
                <br></br>
                Any assignment that is assigned to me will be completed to the best of my ability using the abilities that I have acquired. 
                <br></br>
                I can work on a variety of platforms. Excellent written and spoken communication abilities. I'm excited about the prospect of being 
                <br></br>able to contribute to the company as a dedicated individual and a team player
                <br></br>
                <br></br>
                I am suitable for this job for one reason as I am desperate many people see this as a bad reason, but I think it’s a good reason. 
                <br></br>
                As this should show you that I will sacrifice a lot for your company to produce the required results that is asked of me.
                <br></br>
                I am desperate to learn, desperate to grow with your company and desperate for the valuable experience that your company can offer me.
                <br></br> The reason why I chose this type of work is that I love problem-solving and creating tools that will solve people’s problems. 
                <br></br>What I can offer the company is my time and my skills that I have mentioned above.
                </p>
                <br></br>
                <br></br>
                <img src={img4} alt=""/></div>

      <div >
      <h2><u>Hobbies</u></h2>
      <br></br>
      <p>I live a life of fitness. I love to exercise I have been working out now for 3-4 years now. I walk around with the mindset that every human being
        <br></br> 
        should live a healthy lifestyle . 
       
        <br></br>
        As a Devoute Christian one of my favourite hobbies is studying theology in my free time and reading the bible as I believe that you should not only feed your
        <br></br>
        brain with knowledege but also your soul.
        </p>
        <br></br>
        <img src={img2} alt=""/>
      </div>
</div> 





    )
}

export default Pages;