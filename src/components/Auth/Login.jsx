import React, {useState} from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password)
        setEmail('')
        setPassword('')
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-2xl'>
            <form 
            onSubmit={(e) => {
                submitHandler(e)
            }} 
            className='flex flex-col items-center justify-center'
            >
                <input 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                required className='bg-transparent text-black outline-none border border-emerald-300 rounded-full py-4 px-5 text-xl' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                required className='bg-transparent text-black outline-none border border-emerald-300 rounded-full py-4 px-5 text-xl mt-3' type="password" placeholder='Enter password' />
                <button className='text-black outline-none border-none bg-emerald-300 hover:bg-emerald-600 rounded-full py-4 px-5 text-xl mt-5 w-full h-full font-bold '>Login</button>
            </form>

        </div>

    </div>
  )
}

export default Login