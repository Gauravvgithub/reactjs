import "./App.css";
import Card from "./components/Card";

function App() {
  // let myObj = {
  //   username: "Gaurav",
  //   age:22
  // }
  // let newArr = [1,2,3,4,5]
  return (
    <>
      <h1
        className="bg-green-400 p-4 rounded-2xl mt-10"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Hello world!
      </h1>
      {/* <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/7775641/pexels-photo-7775641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="coding"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-white">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Learning Coding</div>
            <div className="text-slate-700 dark:text-slate-500">
              Frontend Developer | Delhi
            </div>
          </figcaption>
        </div>
      </figure> */}
      <Card username= "Gaurav" btnText="Explore more"/>
      <Card username= "Raj" btnText="Read me"/>
      <Card username= "Nitro" btnText="Find it"/>
      <Card username= "Acer" btnText="Visit me"/>
    </>
  );
}

export default App;
