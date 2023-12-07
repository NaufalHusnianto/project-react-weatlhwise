import '../index.css';

function Dashboard() {
    const bodyBg = {
        backgroundImage: `url(/image/dashboard-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    }

    const purpleColor = {
        color: '#CD86C9'
    }

    const purpleBgColor = {
        backgroundColor: '#CD86C9'
    }

    return (
        <div className="App p-4 h-100vh" style={bodyBg}>
            <header className="d-flex justify-content-between align-items-center pt-2">
                <h2 className="pl-5 text-white font-weight-normal text-sm-left">WealthWise <span style={purpleColor}>Finance</span></h2>
                <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex ">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link text-white" href="">Perseorangan</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="">Bisnis</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="">Prioritas</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="">Tentang WealthWise</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="">Bantuan</a></li>
                    </ul>
                    <button type="button" className="btn btn-secondary btn-sm rounded-pill font-weight-bold text-dark pl-4 pr-4 ml-4" style={purpleBgColor}>Sign In</button>
                </nav>
            </header>
            <main className="d-flex flex-wrap-reverse flex-row justify-content-center align-items-center h-85">
                <div className="container w-100 h-100 col-lg-6 p-5 mt-2">
                    <h1 className="card-title text-white font-style-dashboard">Inovasi <span className="font-weight-bold" style={purpleColor}>Finansial</span></h1>
                    <h1 className="card-title text-white font-style-dashboard">Untuk Masa Depan</h1>
                    <h1 className="card-title text-white font-style-dashboard">Yang Lebih <span className="font-weight-bold" style={purpleColor}>Cerah</span></h1>
                    <p className="text-white text-sm-left mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis reprehenderit tenetur cupiditate magni suscipit in eaque assumenda soluta repellendus voluptate. Aspernatur corporis quas totam pariatur, sint quo tenetur excepturi consequatur.</p>
                    <button type="button" className="btn btn-secondary btn-sm rounded-pill font-weight-bold text-dark p-2 mt-2" style={purpleBgColor}>Bergabung Sekarang!</button>
                </div>
                <div className="container w-100 col-lg-6 text-center mb-5 position-relative d-flex align-items-center justify-content-center flex-column">
                    <img src="/image/ball.png" className="rotate-animation img-fluid position-absolute" style={{ maxWidth: '12rem', bottom: '20%', right: '40%', transform: 'translate(-50%, -50%)' }} alt="Ball"/>
                    <img src="/image/u.png" className="floating-animation img-fluid position-absolute" style={{ maxWidth: '28rem', transform: 'translate(-50%, -50%)' }} alt="U" />
                </div>
            </main>
        </div>
    );
}

export default Dashboard;