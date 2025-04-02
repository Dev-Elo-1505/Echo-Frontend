import { useState } from "react";
import { registerUser } from "../../services/authService";
import AuthLayout from "../../components/AuthLayout";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      setSuccess("Registration successful. You can now log in.");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <AuthLayout>
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleRegister} className="space-y-4">
        
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded">Register</button>
      </form>
    </div>
    </AuthLayout>
    
  );
};

export default SignUpPage;
