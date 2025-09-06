"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Yuborilmoqda...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("✅ Xabar muvaffaqiyatli yuborildi!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Xatolik yuz berdi. Keyinroq urinib ko‘ring.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-md mx-auto p-4 border rounded-xl shadow"
    >
      <input
        type="text"
        name="name"
        placeholder="Ism"
        value={form.name}
        onChange={handleChange}
        className="p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="p-2 border rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Xabar"
        value={form.message}
        onChange={handleChange}
        className="p-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        Yuborish
      </button>
      <p>{status}</p>
    </form>
  );
}
