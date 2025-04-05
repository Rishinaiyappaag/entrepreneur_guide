import axios from "axios";
import { useState } from "react";
import "../Chatbot.css";

function Chatbot() {
    const [question, setQuestion] = useState("");
    const [chatHistory, setChatHistory] = useState([]); // Track user and bot messages
    const [isTyping, setIsTyping] = useState(false);

    async function GAnswer() {
        if (!question.trim()) return; // Prevent empty questions

        // Add user's question to chat history
        setChatHistory((prev) => [...prev, { text: question, sender: "user" }]);
        setQuestion(""); // Clear input
        setIsTyping(true); // Show typing animation

        try {
            const response = await axios({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyASf_zTqhNS1AGpCWld1qosAn7cF4r9B3A",
                method: "post",
                data: {
                    contents: [{ parts: [{ text: question }] }],
                },
            });

            const botResponse =
                response.data.candidates[0].content.parts[0].text;

            // Add bot's answer to chat history
            setChatHistory((prev) => [
                ...prev,
                { text: botResponse, sender: "bot" },
            ]);
        } catch (error) {
            setChatHistory((prev) => [
                ...prev,
                { text: "Sorry, something went wrong.", sender: "bot" },
            ]);
        } finally {
            setIsTyping(false);
        }
    }

    function formatBotText(text) {
        // Regex to match text between **double asterisks**
        const regex = /\*\*(.*?)\*\*/g;
        const parts = text.split(regex); // Split into text and matches
    
        return parts.map((part, index) => {
            if (index % 2 === 1) {
                // Odd indices contain the bolded text
                return <strong key={index}>{part}</strong>;
            }
            return part; // Even indices are plain text
        });
    }

    return (
        <div className="chat-container">
            <img src="img/bot.gif" />
            <div className="chat-window">
            <h1>Sproutbot</h1>
            <div className="chat-history">
                {chatHistory.map((message, index) => (
                    <div
                        key={index}
                        className={`chat-message ${
                            message.sender === "user" ? "chat-user" : "chat-bot"
                        }`}
                    >
                        {message.sender === "bot"
                            ? formatBotText(message.text)
                            : message.text}
                    </div>
                ))}
                {isTyping && (
                    <div className="chat-message chat-bot typing">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                )}
            </div>
                <div className="chat-input">
                    <textarea
                        placeholder="Type your question..."
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <button onClick={GAnswer}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
