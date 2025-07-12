import 'mdb-ui-kit/css/mdb.min.css';
import Form from './components/Form';
import ItemList from './components/ItemList';


function App() {


  return (
    <>  
    <section className="vh-100" style={{ backgroundColor: "#e2d5de" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{ borderRadius: 15 }}>
          <div className="card-body p-5">
            <h6 className="mb-3">Todo List</h6>
            <Form/>
            <ItemList />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     
    </>
  )
}

export default App
