import styled from "styled-components";
import sendMail from "./email";
import { useState } from "react";

function Email() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMail({
      subject: `Contact from ${formData.name}`,
      text: formData.message,
      html: `<p>${formData.message}</p>`,
      from: formData.email,
    })
      .then(() => {
        alert('Email sent successfully!');
      })
      .catch((error) => {  console.error('Error sending email:', error);
        alert('Failed to send email. Please try again later.');
      });
    console.log('Form submitted:', formData);
  };
  return (
    <EmailDiv onSubmit={handleSubmit}>
      <EmailComponent>
        <EmailTitle>_name:</EmailTitle>
        <EmailInput
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </EmailComponent>
      <EmailComponent>
        <EmailTitle>_email:</EmailTitle>
        <EmailInput
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </EmailComponent>
      <EmailComponent>
        <EmailTitle>_message:</EmailTitle>
        <EmailTextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </EmailComponent>
      <button type="submit">Send</button>
    </EmailDiv>
  );
}

export default Email;
const EmailDiv = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const EmailComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const EmailTitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
  text-align: left;
  color: #607b96;
`;
const EmailInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: solid 1px #1e2d3d;
  background-color: #011221;
  font-size: 16px;
  color: #465e77;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 2px rgba(96, 123, 150, 0.3);
  }
`;
const EmailTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: solid 1px #1e2d3d;
  background-color: #011221;
  font-size: 16px;
  color: #465e77;
  min-height: 140px;
  outline: none;
  resize: none;
  &:focus {
    box-shadow: 0 0 0 2px rgba(96, 123, 150, 0.3);
  }
  &::-webkit-scrollbar {
    background: rgb(1, 18, 33);
    border-radius: 5px;
    transition: all 0.5s ease 0s;
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: rgb(30, 45, 61);
    transition: all 0.5s ease 0s;
    outline: rgb(28, 43, 58) solid 1px;
  }
`;
