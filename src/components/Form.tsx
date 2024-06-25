import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgwwpbp");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form className=" space-y-4" onSubmit={handleSubmit}>
      <label className='font-bold' htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
         className="w-full p-2 border border-gray-300 rounded"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='w-full bg-gray-800 text-white p-2 rounded' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}



export default ContactForm;