import Footer from "../Footer/Footer"
import { Nav } from "../Nav/Nav"

function Premium() {
    return (
        <>
            <div>
                <Nav />
            </div>
            <div>
                <form className="form" >
                    <input type="text" name="N° de tarjeta" placeholder="N° de tarjeta" required />
                    <input type="date" name="fecha" placeholder="Fecha" required />
                    <input type="text" name="codigo" placeholder="codigo" required />
                    <button type="submit" className="btn">Pagar</button>
                </form>
            </div>




            <div>
                <Footer />
            </div>
        </>
    )
}
export default Premium