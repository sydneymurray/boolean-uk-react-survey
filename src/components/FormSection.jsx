import "./form.css"
import { useState } from "react";

const formResetData = {
  username: "",
  email: "",
  logo:"",
  colour:"",
  consistency:"",
  timeSpent: [],
  review: "",
  bestFeatures: [],
  worstFeatures: []
}

const initialFormData = {
  username: "Sydney",
  email: "syd@syd.com",
  logo:"3",
  colour:"2",
  consistency:"1",
  timeSpent: ["Swimming","Chatting"],
  review: "Arsenal Football Club is a professional men's football club based in Islington, London, England.",
  bestFeatures: ["colour","logo"],
  worstFeatures: ["sound","size"]
}

function FormSection({addFormAnswersToList}){
  let [formData, setFormData] = useState({...initialFormData}) 

  function formSubmit(event){
    event.preventDefault()
    addFormAnswersToList(formData)
    setFormData(formResetData)
  }

  function radioButtonChange(event){
    setFormData({...formData, [event.target.name]: event.target.value}) 
  }

  function checkboxChange(event){
    let selection = [...formData[event.target.name]]
    if (event.target.checked)
      selection = [...selection, event.target.value]
    else
      selection = formData[event.target.name].map(
        item => item != event.target.value)
    setFormData({...formData, [event.target.name]: selection}) 
  }

  function textChange(event){
    setFormData({...formData, [event.target.name]: event.target.value}) 
  }

  return <section className="main__form">
    <form className="form" onSubmit={event => formSubmit(event)}>
      <h2>Tell us what you think about your rubber duck!</h2>
 
      <div className="form__group">
        <h3>What would you say that are the best features of your rubber duck?</h3>
        <ul>
          <li>
            <label>
              <input name="bestFeatures" type="checkbox" value="colour" 
                checked={formData.bestFeatures.includes("colour")}
                onChange={event=> checkboxChange(event)}/>
                It's yellow!
            </label>
          </li>
          <li>
            <label>
              <input name="bestFeatures" type="checkbox" value="sound"
                checked={formData.bestFeatures.includes("sound")}
                onChange={event=> checkboxChange(event)}/>
                It squeaks!
            </label>
          </li>
          <li>
            <label>
              <input name="bestFeatures" type="checkbox" value="logo" 
                checked={formData.bestFeatures.includes("logo")}
                onChange={event=> checkboxChange(event)}/>
                It has alogo!
            </label>
          </li>
          <li>
            <label>
              <input name="bestFeatures" type="checkbox" value="size" 
                checked={formData.bestFeatures.includes("size")}
                onChange={event=> checkboxChange(event)}/>
                Its big!
            </label>
          </li>
        </ul>
      </div>

      <div className="form__group">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        <ul>
          <li>
            <label>
              <input name="worstFeatures" type="checkbox" value="colour"
                checked={formData.worstFeatures.includes("colour")}
                onChange={event=> checkboxChange(event)}/>
                It's yellow!
            </label>
          </li>
          <li>
            <label>
              <input name="worstFeatures" type="checkbox" value="sound"
                checked={formData.worstFeatures.includes("sound")}
                onChange={event=> checkboxChange(event)}/>
                It squeaks!
            </label>
          </li>
          <li>
            <label>
              <input name="worstFeatures" type="checkbox" value="logo" 
                checked={formData.worstFeatures.includes("logo")}
                onChange={event=> checkboxChange(event)}/>
                It has alogo!
            </label>
          </li>
          <li>
            <label>
              <input name="worstFeatures" type="checkbox" value="size" 
                checked={formData.worstFeatures.includes("size")}
                onChange={event=> checkboxChange(event)}/>
                Its big!
            </label>
          </li>
        </ul>
      </div>
    
      <div className="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        <ul>
          <li>
            <input id="consistency1" type="radio" name="consistency" value="1" 
              checked={formData.consistency === ("1")}
              onChange={event=> radioButtonChange(event)}/>
            <label htmlFor="consistency1">1</label>
          </li>
          <li>
            <input id="consistency2" type="radio" name="consistency" value="2" 
              checked={formData.consistency === ("2")}
              onChange={event=> radioButtonChange(event)}/>
            <label htmlFor="consistency2">2</label>
          </li>
          <li>
            <input id="consistency3" type="radio" name="consistency" value="3" 
              checked={formData.consistency === ("3")}
              onChange={event=> radioButtonChange(event)}/>
            <label htmlFor="consistency3">3</label>
          </li>
          <li>
            <input id="consistency4" type="radio" name="consistency" value="4" 
              checked={formData.consistency === ("4")}
              onChange={event=> radioButtonChange(event)}/>
            <label htmlFor="consistency4">4</label>
          </li>
        </ul>
      </div>

      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <ul>
          <li>
            <input id="colour1" type="radio" name="colour" value="1" 
              checked={formData.colour === ("1")}
              onChange={event=> radioButtonChange(event)}/>
            <label htmlFor="colour1">1</label>
          </li>
          <li>
            <input id="colour2" type="radio" name="colour" value="2" 
              checked={formData.colour === ("2")}
              onChange={event=> radioButtonChange(event)}/>
            <label htmlFor="colour2">2</label>
          </li>
          <li>
            <input id="colour3" type="radio" name="colour" value="3" 
              checked={formData.colour === ("3")}
              onChange={event=> radioButtonChange(event)}/>
            <label htmlFor="colour3">3</label>
          </li>
          <li>
            <input id="colour4" type="radio" name="colour" value="4" 
              checked={formData.colour === ("4")}
              onChange={event=> radioButtonChange(event)}/>
            <label htmlFor="colour4">4</label>
          </li>
        </ul>
      </div>

      <div className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        <ul>
          <li>
            <input id="logo1" type="radio" name="logo" value="1" 
              checked={formData.logo === ("1")}
              onChange={event=> radioButtonChange(event)}/>
            <label htmlFor="logo1">1</label>
          </li>
          <li>
            <input id="logo2" type="radio" name="logo" value="2" 
              checked={formData.logo === ("2")}
              onChange={event=> radioButtonChange(event)}/>
            <label htmlFor="logo2">2</label>
          </li>
          <li>
            <input id="logo3" type="radio" name="logo" value="3" 
              checked={formData.logo === ("3")}
              onChange={event=> radioButtonChange(event)}/>
            <label htmlFor="logo3">3</label>
          </li>
          <li>
            <input id="logo4" type="radio" name="logo" value="4" 
              checked={formData.logo === ("4")}
              onChange={event=> radioButtonChange(event)}/>
            <label htmlFor="logo4">4</label>
          </li>
        </ul>
      </div>

      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck?</h3>
        <ul>
          <li>
            <label>
              <input name="timeSpent" type="checkbox" value="Swimming"
                checked={formData.timeSpent.includes("Swimming")}
                onChange={event=> checkboxChange(event)}/>
                Swimming
            </label>
          </li>
          <li>
            <label>
              <input name="timeSpent" type="checkbox" value="Bathing" 
                checked={formData.timeSpent.includes("Bathing")}
                onChange={event=> checkboxChange(event)}/>
                Bathing
            </label>
          </li>
          <li>
            <label>
              <input name="timeSpent" type="checkbox" value="Chatting" 
                checked={formData.timeSpent.includes("Chatting")}
                onChange={event=> checkboxChange(event)}/>
                Chatting
            </label>
          </li>
          <li>
            <label>
              <input name="timeSpent" type="checkbox" value="I don't like to spend time with it"
                checked={formData.timeSpent.includes("I don't like to spend time with it")} 
                onChange={event=> checkboxChange(event)}/>
                I don't like to spend time with it.
            </label>
          </li>
        </ul>
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10" value={formData.review}
          onChange={event=> textChange(event)}>
        </textarea>
      </label>
      <label>Put your name here (if you feel like it):
        <input type="text" name="username" value={formData.username}
          onChange={event=> textChange(event)}/>
      </label>
      <label>Leave us your email pretty please??
        <input type="email" name="email" value={formData.email}
          onChange={event=> textChange(event)}/>
      </label>
        <input className="form__submit" type="submit" value="Submit Survey!"/>
    </form>
  </section>
}

export default FormSection