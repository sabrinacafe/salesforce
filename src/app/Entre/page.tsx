import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500 px-4"> {/* Adicionado padding horizontal */}
      <div id="login" className="w-full max-w-md bg-white rounded shadow-lg flex flex-col justify-between p-8 mt-20">       
        <form className="text-[#032D60] w-full" action="" method="post">
          <fieldset className="border-4 border-dotted border-[#032D60] p-5">
            <legend className="px-2 italic -mx-2">Bem-vindo novamente!</legend>
            <label className="text-xs font-bold after:content-['*'] after:text-red-400" htmlFor="email">
              Email
            </label>     
            <input
              className="w-full p-2 mb-3 mt-1 outline-none ring-none focus:ring-2 focus:ring-[#032D60] text-black border border-[#032D60] rounded"
              type="email"
              id="email"
              required
            />   
            <label className="text-xs font-bold after:content-['*'] after:text-red-400" htmlFor="password">
              Senha
            </label>
            <input
              className="w-full p-2 mb-3 mt-1 outline-none ring-none focus:ring-2 focus:ring-[#032D60] text-black border border-[#032D60] rounded"
              type="password"
              id="password"
              required
            />
            <a href="#" className="block text-right text-xs text-[#032D60] mb-4">
              Esqueceu a senha?
            </a>
            <button className="w-full rounded bg-[#032D60] text-white p-2 text-center font-bold hover:bg-[#031A45]">
              Entrar
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
