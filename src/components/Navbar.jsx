
const Navbar = () => {
  return (
    <section className="absolute z-10  bg-black w-full shadow-[0px_10px_15px_2px_rgba(255,255,255,0.05)]">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-5 px-8 py-8">
        <div className="flex gap-10 text-slate-300 uppercase text-5 font-montserrat">
          <p>logo</p>
        </div>
        <div className="flex gap-10 text-slate-300 uppercase text-5 font-montserrat">
          <span className=""><a href="#">Home</a></span>
          <a href="#">Play</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div >
        <p className="flex gap-10 text-slate-300 uppercase text-5 font-montserrat">SignIn / SignUp</p>
      </div>
    </section>
  )
}

export default Navbar