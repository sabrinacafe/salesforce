import React from 'react';

const SignupForm: React.FC = () => {
  return (
    <form>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 min-h-screen mt-20 bg-blue-500"> {/* Fundo alterado */}
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Criar uma conta
            </p>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                Seu nome de usuário
              </label>
              <input
                placeholder="Escreva seu nome completo"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                id="username"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Senha
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="••••••••"
                id="password"
                type="password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">
                Confirmação de senha
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="••••••••"
                id="confirmPassword"
                type="password"
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  type="checkbox"
                  aria-describedby="terms"
                  id="terms"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light text-gray-500">
                  Eu aceito os
                  <a href="#" className="font-medium text-primary-600 hover:underline text-primary-500">
                    Termos e Condições
                  </a>
                </label>
              </div>
            </div>
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
              type="submit"
            >
              Criar uma conta
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
