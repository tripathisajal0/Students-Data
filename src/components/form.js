
import React, { useState } from 'react';
import './form.css'; 

const FormComponent = () => {
  const initialFormData = {
    name: '',
    fatherName: '',
    motherName: '',
    personalEmail: '',
    navgurukulEmail: '',
    joiningDate: '',
    latestQualification: '',
    yearOfPassing: '',
    personalContact: '',
    parentContact: '',
    dob: '',
    address: '',
    maritalStatus: '',
    healthIssues: '',
    offerLetterReceived: '',
    adharNumber: '',
    departmentOfSchool: '',
    offerLetterLink: '',
    screeningTestMarks: '',
    codechefUsername: '',
    leetcodeUsername: '',
    atcoderUsername: '',
    readtheoryUsername: '',
    codeforcesUsername: '',
    discordUsername: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("submit").disabled = true;
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyclYs2qiUX0Jp0EZmE9RorWBwvvytx-lI34CB0bmS6YcE6vf9sRlvkiWYnK4TbIly3DA/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors'
      });
      alert('Form submitted successfully!');
      document.getElementById("submit").disabled = false;
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form. Please try again later.');
    }
  };
return (

  <form onSubmit={handleSubmit} className="form-container">
    <div>
      <label className="form-label">Name:</label>
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your name" 
        required 
      />
    </div>
    <div>
      <label className="form-label">Father's name:</label>
      <input 
        type="text" 
        name="fatherName" 
        value={formData.fatherName} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your father's name"
        required 
      />
    </div>
    <div>
      <label className="form-label">Mother's name:</label>
      <input 
        type="text" 
        name="motherName" 
        value={formData.motherName} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your mother's name"
        required 
      />
    </div>
    <div>
      <label className="form-label">Personal Email address:</label>
      <input 
        type="email" 
        name="personalEmail" 
        value={formData.personalEmail} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your personal email address" 
        required 
      />
    </div>
    <div>
      <label className="form-label">Navgurukul Email address:</label>
      <input 
        type="email" 
        name="navgurukulEmail" 
        value={formData.navgurukulEmail} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your Navgurukul email address" 
        required 
      />
    </div>
    <div>
      <label className="form-label">Joining date:</label>
      <input 
        type="date" 
        name="joiningDate" 
        value={formData.joiningDate} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your joining date" 
        required 
      />
    </div>
    <div>
      <label className="form-label">Latest qualification:</label>
      <select 
        name="latestQualification" 
        value={formData.latestQualification} 
        onChange={handleChange} 
        className="form-input" 
        required 
      >
        <option value="">Select latest qualification</option>
        <option value="10th Pursuing">10th Pursuing</option>
        <option value="10th Complete">10th Complete</option>
        <option value="12th Pursuing">12th Pursuing</option>
        <option value="12th Complete">12th Complete</option>
        <option value="Graduation Pursuing">Graduation Pursuing</option>
        <option value="Graduation Complete">Graduation Complete</option>
        <option value="Post Graduation Pursuing">Post Graduation Pursuing</option>
        <option value="Post Graduation Complete">Post Graduation Complete</option>
      </select>
    </div>
    <div>
      <label className="form-label">Year of passing:</label>
      <input 
        type="text" 
        name="yearOfPassing" 
        value={formData.yearOfPassing} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your year of passing" 
      />
    </div>
    <div>
      <label className="form-label">Personal contact:</label>
      <input 
        type="text" 
        name="personalContact" 
        value={formData.personalContact} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your personal contact number" 
      />
    </div>
    <div>
      <label className="form-label">Parent contact number:</label>
      <input 
        type="text" 
        name="parentContact" 
        value={formData.parentContact} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your parent contact number" 
      />
    </div>
    <div>
      <label className="form-label">Date of Birth (DOB):</label>
      <input 
        type="date" 
        name="dob" 
        value={formData.dob} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your date of birth" 
      />
    </div>
    <div>
      <label className="form-label">Address:</label>
      <input 
        type="text" 
        name="address" 
        value={formData.address} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your address" 
        required 
      />
    </div>
    <div>
      <label className="form-label">Marital Status:</label>
      <select 
        name="maritalStatus" 
        value={formData.maritalStatus} 
        onChange={handleChange} 
        className="form-input" 
        required 
      >
        <option value="">Select Marital Status</option>
        <option value="Married">Married</option>
        <option value="Unmarried">Unmarried</option>
      </select>
    </div>
    <div>
      <label className="form-label">Any health issues (description):</label>
      <input 
        type="text" 
        name="healthIssues" 
        value={formData.healthIssues} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter any health issues" 
      />
    </div>
    <div>
      <label className="form-label">Offer letter received (yes or no):</label>
      <select 
        name="offerLetterReceived" 
        value={formData.offerLetterReceived} 
        onChange={handleChange} 
        className="form-input" 
        required 
      >
        <option value="">Select option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
    <div>
      <label className="form-label">Adhar number:</label>
      <input 
        type="text" 
        name="adharNumber" 
        value={formData.adharNumber} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your Adhar number" 
      />
    </div>
    <div>
      <label className="form-label">Department of school (SOP / SOB / SOE / SOD):</label>
      <select 
        name="departmentOfSchool" 
        value={formData.departmentOfSchool} 
        onChange={handleChange} 
        className="form-input" 
        required 
      >
        <option value="">Select school</option>
        <option value="SOP">SOP</option>
        <option value="SOB">SOB</option>
        <option value="SOE">SOE</option>
        <option value="SOD">SOD</option>
      </select>
    </div>
    <div>
      <label className="form-label">Drive link of complete offer letter with consent form (filled and signed):</label>
      <input 
        type="text" 
        name="offerLetterLink" 
        value={formData.offerLetterLink} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter the drive link of complete offer letter" 
      />
    </div>
    <div>
      <label className="form-label">Screening test marks:</label>
      <input 
        type="text" 
        name="screeningTestMarks" 
        value={formData.screeningTestMarks} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your screening test marks" 
      />
    </div>
    <div>
      <label className="form-label">Codechef username (optional):</label>
      <input 
        type="text" 
        name="codechefUsername" 
        value={formData.codechefUsername} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your Codechef username" 
      />
    </div>
    <div>
      <label className="form-label">Leetcode username (optional):</label>
      <input 
        type="text" 
        name="leetcodeUsername" 
        value={formData.leetcodeUsername} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your Leetcode username" 
      />
    </div>
    <div>
      <label className="form-label">Atcoder username (optional):</label>
      <input 
        type="text" 
        name="atcoderUsername" 
        value={formData.atcoderUsername} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your Atcoder username" 
      />
    </div>
    <div>
      <label className="form-label">Readtheory username (optional):</label>
      <input 
        type="text" 
        name="readtheoryUsername" 
        value={formData.readtheoryUsername} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your Readtheory username" 
      />
    </div>
    <div>
      <label className="form-label">Codeforces username (optional):</label>
      <input 
        type="text" 
        name="codeforcesUsername" 
        value={formData.codeforcesUsername} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your Codeforces username" 
      />
    </div>
    <div>
      <label className="form-label">Discord username (optional):</label>
      <input 
        type="text" 
        name="discordUsername" 
        value={formData.discordUsername} 
        onChange={handleChange} 
        className="form-input" 
        placeholder="Enter your Discord username" 
      />
    </div>
    <button id="submit" type="submit" className="form-submit">Submit</button>
  </form>
 
  
);
};
export default FormComponent;
