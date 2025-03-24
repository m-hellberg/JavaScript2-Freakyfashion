import './Spots.css';

const Spots = () => {
    return (
        <section className="spots">
            <div className="spot">
                <img src="/images/Spots1.png" alt="Spot 1" />
                <div className="spot-content">
                    <h2>SKOR, BOOTS & CREEPERS</h2>
                    <a href="#shop-now" className="spot-btn">SE MER</a>
                </div>
            </div>
            <div className="spot">
                <img src="/images/Spots2.png" alt="Spot 2" />
                <div className="spot-content">
                    <h2>TRENDIGA & UNIKA VÄSKOR</h2>
                    <a href="#shop-now" className="spot-btn">HITTA DIN FAVORIT</a>
                </div>
            </div>
            <div className="spot">
                <img src="/images/Spots3.png" alt="Spot 3" />
                <div className="spot-content">
                    <h2>ALTERNATIVE DENIM-ART by JOSÉL</h2>
                    <a href="#shop-now" className="spot-btn">LÄS MER</a>
                </div>
            </div>
        </section>
    );
}

export default Spots;