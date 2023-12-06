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
        <div className="App p-4" style={bodyBg}>
            <header className="d-flex justify-content-sm-between align-items-center h-15 pt-2">
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
            <main className="d-flex h-85">
                <div className="container w-50 p-4 ml-5 mt-5">
                    <h1 className="card-title text-white font-style-dashboard">Inovasi <span className="font-weight-bold" style={purpleColor}>Finansial</span></h1>
                    <h1 className="card-title text-white font-style-dashboard">Untuk Masa Depan</h1>
                    <h1 className="card-title text-white font-style-dashboard">Yang Lebih <span className="font-weight-bold" style={purpleColor}>Cerah</span></h1>
                    <p className="text-white text-sm-left mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis reprehenderit tenetur cupiditate magni suscipit in eaque assumenda soluta repellendus voluptate. Aspernatur corporis quas totam pariatur, sint quo tenetur excepturi consequatur.</p>
                    <button type="button" className="btn btn-secondary btn-sm rounded-pill font-weight-bold text-dark p-2 mt-2" style={purpleBgColor}>Bergabung Sekarang!</button>
                </div>
                <div className="container w-50">
                    <img src="/image/ball.png" className="position-absolute rotate-animation" style={{ width: '250px', height: 'auto', right: '270px', top: '130px'}}/>
                    <img src="/image/u.png" className="position-absolute floating-animation" style={{ width: '500px', height: 'auto', bottom: '50px' }}/>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;