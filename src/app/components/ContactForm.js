import { unstable_after as after } from "next/server";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    console.log(result.message);

    after(() => {
      console.log("Form submitted and post-response task executed");
      // Perform non-essential tasks like logging or analytics here
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Name' />
      <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' />
      <button type='submit'>Submit</button>
    </form>
  );
}
