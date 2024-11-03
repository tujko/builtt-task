function Login() {
    return <>
        <div className="login">
            <div className="login-wrapper">
                <h3 className="font-bold">Prijavi se na svoj nalog</h3>
                <form action="/" method="post" className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="email"><span className="input-label">E-mail adresa</span></label>
                        <input type="email" name="email" placeholder="Upišite e-mail"/>
                    </div>
                    <div className="flex flex-col mb-16">
                        <label htmlFor="password"><span className="input-label">Šifra</span></label>
                        <input type="password" name="password" placeholder="Upišite šifru" />
                    </div>
                    <button className="btn" type="submit">Prijavi se na nalog</button>
                </form>
            </div>
        </div>
    </>
}

export default Login;