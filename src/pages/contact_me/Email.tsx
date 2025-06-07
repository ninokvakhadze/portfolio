import styled from "styled-components";
import { useRef, FormEvent } from "react";
import { sendForm } from "@emailjs/browser";

function Email() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) return;

  // Send message to yourself
  sendForm(
    "service_zsceijy",
    "template_9fmv9it", 
    form.current,
    "f7e9IqjQfgCSIoZbB"
  )
    .then(() => {
      console.log("Message sent");
    })
    .catch((error) => {
      console.error("Failed to send :", error);
    });

  // Send auto-reply to the user
  sendForm(
    "service_zsceijy",
    "template_alv8imk",
    form.current,
    "f7e9IqjQfgCSIoZbB"
  )
    .then(() => {
      
    })
    .catch((err) => {
      console.error("Auto-reply email error", err);
    });
    e.currentTarget.reset();
  
};

  return (
    <EmailDiv ref={form} onSubmit={sendEmail}>
      <EmailComponent>
        <EmailTitle>_subject:</EmailTitle>
        <EmailInput name="subject" placeholder="Subject" required />
      </EmailComponent>
      <EmailComponent>
        <EmailTitle>_email:</EmailTitle>
        <EmailInput
          type="email"
          name="user_email"
          placeholder="Your email"
          required
        />
      </EmailComponent>
      <EmailComponent>
        <EmailTitle>_message:</EmailTitle>
        <EmailTextArea name="message" placeholder="Your message" required />
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
