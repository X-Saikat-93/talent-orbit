import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { axiosInstance } from "../../lib/axios";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const queryClient = useQueryClient();

  const { mutate: loginMutation, isLoading } = useMutation({
    mutationFn: (userData) => axiosInstance.post("/auth/login", userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      toast.success("Login successful!");
    },
    onError: (err) => {
      toast.error(err.response.data.message || "Something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation({ username, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-6 max-w-md mx-auto  p-6 rounded-lg shadow-lg'>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='input input-bordered w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-slate-950 transition duration-200'
        required
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='input input-bordered w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-slate-900 transition duration-200'
        required
      />
      <button
        type='submit'
        className='w-full btn bg-gray-950 hover:bg-gray-800 text-white py-2 rounded-md transition duration-200'>
        {isLoading ? (
          <Loader className='h-5 w-5 animate-spin mx-auto' />
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
