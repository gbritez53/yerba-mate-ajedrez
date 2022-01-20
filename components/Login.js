import AdminLayout from "components/Layouts/AdminLayout";
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-login flex items-center justify-center p-12">
      <div className="lg:w-2/6 md:w-1/2 bg-gray-200 bg-opacity-50 rounded-2xl p-8 flex flex-col  w-full mt-10 md:mt-0 backdrop-blur-md">
        <figure className="flex justify-center my-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            objectFit="contain"
          />
        </figure>

        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 font-semibold text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-lime-500 rounded border border-gray-600 focus:border-lime-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 font-semibold text-white">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-lime-500 rounded border border-gray-600 focus:border-lime-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button className="text-white bg-primary border-0 py-2 px-8 mt-4 focus:outline-none hover:bg-primaryHover rounded text-lg transition-all ease-in-out duration-300">
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
