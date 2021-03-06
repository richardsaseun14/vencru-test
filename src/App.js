import LoginForm from './components/loginForm';
import LoginSlide from './components/loginSlide';

function App() {
  return (
    <div className="md:flex h-screen">
      <div className="px-5 md:px-10 md:w-6/12 h-full bg-[#2D74DA] pt-20">
        <p className="font-['Montserrat'] font-semibold text-[19.54px] tracking-[.21em] text-slate-50 mb-16">
          SME Better
        </p>
        <LoginForm className="mx-auto"></LoginForm>
      </div>
      <div className="h-full hidden md:block w-full">
        <LoginSlide></LoginSlide>
      </div>
    </div>
  );
}

export default App;
