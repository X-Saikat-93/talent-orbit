import { Link } from "react-router-dom";
import SignUpForm from "../../components/auth/SignUpForm";

const SignUpPage = () => {
	return (
    <>
      {/* <div className='min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-md'>
				<img className='mx-auto h-36 w-auto' src='/logo.svg' alt='LinkedIn' />
				<h2 className='text-center text-3xl font-extrabold text-gray-900'>
					Make the most of your professional life
				</h2>
			</div>
			<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md'>
				<div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
					<SignUpForm />

					<div className='mt-6'>
						<div className='relative'>
							<div className='absolute inset-0 flex items-center'>
								<div className='w-full border-t border-gray-300'></div>
							</div>
							<div className='relative flex justify-center text-sm'>
								<span className='px-2 bg-white text-gray-500'>Already on LinkedIn?</span>
							</div>
						</div>
						<div className='mt-6'>
							<Link
								to='/login'
								className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-50'
							>
								Sign in
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div> */}

      <div className='flex flex-wrap min-h-screen bg-gray-100 dark:bg-gray-950'>
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
            src='https://assets.lummi.ai/assets/QmNn69y1pkEtS1eTfGL3JS7wSAwtWPPntG2FmgnQBfn8LM?auto=format&w=1500'
            alt='Background Image'
          />
        </div>

        <div className='flex w-full flex-col md:w-1/2'>
          <div className='flex justify-center pt-12 md:justify-start md:pl-12'>
            {/* Logo or Branding */}
          </div>
          <div className='lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0'>
            <p className='text-left text-3xl font-bold text-gray-900 dark:text-white'>
              Make the most of your professional life
            </p>

            {/* SignUp Form Component */}
            <div className='my-3'>
              <SignUpForm />
            </div>

            {/* Divider */}
            <div className='relative mt-8 flex h-px place-items-center bg-gray-200 dark:bg-gray-700'>
              <div className='absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white dark:bg-gray-800 text-center text-sm text-gray-500 dark:text-gray-400'>
                or
              </div>
            </div>

            {/* Sign-up Link */}
            <div className='py-12 text-center'>
              <p className='whitespace-nowrap text-gray-600 dark:text-gray-400'>
                Already have an account?{" "}
                <Link
                  to='/login'
                  className='underline-offset-4 font-semibold text-gray-900 dark:text-white underline'>
                  Login now!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUpPage;
