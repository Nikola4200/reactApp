 
 
import './KontaktStyle.css';
 
function Kontakt() {
    function handleSend(){
        alert("Vasa poruka je sacuvana")
    }
  return (
        <div className="container">
        <form onSubmit={handleSend}>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

  
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

            <input type="submit" value="Submit"/>
        </form>
        </div>
  );
}

export default Kontakt;
