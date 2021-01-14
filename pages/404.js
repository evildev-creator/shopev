import Footer from "../components/Layout/Footer"
import NavbarTwo from "../components/Layout/NavbarTwo"


const Custom404 = () => {
    return (
      <div className="body404">
<NavbarTwo/>
        <div className="error-area">
 <div class="mainbox">
    <div class="err">4</div>
    <i style={{position: "absolute",
    fontSize: "8.5rem",
    left: "42%",
    top: "15%",
    color: "#ffffff",}} class="far fa-question-circle fa-spin"></i>
    <div class="err2">4</div>
    <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<br/><span>Let's go <a href="/">home</a> and try from there.</span></div>
      </div>
        </div>
        <Footer/>
      </div>
      
    )
}

export default Custom404