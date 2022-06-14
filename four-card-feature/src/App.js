import './App.css';
import CardBody from './components/CardBody';

function App() {
  return (

    <div className="main-content mx-auto  mt-20">
      <div className='text-center'>
      <h1 className='font-light text-gray-600	'>Reliable, efficient delivery</h1>
      <h2 className='font-bold text-gray-600		'>Powered by Technology</h2>
      <h6 className='font-light text-gray-400'>
        Our Artifical intelligence powered tools use millions
        of project data <br/> points to ensure that your project is
        successful

      </h6>
      </div>
      <div className='mt-5'>
      <div className='grid grid-cols-3 gap-8 items-center	'>
      <CardBody title="Supervisor" caption="Monitors activity to idenify project roadbacks" icon="images/icon-supervisor.svg" borderColor="border-teal-400"/>
      <div  className='w-full grid grid-rows-2 gap-8'>
      <CardBody  title="Team Builder" caption="Scans our talent network to create the optimal team for your project" icon="images/icon-team-builder.svg" borderColor="border-red-400"/>
      <CardBody  title="Karma" caption="Regulary evaluates our talent to ensure quality" icon="images/icon-karma.svg" borderColor="border-amber-400	"/>
      </div>
      <CardBody  title="Calculator" caption="Uses data from past projects to provide better delivery estimates" icon="images/icon-calculator.svg" borderColor="border-blue-400"/>
      </div>
      </div>
    </div>
  );
}
export default App;