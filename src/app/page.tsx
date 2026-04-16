"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Contact {
  id: number;
  name: string;
  phone: string;
  created_at: string;
}

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setContacts(data);
    }
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!name.trim()) {
      setMessage("❌ Name is required");
      return;
    }

    if (!phone.trim()) {
      setMessage("❌ Phone number is required");
      return;
    }

    if (!validatePhone(phone)) {
      setMessage("❌ Please enter a valid phone number");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("contacts")
      .insert([{ name: name.trim(), phone: phone.trim() }]);

    setLoading(false);

    if (error) {
      setMessage(`❌ Error: ${error.message}`);
    } else {
      setMessage("✅ Contact saved successfully!");
      setName("");
      setPhone("");
      fetchContacts();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-3">
            Contact Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Manage your contacts with ease
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-gray-900/50">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-5 mb-8">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 outline-none transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 outline-none transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 dark:disabled:from-gray-600 dark:disabled:to-gray-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl disabled:shadow-none transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </span>
              ) : (
                'Submit Contact'
              )}
            </button>

            {message && (
              <div className={`text-center p-3 rounded-lg font-medium text-sm transition-all duration-300 ${message.includes('✅')
                ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
                : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                }`}>
                {message}
              </div>
            )}
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 dark:text-gray-400 text-sm">
          <p>Built with Next.js & Supabase</p>
        </div>
      </div>
    </div>
  );
}