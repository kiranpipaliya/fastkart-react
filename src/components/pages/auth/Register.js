import BgPattern from './BgPattern';
import { AtSign, Eye, EyeOff, User } from 'react-feather';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <>
      <BgPattern />
      <main className='main-wrap login-page mb-xxl'>
        <img className='logo' src='assets/images/logo/logo.png' alt='logo' />
        <img className='logo logo-w' src='assets/images/logo/logo-w.png' alt='logo' />
        <p className='font-sm content-color'>Online Supermarket for all your daily needs. you are just One Click away from your all needs at your door step.</p>

        {/* <!-- Login Section Start --> */}
        <section className='login-section p-0'>
          {/* <!-- Login Form Start --> */}
          <form action='index.html' className='custom-form'>
            <h1 className='font-md title-color fw-600'>Register Account</h1>

            {/* <!-- Email Input start --> */}
            <div className='input-box'>
              <input type='text' placeholder='Full Name' required className='form-control' />
              <User />
            </div>
            {/* <!-- Email Input End --> */}

            {/* <!-- Email Input start --> */}
            <div className='input-box'>
              <input type='email' placeholder='Email Address' required className='form-control' />
              <AtSign />
            </div>
            {/* <!-- Email Input End --> */}

            {/* <!-- Password Input start --> */}
            <div className='input-box'>
              <input type='password' placeholder='Password' required className='form-control' />
              <Eye />
            </div>
            {/* <!-- Password Input End --> */}

            <button type='submit' className='btn-solid'>
              Sign Up
            </button>
            <span className='content-color font-sm d-block text-center fw-600'>
              Already have an Account?
              <Link to={`${process.env.PUBLIC_URL}/login`} className='underline'>
                Sign In
              </Link>
            </span>
          </form>
          {/* <!-- Login Form End --> */}

          {/* <!-- Social Section Start --> */}
          <div className='socila-section'>
            <span>
              <span className='font-sm fw-600 font-theme'> Or login with </span>
            </span>
            <div className='social-wrap'>
              <Link to='' className='font-md title-color fw-600'>
                <img src='assets/icons/png/phone.png' alt='phone' /> Continue with Phone
              </Link>
              <Link to='https://accounts.google.com/ServiceLogin' className='font-md title-color fw-600'>
                <img src='assets/icons/png/google.png' alt='phone' /> Continue with Google
              </Link>
            </div>
          </div>
          {/* <!-- Social Section End --> */}
        </section>
        {/* <!-- Login Section End --> */}
      </main>
    </>
  );
};
export default Register;
