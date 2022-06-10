// import logo from './logo.svg';
import './App.css';
import LoginForm from './components/loginForm';

function App() {
  return (
    <div className="md:flex h-screen">
      <div className="px-5 md:px-10 md:w-5/12 h-full bg-[#2D74DA] pt-20">
        <p className="font-['Montserrat'] text-[19.54px] tracking-[.21em] text-slate-50 mb-16">
          SME Better
        </p>
        <LoginForm className="mx-auto"></LoginForm>
      </div>
      <div className="h-full hidden md:block">2</div>
    </div>
  );
}

export default App;
