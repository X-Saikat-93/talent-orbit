import { Link } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className='flex flex-wrap'>
      {/* Left side - Login Form */}
      <div className='flex w-full flex-col md:w-1/2'>
        <div className='flex justify-center pt-12 md:justify-start md:pl-12'>
          <Link
            to='/'
            className='border-b-gray-700 border-b-4 pb-2 text-2xl font-bold text-gray-900'>
            Talent Orbit
          </Link>
        </div>
        <div className='lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0'>
          <p className='text-left text-3xl font-bold'>Welcome back</p>
        

				  {/* Login Form Component */}
				  <div className="my-3 ">
					  
          <LoginForm />
				  </div>

          {/* Divider */}
          <div className='relative mt-8 flex h-px place-items-center bg-gray-200'>
            <div className='absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500'>
              or
            </div>
          </div>

          {/* Sign-up Link */}
          <div className='py-12 text-center'>
            <p className='whitespace-nowrap text-gray-600'>
              Don't have an account?{" "}
              <Link
                to='/signup'
                className='underline-offset-4 font-semibold text-gray-900 underline'>
                Sign up for free.
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Image & Quote */}
      <div className='pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2 rounded-xl'>
        <div className='absolute bottom-0 z-10 px-8 text-white opacity-100'>
          <p className='mb-8 text-3xl font-semibold leading-10'>
            We work 10x faster than our competitors and stay consistent. While
            they're bogged down with technical debt, we're releasing new
            features.
          </p>
          <p className='mb-4 text-3xl font-semibold'>John Elmond</p>
          <p>Founder, Emogue</p>
          <p className='mb-7 text-sm opacity-70'>Web Design Agency</p>
        </div>
        <img
          className='-z-1 absolute top-0 h-full w-full object-cover opacity-60 rounded-xl'
          src='https://images.unsplash.com/photo-1685468499123-7494a1fe46d4?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Background'
        />
      </div>
    </div>
  );
};

export default LoginPage;
