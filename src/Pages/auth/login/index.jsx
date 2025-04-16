export default function Login() {
    return (
        <>
            <div ClassName="modal modal-sheet position-static d-block py-md-5" tabindex="-1" role="dialog" id="modalSignin">
                <div ClassName="modal-dialog">
                    <div ClassName="modal-content rounded-4 shadow">
                        <div ClassName="modal-header p-5 pb-4 border-bottom-0">
                            <h1 ClassName="fw-bold mb-0 fs-2">Login</h1>
                            <button type="button" ClassName="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div ClassName="modal-body p-5 pt-0">
                            <form ClassName="">
                                <div ClassName="form-floating mb-3">
                                    <input type="email" ClassName="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
                                        <label for="floatingInput">Email address</label>
                                </div>
                                <div ClassName="form-floating mb-3">
                                    <input type="password" ClassName="form-control rounded-3" id="floatingPassword" placeholder="Password"/>
                                        <label for="floatingPassword">Password</label>
                                </div>
                                <button ClassName="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Login</button>
                                <hr ClassName="my-4"/>
                                    <h2 ClassName="fs-5 fw-bold mb-3">Or use a third-party</h2>
                                    <button ClassName="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                                        Login with Google
                                    </button>
                                    <button ClassName="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                                        Login with Facebook
                                    </button>
                                    <button ClassName="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                                        Login with GitHub
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}