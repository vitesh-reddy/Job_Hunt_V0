const AuthLayout = ({ children }) => (
  <div className="flex min-h-screen items-stretch font-sans max-h-screen p-6">
    <div className="flex flex-1 items-center justify-center">{children}</div>

    <div
      className="hidden w-[40vw] items-center justify-center lg:flex"
      style={{
        backgroundImage: `url('./assets/Auth_Page_Image.png')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  </div>
);

export default AuthLayout;
