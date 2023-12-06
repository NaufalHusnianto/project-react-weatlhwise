function Login() {
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

    return (
        <div className="App p-4" style={bodyBg}>
            <header className="d-flex justify-content-center align-items-center flex-column h-15">
                <h1 style={purpleColor}>WealthWise <span className="text-white">Finance</span></h1>
                <p className="text-white">Inovasi Finansial Untuk Masa Depan Yang Lebih Cerah</p>
            </header>
            <main className="d-flex justify-content-center h-85">
                    <div class="card bg-transparent">
                        <div class="card-header">
                            <h3 className="text-white">Sign In</h3>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="input-group form-group">
                                    <input type="text" class="form-control" placeholder="username" />
                                </div>
                                <div class="input-group form-group">
                                    <input type="password" class="form-control" placeholder="password" />
                                </div>
                                <div class="row align-items-center remember text-white">
                                    <input type="checkbox"/>Remember Me
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Login" class="btn float-right login_btn" />
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-center links text-white">
                                Don't have an account?<a href="#">Sign Up</a>
                            </div>
                            <div class="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
            </main>
        </div>
    );
}

export default Login;