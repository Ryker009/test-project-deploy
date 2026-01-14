import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/adminMessages.css";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      setMessages((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contact")
      .then((res) => {
        setMessages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading messages...</p>;
  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.toLowerCase().includes(search.toLowerCase()) ||
      msg.email.toLowerCase().includes(search.toLowerCase()) ||
      msg.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-page">
      <h1>Contact Messages</h1>
      <p className="admin-subtitle">Messages received from contact form</p>
      <input
        type="text"
        placeholder="Search by name, email or subject..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="message-list">
        {filteredMessages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          filteredMessages.map((msg) => (
            <div key={msg._id} className="message-card">
              <div className="message-header">
                <h4>{msg.subject}</h4>
                <span>{new Date(msg.createdAt).toLocaleString()}</span>
              </div>

              <p className="message-text">{msg.message}</p>

              <div className="message-footer">
                <strong>{msg.name}</strong>
                <a href={`mailto:${msg.email}`}>{msg.email}</a>
              </div>

              <button
                className="delete-btn"
                onClick={() => handleDelete(msg._id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
