const Login = () => {
  return (
    // 
    <div
  className="bg-cover font-sans bg-no-repeat relative z-0 bg-center h-screen"
  style={{
    backgroundImage: `url(${"https://static.vecteezy.com/system/resources/thumbnails/006/240/296/small_2x/idyllic-mountain-landscape-with-fresh-green-meadows-and-blooming-wildflowers-idyllic-nature-countryside-view-rural-outdoor-natural-view-idyllic-banner-nature-panoramic-spring-summer-scenery-photo.jpg"})`,
  }}
>
  <div className="absolute top left-0 w-full h-screen opacity-0 -z-20"></div>

  <div className="flex justify-center  py-2 h-full">
    <div className="w-full max-w-md px-4">
      <div className="p-8 text-white bg-transparent border border-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-center">Login</h1>
        <div className="flex flex-col mt-2">
          <label className="mb-1 text-xl font-semibold">Email</label>
          <input
            className="px-2 py-1 text-white bg-transparent border border-white focus:outline-none focus:ring-0 focus:border-white"
            type="email"
            placeholder="enter email"
          ></input>
        </div>
        <div className="flex flex-col mt-4">
          <label className="mb-1 text-xl font-semibold">Password</label>
          <input
            className="px-2 py-1 text-white bg-transparent border border-white focus:outline-none focus:ring-0 focus:border-white"
            type="password"
            placeholder="enter password"
          ></input>
        </div>
        <div className="flex justify-between mt-4 text-sm">
          <div className="flex flex-col mt-2">
            <label className="text-lg">Don't have an account?</label>
            <a href="#" className="text-white text-lg">Forgot password?</a>
            <button className="w-full py-4 bg-indigo-700 border-indigo-700 rounded mt-3 text-white font-bold">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;
