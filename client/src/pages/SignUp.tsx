import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState('')
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data,"Sign Up Response");
      if(data.status == 500 || data.success == false){
        setError(data.message)
      }else{
        setError("")
        navigate('/sign-in')
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-neutral-700 p-3 text-center">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="p-4 rounded-md"
          id="username"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          className="p-4 rounded-md"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 rounded-md"
          id="password"
          onChange={handleChange}
        />
        <button className="bg-slate-900 p-3 rounded-md hover:opacity-80 text-white">
        {loading? "Loading..." : "Sign Up"}
        </button>
      </form>
      {/* <Button>Sign Up</Button> */}
      <p className="mt-2">
        Already Have an Account?{" "}
        <Link to={"/sign-in"} className="text-sky-900">
          Sign In
        </Link>
      </p>
      <p className="text-red-600">{error}
      </p>
    </div>
  );
}

export default SignUp;
