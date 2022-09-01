import BgPattern from './BgPattern';
import { AtSign } from 'react-feather';
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
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
          <form action='otp.html' className='custom-form'>
            <h1 className='font-md title-color fw-600'>Forgot Password</h1>

            {/* <!-- Email Input start --> */}
            <div className='input-box'>
              <input type='email' placeholder='Email Address' required className='form-control' />
              <AtSign />
            </div>
            {/* <!-- Email Input End --> */}

            <button type='submit' className='btn-solid'>
              Send OTP
            </button>
            <span className='content-color font-sm d-block text-center fw-600'>
              <Link to={`${process.env.PUBLIC_URL}/login`} className='underline'>
                Back to Sign In
              </Link>
            </span>
          </form>
          {/* <!-- Login Form End --> */}
        </section>
        {/* <!-- Login Section End --> */}
      </main>
    </>
  );
};
export default ForgotPassword;
