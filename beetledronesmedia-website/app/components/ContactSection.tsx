// import {useState} from React;
// import Form from 'next/form';
import { SubmitContactForm } from './Server';


function ContactSection() {


    return(
    <>
    <main className="relative bg-green-500 text-black" >
        <form action={SubmitContactForm}>
            <input className="bg-gray-500 text-black w-full text-6xl flex flex-col items-center py-16 text-center left-15" type="text" name="name" placeholder="Name" required />
            <input className="bg-gray-500 text-black w-full text-6xl flex flex-col items-center py-16 text-center" type="industry" name="industry" placeholder="Type of Business" />
            <input className="bg-gray-500 text-black w-full text-6xl flex flex-col items-center py-16 text-center right-15" type="email" name="email" placeholder="Email" required />
            <textarea className="bg-gray-500 text-black w-full text-6xl flex flex-col items-center py-16 text-center" name="message" placeholder="I'm listening.." required />
            <button className="bottom-15 bg-green-500/75 text-black px-4 py-2"type="submit">Get Results!</button>
        </form>

    </main>
    </>

    );
        
    
}

export default ContactSection;


