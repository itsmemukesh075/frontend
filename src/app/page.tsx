"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !phone) {
      setMessage("All fields required");
      return;
    }

    const { error } = await supabase
      .from("contacts")
      .insert([{ name, phone }]);

    if (error) {
      setMessage("Error saving data");
    } else {
      setMessage("Saved successfully ✅");
      setName("");
      setPhone("");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </div>
  );
}