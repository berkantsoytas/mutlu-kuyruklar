import AboutUs from './components/about-us';
import Products from './components/products';

function App() {
  return (
    <>
      <div className="flex items-center justify-center text-3xl h-[42rem]">
        <h1 className="text-5xl font-light text-white">- Mutlu Kuyruklar -</h1>
      </div>

      <Products />
      <AboutUs />
    </>
  );
}

export default App;
